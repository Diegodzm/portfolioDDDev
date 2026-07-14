import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroTitle } from '@/components/ui/herotitle'
import { GlyphMatrix } from '@/components/ui/glyph-matrix'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09070f] text-white antialiased selection:bg-purple-500/30">
      <div className="absolute inset-0 z-0">
        <GlyphMatrix
          className="h-full w-full opacity-80"
          color="#8b5cf6"
          cellSize={14}
          mutationRate={0.045}
          interval={90}
          fadeBottom={0.75}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_55%)]" />
      </div>

      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
          <HeroTitle />

          <p className="mt-6 max-w-3xl text-lg leading-relaxed tracking-wide text-zinc-400 md:text-xl">
            Desarrollo web a medida, integraciones <span className="font-semibold text-purple-400">ia</span> y consultoría digital.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/servicios"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-6 py-3 text-sm font-bold shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:opacity-90"
            >
              Ver Servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 mt-0.5 " />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
