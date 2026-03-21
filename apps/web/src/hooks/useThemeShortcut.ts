import { useEffect } from "react"

export function useThemeShortcut() {
  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    const handleKeydown = (e: KeyboardEvent) => {
      const modifier = e.shiftKey || e.altKey

      if (e.ctrlKey && modifier) {
        if (e.key.toLowerCase() === "d") {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme", "dark") // save dark mode
        } else if (e.key.toLowerCase() === "l") {
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme", "light") // save light mode
        }
      }
    }

    globalThis.addEventListener("keydown", handleKeydown)
    return () => globalThis.removeEventListener("keydown", handleKeydown)
  }, [])
}
