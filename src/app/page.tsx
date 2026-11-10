"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-hidden bg-transparent px-8 text-[#F4EFEA] selection:bg-[#38BDF8]/25 md:px-16">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-[#C084FC]">{t.hero.eyebrow}</p>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[#F4EFEA] md:text-8xl"
        >
          Diego Diaz{" "}
          <span className="text-[#8B5CF6]">Dev</span>
          <span className="text-[#38BDF8]">.</span>
        </motion.h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#D8D1D5] md:text-xl">{t.hero.title}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/proyectos" className="inline-flex items-center gap-2 border border-[#38BDF8] bg-[#38BDF8] px-5 py-3 text-sm font-bold text-[#0F0C1B] shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-transform hover:-translate-y-1 hover:bg-[#60A5FA]">{t.hero.cta}<ArrowUpRight className="h-4 w-4" /></Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="border border-white/15 bg-[#1B1526] p-3 text-[#D8D1D5] transition-colors hover:border-[#E0C3FC] hover:text-[#E0C3FC]" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border border-white/15 bg-[#1B1526] p-3 text-[#D8D1D5] transition-colors hover:border-[#E0C3FC] hover:text-[#E0C3FC]" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
        </div>
      </section>
    </main>
  )
}
