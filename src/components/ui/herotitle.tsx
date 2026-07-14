// components/ui/hero-title.tsx
"use client"

import { motion } from "framer-motion"

export function HeroTitle() {
  return (
    <motion.h1 
      initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="select-none font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight"
    >
      <span className="block bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent pb-4 -mb-4 drop-shadow-[0_10px_20px_rgba(139,92,246,0.15)]">
        WebForge
      </span>
    </motion.h1>
  )
}