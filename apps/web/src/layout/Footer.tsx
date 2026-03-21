import { useEffect, useState, useRef } from "react"
import { ExternalLink } from "lucide-react"

const styles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes revealText {
    from { clip-path: inset(0 0 100% 0); transform: translateY(60px); opacity: 0; }
    to { clip-path: inset(0 0 0% 0); transform: translateY(0); opacity: 1; }
  }
  @keyframes hideText {
    from { clip-path: inset(0 0 0% 0); transform: translateY(0); opacity: 1; }
    to { clip-path: inset(0 0 100% 0); transform: translateY(60px); opacity: 0; }
  }
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .footer-animate { opacity: 0; }
  .footer-animate.visible { animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .footer-delay-1 { animation-delay: 0.1s; }
  .footer-delay-2 { animation-delay: 0.22s; }
  .footer-delay-3 { animation-delay: 0.34s; }
  .footer-delay-4 { animation-delay: 0.46s; }
  .dev-text-wrapper { overflow: hidden; pointer-events: none; }
  .dev-text { display: block; will-change: transform, opacity, clip-path; }
  .dev-text.entering { animation: revealText 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .dev-text.exiting { animation: hideText 0.5s cubic-bezier(0.4, 0, 1, 1) forwards; }
  .nav-link { display: block; transition: color 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .nav-link:hover { transform: translateX(5px); color: white; }
  .gradient-bg {
    position: absolute;
    inset: 0;
    z-index: -10;
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #42e695);
    background-size: 600% 600%;
    animation: gradientMove 20s ease infinite;
    border-radius: inherit;
    filter: blur(120px);
  }
`

export function Footer() {
  const [typographyState, setTypographyState] = useState<
    "hidden" | "entering" | "visible" | "exiting"
  >("hidden")
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight

      if (atBottom) {
        if (typographyState === "hidden" || typographyState === "exiting") {
          setTypographyState("entering")
        }
      } else if (
        typographyState === "visible" ||
        typographyState === "entering"
      ) {
        setTypographyState("exiting")
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setTypographyState("hidden"), 500)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [typographyState])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  const visibleClass = isVisible ? "visible" : ""

  return (
    <>
      <style>{styles}</style>
      <footer className="relative w-full overflow-hidden border-t border-gray-200 bg-white/30 text-black shadow-2xl backdrop-blur-lg transition-colors duration-500 dark:border-gray-700 dark:bg-black/30 dark:text-white">
        {/* Animated Gradient Background */}
        <div className="gradient-bg" />

        <div
          ref={footerRef}
          className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className={`footer-animate footer-delay-1 space-y-10 ${visibleClass}`}
            >
              <div className="space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get Support :
                </p>
                <a
                  href="mailto:jhunriz14@gmail.com"
                  className="text-black transition-colors duration-300 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  jhunriz14@gmail.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:justify-end lg:gap-16">
              <nav
                className={`footer-animate footer-delay-2 space-y-3 ${visibleClass}`}
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/collection", label: "Articles" },
                  { href: "/projects", label: "About" },
                  { href: "/pricing", label: "Contact" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="nav-link text-gray-600 dark:text-gray-300"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <nav
                className={`footer-animate footer-delay-3 space-y-3 ${visibleClass}`}
              >
                {[
                  { href: "https://linkedin.com", label: "LinkedIn" },
                  { href: "https://github.com", label: "Github" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link flex items-center gap-1 text-gray-600 dark:text-gray-300"
                  >
                    {label} <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div
            className={`footer-animate footer-delay-4 mt-12 flex flex-col justify-end gap-8 md:flex-row md:gap-16 lg:mt-16 ${visibleClass}`}
          >
            <div className="text-right text-sm text-gray-500 dark:text-gray-400">
              <p>Philippines</p>
              <p>Metro, Manila</p>
            </div>
          </div>
        </div>

        {typographyState !== "hidden" && (
          <div className="dev-text-wrapper relative z-10 px-4 pb-4">
            <h1
              className={`dev-text font-bold tracking-tighter text-black select-none dark:text-white ${
                typographyState === "entering" || typographyState === "visible"
                  ? "entering"
                  : "exiting"
              }`}
              style={{ fontSize: "clamp(60px, 20vw, 20vw)", lineHeight: 1 }}
              onAnimationEnd={() => {
                if (typographyState === "entering")
                  setTypographyState("visible")
              }}
            >
              Developer
            </h1>
          </div>
        )}
      </footer>
    </>
  )
}
