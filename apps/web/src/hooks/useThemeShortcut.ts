import { useEffect } from "react"

export function useThemeShortcut() {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const modifier = e.shiftKey || e.altKey

      if (e.ctrlKey && modifier) {
        if (e.key.toLowerCase() === "d") {
          document.documentElement.classList.add("dark")
        } else if (e.key.toLowerCase() === "l") {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    globalThis.addEventListener("keydown", handleKeydown)
    return () => globalThis.removeEventListener("keydown", handleKeydown)
  }, [])
}
