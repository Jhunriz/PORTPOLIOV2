import { Button } from "@workspace/ui/components/button"
import { FolderGit2 } from "lucide-react"
import { Kbd } from "@workspace/ui/components/kbd"
import { useThemeShortcut } from "@/hooks/useThemeShortcut"
import { TechCarousel } from "./TechCarousel"
import TimelinePage from "./TimelinePage"

export default function HeroPage() {
  useThemeShortcut()

  return (
    <div className="min-h-screen font-sans text-black transition-colors duration-500 dark:text-white">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 space-y-5 sm:space-y-6 md:space-y-8 lg:order-1">
            <h1 className="flex flex-col space-y-1 sm:space-y-2">
              <span className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl leading-[1.1] font-bold tracking-tight text-transparent sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.1] lg:text-7xl xl:text-8xl dark:from-white dark:to-gray-400">
                CODEHOLDER
              </span>
              <span className="text-[10px] font-medium text-gray-600 sm:text-sm md:text-base dark:text-gray-400">
                BY JHUNRIZ
              </span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
              I build modern, responsive websites and web apps that bring ideas
              to life.
            </p>

            <div className="space-y-2 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
              <p className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>Toggle theme:</span>
                <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <Kbd className="text-xs sm:text-sm">Ctrl</Kbd> +{" "}
                  <Kbd className="text-xs sm:text-sm">Shift</Kbd>
                  <span className="hidden sm:inline">(or</span>
                  <span className="inline sm:hidden">/</span>
                  <Kbd className="text-xs sm:text-sm">Alt</Kbd>) +{" "}
                  <Kbd className="text-xs sm:text-sm">D</Kbd>
                </span>
                <span className="hidden sm:inline">(dark)</span>
                <span className="inline sm:hidden">/</span>
                <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="hidden sm:inline">/</span>
                  <Kbd className="text-xs sm:text-sm">Ctrl</Kbd> +{" "}
                  <Kbd className="text-xs sm:text-sm">Shift</Kbd>
                  <span className="hidden sm:inline">(or</span>
                  <span className="inline sm:hidden">/</span>
                  <Kbd className="text-xs sm:text-sm">Alt</Kbd>) +{" "}
                  <Kbd className="text-xs sm:text-sm">L</Kbd>
                </span>
                <span className="hidden sm:inline">(light)</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
              <Button
                size="lg"
                className="w-full rounded-md bg-black px-5 py-2.5 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 sm:w-auto sm:px-6 sm:py-3 sm:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <span>GitHub</span>
                <FolderGit2 className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-md border border-black px-5 py-2.5 text-sm text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 sm:w-auto sm:px-6 sm:py-3 sm:text-base dark:border-white dark:text-white dark:hover:bg-gray-800"
              >
                View projects docs
              </Button>
            </div>
          </div>

          <div className="relative order-1 flex h-75 w-full items-center justify-center sm:h-87.5 md:h-100 lg:order-2 lg:h-112.5 xl:h-125">
            <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-tr from-gray-200/50 via-gray-100/30 to-transparent blur-2xl sm:blur-3xl dark:from-gray-800/50 dark:via-gray-700/30" />

            <div className="animate-spin-slow absolute h-2/3 w-2/3 rounded-full border-2 border-gray-200 opacity-30 dark:border-gray-700" />
            <div className="animate-spin-slow animation-delay-1000 absolute h-1/2 w-1/2 rounded-full border-2 border-gray-300 opacity-40 dark:border-gray-600" />
            <div className="absolute h-1/3 w-1/3 animate-pulse rounded-full bg-linear-to-r from-blue-500 to-purple-500 opacity-20 blur-xl" />
            <div className="relative z-10">
              <div className="text-6xl opacity-20 select-none sm:text-7xl md:text-8xl lg:text-9xl">
                {`</>`}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Tech Carousel and Timeline */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <TechCarousel />
      </div>
      <TimelinePage />
    </div>
  )
}
