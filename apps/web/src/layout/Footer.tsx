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
  .dev-text-wrapper { 
    overflow: hidden; 
    pointer-events: none;
    position: relative;
    z-index: 10;
  }
  .dev-text { 
    display: block; 
    will-change: transform, opacity, clip-path;
    word-break: break-word;
    font-weight: 700;
    letter-spacing: -0.025em;
  }
  .dev-text.entering { animation: revealText 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .dev-text.exiting { animation: hideText 0.5s cubic-bezier(0.4, 0, 1, 1) forwards; }
  .nav-link { 
    display: inline-block; 
    transition: all 0.25s ease;
    font-size: clamp(0.875rem, 3.5vw, 1rem);
    text-decoration: none;
  }
  .nav-link:hover { 
    transform: translateX(5px); 
    opacity: 0.8;
  }
  .gradient-bg {
    position: absolute;
    inset: 0;
    z-index: -10;
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #42e695);
    background-size: 600% 600%;
    animation: gradientMove 20s ease infinite;
    border-radius: inherit;
    filter: blur(120px);
    opacity: 0.5;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .gradient-bg {
      filter: blur(80px);
    }
    .footer-animate.visible {
      animation-duration: 0.6s;
    }
  }
  
  @media (max-width: 640px) {
    .gradient-bg {
      filter: blur(60px);
    }
    .nav-link {
      padding: 0.375rem 0;
      display: block;
    }
    .nav-link:hover {
      transform: translateX(3px);
    }
  }
  
  @media (max-width: 480px) {
    .dev-text {
      font-size: clamp(32px, 10vw, 60px) !important;
    }
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
        document.documentElement.scrollHeight - 50

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
      { threshold: 0.05, rootMargin: "50px" }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  const visibleClass = isVisible ? "visible" : ""

  return (
    <>
      <style>{styles}</style>
      <footer className="relative w-full overflow-hidden border-t border-gray-200/50 bg-white/40 text-black backdrop-blur-lg transition-colors duration-500 dark:border-gray-700/50 dark:bg-black/40 dark:text-white">
        {/* Animated Gradient Background */}
        <div className="gradient-bg" />

        <div
          ref={footerRef}
          className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-14 lg:px-12 lg:py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Support */}
            <div
              className={`footer-animate footer-delay-1 space-y-6 sm:space-y-8 ${visibleClass}`}
            >
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase sm:text-sm dark:text-gray-400">
                  Get Support:
                </p>
                <a
                  href="mailto:jhunriz14@gmail.com"
                  className="text-sm break-all text-gray-700 transition-colors duration-300 hover:text-gray-900 sm:text-base dark:text-gray-300 dark:hover:text-white"
                >
                  jhunriz14@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:justify-end">
              {/* Primary Navigation */}
              <nav
                className={`footer-animate footer-delay-2 space-y-2 sm:space-y-3 ${visibleClass}`}
              >
                <h3 className="mb-3 text-xs font-medium tracking-wider text-gray-500 uppercase sm:text-sm dark:text-gray-400">
                  Navigation
                </h3>
                {[
                  { href: "/", label: "Home" },
                  { href: "/collection", label: "Articles" },
                  { href: "/projects", label: "About" },
                  { href: "/pricing", label: "Contact" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="nav-link text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Social Links */}
              <nav
                className={`footer-animate footer-delay-3 space-y-2 sm:space-y-3 ${visibleClass}`}
              >
                <h3 className="mb-3 text-xs font-medium tracking-wider text-gray-500 uppercase sm:text-sm dark:text-gray-400">
                  Connect
                </h3>
                {[
                  { href: "https://linkedin.com", label: "LinkedIn" },
                  { href: "https://github.com", label: "GitHub" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link flex items-center gap-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {label}
                    <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Section - Location & Copyright */}
          <div
            className={`footer-animate footer-delay-4 mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200/30 pt-6 sm:mt-12 sm:flex-row sm:pt-8 md:mt-14 lg:mt-16 dark:border-gray-700/30 ${visibleClass}`}
          >
            <div className="order-2 text-center text-xs text-gray-500 sm:order-1 sm:text-sm dark:text-gray-400">
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="order-1 text-center text-xs text-gray-500 sm:order-2 sm:text-sm dark:text-gray-400">
              <p>Philippines, Metro Manila</p>
            </div>
          </div>
        </div>

        {/* Animated Developer Text */}
        {typographyState !== "hidden" && (
          <div className="dev-text-wrapper px-3 pb-3 sm:px-4 sm:pb-4">
            <h1
              className={`dev-text text-black dark:text-white ${
                typographyState === "entering" || typographyState === "visible"
                  ? "entering"
                  : "exiting"
              }`}
              style={{
                fontSize: "clamp(48px, 15vw, 280px)",
                lineHeight: "0.9",
                maxWidth: "100%",
              }}
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
