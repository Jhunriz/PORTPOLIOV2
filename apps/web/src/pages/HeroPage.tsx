import { useEffect } from "react"
import { Button } from "@workspace/ui/components/button"
import { FolderGit2 } from "lucide-react"
import { Kbd } from "@workspace/ui/components/kbd"

export default function HeroPage() {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Dark mode: Ctrl + Shift (or Alt) + D
      if (
        e.ctrlKey &&
        (e.shiftKey || e.altKey) &&
        e.key.toLowerCase() === "d"
      ) {
        document.documentElement.classList.add("dark")
      }
      // Light mode: Ctrl + Shift (or Alt) + L
      else if (
        e.ctrlKey &&
        (e.shiftKey || e.altKey) &&
        e.key.toLowerCase() === "l"
      ) {
        document.documentElement.classList.remove("dark")
      }
    }

    globalThis.addEventListener("keydown", handleKeydown)
    return () => globalThis.removeEventListener("keydown", handleKeydown)
  }, [])

  return (
    <div className="min-h-screen font-sans text-black transition-colors duration-500 dark:text-white">
      <main className="mx-auto grid max-w-7xl items-center gap-12 px-8 pt-20 pb-32 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="flex flex-col text-6xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            <span>CODEHOLDER</span>
            <span className="-mt-1 text-sm text-gray-700 dark:text-gray-300">
              BY JHUNRIZ
            </span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            I build modern, responsive websites and web apps that bring ideas to
            life.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Toggle theme: <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> (or <Kbd>Alt</Kbd>)
            + <Kbd>D</Kbd> (dark) / <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> (or{" "}
            <Kbd>Alt</Kbd>) + <Kbd>L</Kbd> (light)
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-md bg-black px-6 py-3 text-base text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
            >
              Github <FolderGit2 className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-md border border-black px-6 py-3 text-base text-black transition-colors hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800"
            >
              View projects docs
            </Button>
          </div>
        </div>
        <div className="relative flex h-[400px] w-full items-center justify-center lg:h-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-200/50 to-transparent blur-3xl dark:from-gray-800/50" />
          <img
            src="/path-to-your-isometric-illustration.png"
            alt="Stack Illustration"
            className="relative z-10 w-full max-w-[400px] object-contain grayscale lg:max-w-[500px]"
          />
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="flex flex-wrap items-center justify-between gap-12 opacity-70 grayscale transition-all hover:grayscale-0">
            <p className="mb-4 w-full text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase lg:mb-0 lg:w-auto dark:text-gray-500">
              Powering ideas for <br /> the best & brightest
            </p>
            <LogoPlaceholder name="Transistor" />
            <LogoPlaceholder name="OpenAI" />
            <LogoPlaceholder name="Apple" />
            <LogoPlaceholder name="Webflow" />
            <LogoPlaceholder name="Nike" />
            <LogoPlaceholder name="Zillow" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function LogoPlaceholder({ name }: { name: string }) {
  return <span className="text-xl font-bold tracking-tighter">{name}</span>
}
