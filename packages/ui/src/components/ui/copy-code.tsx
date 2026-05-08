"use client"

import { useState } from "react"

import { Copy, Check } from "lucide-react"

type CopyCodeProps = {
  code: string
  language?: string
}

function CopyCode({ code = "javascript" }: Readonly<CopyCodeProps>) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      // Check if clipboard API is available
      if (navigator.clipboard && globalThis.isSecureContext) {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } else {
        // Fallback method for older browsers or non-secure contexts
        const textArea = document.createElement("textarea")

        textArea.value = code
        textArea.style.position = "absolute"
        textArea.style.left = "-999999px"
        document.body.prepend(textArea)
        textArea.select()
        document.execCommand("copy")
        textArea.remove()
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }
    } catch (err) {
      console.error("Failed to copy", err)

      // Show user feedback even if copy failed
      alert("Failed to copy code to clipboard")
    }
  }

  // Simple syntax highlighting for JavaScript/TypeScript
  const highlightCode = (code: string) => {
    let result = code

    // 1. Strings (blue) - process first to protect content
    result = result.replaceAll(
      /"([^"]*)"/g,
      '<span class="text-blue-600 dark:text-blue-400">"$1"</span>'
    )
    result = result.replaceAll(
      /\b(agent)\b/g,
      '<span class="text-blue-600 dark:text-blue-400">$1</span>'
    )

    // 2. Keywords (red/green)
    result = result.replaceAll(
      /\b(const|let|var|new|false)\b/g,
      '<span class="text-red-600 dark:text-red-400">$1</span>'
    )

    result = result.replaceAll(
      /\b(AIAgent|true)\b/g,
      '<span class="text-green-600 dark:text-green-400">$1</span>'
    )

    // 3. Comments (gray) - process last
    result = result.replaceAll(
      /\/\/ ([^\n]*)/g,
      '<span class="text-gray-500 dark:text-gray-400">// $1</span>'
    )

    return result
  }

  return (
    <div
      className="relative group rounded-none bg-muted p-1 sm:p-2"
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      <div className="relative rounded-none bg-white p-2.5 sm:p-3 text-[10px] sm:text-xs dark:bg-black overflow-hidden">
        <pre className="overflow-x-auto sm:overflow-x-visible pr-8 scrollbar-thin scrollbar-thumb-muted">
          <code 
            className="block whitespace-pre-wrap sm:whitespace-pre break-all sm:break-normal"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }} 
          />
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-1.5 top-1.5 rounded-md bg-muted/80 p-1.5 transition-all hover:bg-muted sm:bg-muted/50 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <Check className="size-3 sm:size-3.5" /> : <Copy className="size-3 sm:size-3.5" />}
        </button>
      </div>
    </div>
  )
}

export { CopyCode }
