import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Articles", to: "/articles" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              CODEHOLDER
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative flex flex-col items-center"
                whileHover="hover"
              >
                <Link
                  to={link.to}
                  className="pb-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-[5px] rounded bg-foreground"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  initial="initial"
                  transition={{ type: "tween", duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="rounded-md p-2 transition-colors hover:bg-muted md:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
