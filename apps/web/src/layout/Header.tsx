import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Articles", to: "/articles" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2">
            <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              CODEHOLDER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative flex flex-col items-center"
                whileHover="hover"
              >
                <Link
                  to={link.to}
                  className="pb-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded bg-foreground"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  initial="initial"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 rounded-md p-2 transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-xs border-l border-border bg-background p-6 pt-24 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} CODEHOLDER
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

