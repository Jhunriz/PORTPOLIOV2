import { Button } from "@workspace/ui/components/button"
import { FolderGit2 } from "lucide-react"

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100">
      {/* Hero Section */}
      <main className="mx-auto grid max-w-7xl items-center gap-12 px-8 pt-20 pb-32 lg:grid-cols-2">
        {/* Left Column: Text */}
        <div className="space-y-6">
          <h1 className="flex flex-col text-6xl leading-[1.05] font-bold tracking-tight text-slate-900 md:text-7xl">
            <span>CODEHOLDER</span>
            <span className="-mt-1 text-sm text-slate-900">BY JHUNRIZ</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-slate-500">
            I build modern, responsive websites and web apps that bring ideas to
            life.
          </p>
          <div className="g ap-4 flex flex-wrap">
            <Button
              size="lg"
              className="rounded-md px-6 py-3 text-base text-white transition-all hover:bg-gray-500"
            >
              Github <FolderGit2 className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-md border-slate-200 px-6 py-3 text-base"
            >
              View projects docs
            </Button>
          </div>
        </div>

        {/* Right Column: Stack / Illustration */}
        <div className="relative flex h-[400px] w-full items-center justify-center lg:h-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-50/50 to-transparent blur-3xl" />
          <img
            src="/path-to-your-isometric-illustration.png"
            alt="Stack Illustration"
            className="relative z-10 w-full max-w-[400px] object-contain lg:max-w-[500px]"
          />
        </div>
      </main>

      {/* Social Proof / Logo Wall */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="flex flex-wrap items-center justify-between gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
            <p className="mb-4 w-full text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase lg:mb-0 lg:w-auto">
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
