import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["vesper"],           
      langs: ["typescript", "tsx", "css"],
    });
  }
  return highlighter;
}

export async function highlight(code: string, lang: string) {
  const hl = await getHighlighter();
  return hl.codeToHtml(code, {
    lang: lang === "react" ? "tsx" : lang,
    theme: "vesper",
  });
}