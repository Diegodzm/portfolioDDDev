"use client"

import { motion } from "framer-motion"

export function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="select-none text-6xl md:text-8xl font-black tracking-normal electrolize-regular"
    >
      <span className="block chrome-text-style2 pb-2">
      Diego Diaz Dev
      </span>
    </motion.h1>
  )
}