"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Copy,
  Check,
  Download,
  Wand2,
  Eraser,
  PlayCircle,
  Minimize2,
  Hash,
} from "lucide-react";

import { toast } from "sonner";
import { format } from "sql-formatter";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Dialect =
  | "sql"
  | "postgresql"
  | "mysql"
  | "sqlite"
  | "mariadb";

type KeywordCase = "upper" | "lower";

const EXAMPLE_SQL = `SELECT u.id,u.name,u.email,o.total,o.status
FROM users u
INNER JOIN orders o ON o.user_id=u.id
WHERE o.total>100
AND o.status='completed'
ORDER BY o.created_at DESC;`;

const DIALECTS: {
  label: string;
  value: Dialect;
}[] = [
  {
    label: "ANSI SQL",
    value: "sql",
  },
  {
    label: "PostgreSQL",
    value: "postgresql",
  },
  {
    label: "MySQL",
    value: "mysql",
  },
  {
    label: "SQLite",
    value: "sqlite",
  },
  {
    label: "MariaDB",
    value: "mariadb",
  },
];

const INDENTS = [2, 4, 8];

export default function SqlFormatter() {
  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [error, setError] = useState("");

  const [copied, setCopied] = useState(false);

  const [indent, setIndent] = useState(2);

  const [dialect, setDialect] =
    useState<Dialect>("sql");

  const [keywordCase, setKeywordCase] =
    useState<KeywordCase>("upper");

  const [autoFormat, setAutoFormat] =
    useState(false);

  // -----------------------------------------
  // FORMAT SQL
  // -----------------------------------------

  const formatSql = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      const formatted = format(input, {
        language: dialect,
        tabWidth: indent,
        keywordCase,
      });

      setOutput(formatted);
      setError("");
    } catch (err: any) {
      setError(err.message || "Invalid SQL");
      setOutput("");
    }
  };

  // -----------------------------------------
  // MINIFY
  // -----------------------------------------

  const minifySql = () => {
    if (!input.trim()) return;

    try {
      const formatted = format(input, {
        language: dialect,
        tabWidth: 0,
        keywordCase,
      });

      const minified = formatted
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      setOutput(minified);

      setError("");
    } catch (err: any) {
      setOutput("");
      setError(err.message);
    }
  };

  // -----------------------------------------
  // COPY
  // -----------------------------------------

  const copyOutput = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setCopied(true);

    toast.success("Copied to clipboard");

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // -----------------------------------------
  // DOWNLOAD
  // -----------------------------------------

  const downloadSql = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/sql",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "formatted.sql";

    a.click();

    URL.revokeObjectURL(url);

    toast.success("Downloaded SQL");
  };

  // -----------------------------------------
  // CLEAR
  // -----------------------------------------

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  // -----------------------------------------
  // EXAMPLE
  // -----------------------------------------

  const loadExample = () => {
    setInput(EXAMPLE_SQL);

    try {
      const formatted = format(EXAMPLE_SQL, {
        language: dialect,
        tabWidth: indent,
        keywordCase,
      });

      setOutput(formatted);

      setError("");

      toast.success("Example loaded");
    } catch {}
  };

  // -----------------------------------------
  // AUTO FORMAT
  // -----------------------------------------

  useEffect(() => {
    if (!autoFormat) return;

    formatSql();
  }, [
    input,
    indent,
    dialect,
    keywordCase,
    autoFormat,
  ]);

  // -----------------------------------------
  // SHORTCUTS
  // -----------------------------------------

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ctrl + Enter

      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        formatSql();
      }

      // Ctrl + Shift + C

      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "c"
      ) {
        e.preventDefault();
        copyOutput();
      }

      // Ctrl + L

      if (
        e.ctrlKey &&
        e.key.toLowerCase() === "l"
      ) {
        e.preventDefault();
        clearAll();
      }
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, [input, output]);

  // -----------------------------------------
  // STATS
  // -----------------------------------------

  const stats = useMemo(() => {
    const lines =
      output.length === 0
        ? 0
        : output.split("\n").length;

    const words =
      output.length === 0
        ? 0
        : output.split(/\s+/).length;

    return {
      characters: output.length,
      lines,
      words,
    };
  }, [output]);

  return (
  <div className="flex flex-col gap-6">

    {/* Toolbar */}

    <div className="flex flex-wrap items-center justify-between gap-4">

      <div className="flex flex-wrap items-center gap-2">

        {/* Dialect */}

        <Select
          value={dialect}
          onValueChange={(value) =>
            setDialect(value as Dialect)
          }
        >
          <SelectTrigger className="w-[170px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {DIALECTS.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Indent */}

        <Select
          value={indent.toString()}
          onValueChange={(value) =>
            setIndent(Number(value))
          }
        >
          <SelectTrigger className="w-[130px]">
            <Hash className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {INDENTS.map((size) => (
              <SelectItem
                key={size}
                value={size.toString()}
              >
                {size} Spaces
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Keyword Case */}

        <Select
          value={keywordCase}
          onValueChange={(value) =>
            setKeywordCase(
              value as KeywordCase
            )
          }
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="upper">
              UPPERCASE
            </SelectItem>

            <SelectItem value="lower">
              lowercase
            </SelectItem>
          </SelectContent>
        </Select>

      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-2">

        <Button
          variant="outline"
          onClick={loadExample}
        >
          <PlayCircle className="mr-2 h-4 w-4" />
          Try Example
        </Button>

        <Button
          variant="outline"
          onClick={clearAll}
        >
          <Eraser className="mr-2 h-4 w-4" />
          Clear
        </Button>

        <Button
          variant="outline"
          onClick={minifySql}
        >
          <Minimize2 className="mr-2 h-4 w-4" />
          Minify
        </Button>

        <Button
          onClick={formatSql}
          className="
          bg-gradient-to-r
          from-purple-600
          to-violet-600
          hover:from-purple-700
          hover:to-violet-700
        "
        >
          <Wand2 className="mr-2 h-4 w-4" />
          Format
        </Button>

      </div>

    </div>

    {/* Auto Format */}

    <div className="flex items-center gap-3">

      <input
        id="auto-format"
        type="checkbox"
        checked={autoFormat}
        onChange={(e) =>
          setAutoFormat(
            e.target.checked
          )
        }
        className="accent-purple-600"
      />

      <label
        htmlFor="auto-format"
        className="text-sm text-zinc-600 dark:text-zinc-400"
      >
        Format automatically while typing
      </label>

    </div>

    {/* Editors */}

    <div className="grid gap-6 lg:grid-cols-2">

      {/* Input */}

      <div className="flex flex-col">

        <div className="mb-2 flex items-center justify-between">

          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Input
          </h3>

          <Button
            variant="ghost"
            size="sm"
            onClick={loadExample}
          >
            Try Example
          </Button>

        </div>

        <textarea
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Paste SQL query..."
          spellCheck={false}
          rows={22}
          className="
          min-h-[520px]
          rounded-xl
          border
          border-zinc-200
          dark:border-zinc-800
          bg-zinc-50
          dark:bg-zinc-900
          p-4
          font-mono
          text-sm
          text-zinc-900
          dark:text-zinc-100
          placeholder:text-zinc-400
          focus:ring-2
          focus:ring-purple-500/40
          outline-none
          resize-none
        "
        />

      </div>

      {/* Output */}

      <div className="flex flex-col">

        <div className="mb-2 flex items-center justify-between">

          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Output
          </h3>

          <div className="flex gap-2">

            <Button
              variant="ghost"
              size="sm"
              disabled={!output}
              onClick={copyOutput}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-emerald-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              disabled={!output}
              onClick={downloadSql}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>

          </div>

        </div>

        <div
          className="
          flex-1
          min-h-[520px]
          overflow-auto
          rounded-xl
          border
          border-zinc-200
          dark:border-zinc-800
          bg-zinc-50
          dark:bg-zinc-900
        "
        >

          {error ? (

            <div className="m-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">

              <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">
                SQL Parse Error
              </h4>

              <p className="font-mono text-sm text-red-500">
                {error}
              </p>

            </div>

          ) : (

            <pre
              className="
              whitespace-pre-wrap
              break-words
              p-4
              font-mono
              text-sm
              leading-7
              text-zinc-800
              dark:text-zinc-200
            "
            >
              {output ||
                "Formatted SQL will appear here..."}
            </pre>

          )}

        </div>

      </div>

    </div>

    {/* Footer */}

    <div
      className="
      flex
      flex-wrap
      items-center
      justify-between
      rounded-xl
      border
      border-zinc-200
      dark:border-zinc-800
      bg-zinc-50
      dark:bg-zinc-900
      px-5
      py-4
      text-sm
    "
    >

      <div className="flex gap-6 text-zinc-500 dark:text-zinc-400">

        <span>
          Characters{" "}
          <strong className="text-zinc-900 dark:text-white">
            {stats.characters}
          </strong>
        </span>

        <span>
          Lines{" "}
          <strong className="text-zinc-900 dark:text-white">
            {stats.lines}
          </strong>
        </span>

        <span>
          Words{" "}
          <strong className="text-zinc-900 dark:text-white">
            {stats.words}
          </strong>
        </span>

      </div>

      <div className="text-xs text-zinc-500">

        Ctrl + Enter • Format &nbsp;&nbsp;|&nbsp;&nbsp;
        Ctrl + Shift + C • Copy

      </div>

    </div>

  </div>
);

}