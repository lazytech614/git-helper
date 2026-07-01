import { DiCodeigniter } from "react-icons/di";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white dark:bg-black">
      <div className="w-full max-w-2xl px-6">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-center text-center">
          <DiCodeigniter className="h-8 w-8" />
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
            Tool
            <span className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-violet-500">
              Stack
            </span>
          </h1>
        </div>

        {/* Code Block */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-xl dark:border-zinc-800">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-xs text-zinc-400">loading.ts</span>
          </div>

          {/* Code */}
          <pre className="overflow-x-auto p-6 text-sm leading-7">
            <code>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-cyan-300">toolStack</span>{" "}
                <span className="text-white">=</span> <span className="text-white">{"{"}</span>
              </div>

              <div className="pl-6">
                <span className="text-cyan-300">snippets</span>
                <span className="text-white">:</span> <span className="text-green-400">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-cyan-300">cheatsheets</span>
                <span className="text-white">:</span> <span className="text-green-400">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-cyan-300">glossary</span>
                <span className="text-white">:</span> <span className="text-green-400">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-cyan-300">docs</span>
                <span className="text-white">:</span> <span className="text-green-400">true</span>,
              </div>

              <div>
                <span className="text-white">{"};"}</span>
              </div>

              <div className="mt-4">
                <span className="text-purple-400">await</span>{" "}
                <span className="text-cyan-300">toolStack</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">initialize</span>
                <span className="text-white">();</span>
                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-white align-middle" />
              </div>
            </code>
          </pre>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div className="h-full w-1/2 animate-[loading_1.6s_ease-in-out_infinite] rounded-full bg-zinc-900 dark:bg-white" />
        </div>

        {/* Tip */}
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          💡 Tip: Search by tags like <span className="font-medium">async</span>,{" "}
          <span className="font-medium">performance</span>, or{" "}
          <span className="font-medium">react</span>.
        </div>
      </div>
    </div>
  );
}
