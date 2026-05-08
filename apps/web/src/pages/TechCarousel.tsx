"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

const techIcons: Record<string, string> = {
  CSS3: "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/css3/css3-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/html5/html5-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/javascript/javascript-original.svg",
  PHP: "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/php/php-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/typescript/typescript-original.svg",
  AWS: "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/amazonwebservices/amazonwebservices-original.svg",
  DigitalOcean:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/digitalocean/digitalocean-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/bootstrap/bootstrap-plain.svg",
  CodeIgniter:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/codeigniter/codeigniter-plain.svg",
  Expo: "https://www.svgrepo.com/show/373753/light-expo.svg",
  jQuery:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/jquery/jquery-original.svg",
  JWT: "https://logo.svgcdn.com/logos/jwt.png",
  Laravel:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/laravel/laravel-plain.svg",
  NPM: "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/npm/npm-original-wordmark.svg",
  NodeJS:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/nodejs/nodejs-original.svg",
  React:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/react/react-original.svg",
  "React Native":
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/react/react-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/redux/redux-original.svg",
  TailwindCSS:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/tailwindcss/tailwindcss-plain.svg",
  Webpack:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/webpack/webpack-original.svg",
  Apache:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/apache/apache-original.svg",
  Nginx:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/nginx/nginx-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/mysql/mysql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/mongodb/mongodb-original.svg",
  Babel:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/babel/babel-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/docker/docker-original.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/kubernetes/kubernetes-plain.svg",
  Postman:
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
}

const SPEED = 40

function InfiniteTrack({
  logos,
}: Readonly<{ logos: { name: string; src: string }[] }>) {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const isPaused = useRef(false)
  const [gap, setGap] = useState(40)

  useEffect(() => {
    const updateGap = () => {
      setGap(window.innerWidth < 640 ? 20 : 40)
    }
    updateGap()
    window.addEventListener("resize", updateGap)
    return () => window.removeEventListener("resize", updateGap)
  }, [])

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return
    const trackWidth = trackRef.current?.scrollWidth ?? 0
    const halfWidth = trackWidth / 2
    if (halfWidth === 0) return
    x.set((x.get() - (SPEED * delta) / 1000) % -halfWidth)
  })

  const doubled = [...logos, ...logos]

  return (
    <motion.div
      ref={trackRef}
      style={{ x }}
      className="flex items-center"
      onHoverStart={() => (isPaused.current = true)}
      onHoverEnd={() => (isPaused.current = false)}
    >
      {doubled.map((logo, i) => (
        <motion.div
          key={`${logo.name}-${i}`}
          style={{ marginRight: gap }}
          className="flex shrink-0 flex-col items-center gap-1.5"
          whileHover={{ y: -4, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="h-7 w-auto object-contain sm:h-9"
            style={{ colorScheme: "light" }}
          />
          <span className="text-[10px] text-gray-500 dark:text-gray-400">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function TechCarousel() {
  const logos = Object.entries(techIcons).map(([name, src]) => ({ name, src }))

  return (
    <div className="overflow-hidden py-6">
      <p className="mb-4 px-4 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase dark:text-gray-500">
        Powering Skills of mine
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <InfiniteTrack logos={logos} />
      </div>
    </div>
  )
}
