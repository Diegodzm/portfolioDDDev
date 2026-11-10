"use client"

import { Info, Video } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Perfil profesional */}
      <div className="relative min-h-100 rounded-3xl border border-zinc-800 p-3 bg-zinc-950/50 flex flex-col">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative flex flex-col grow p-10">
          <div className="flex flex-row items-center justify-between gap-4 mb-8">
            {/* Cambiado a h2 para una correcta jerarquía SEO */}
            <h2 className="text-2xl font-semibold text-white md:text-3xl tracking-tight">
              {t.pages.about.title}
            </h2>
            <div className="rounded-xl border border-stone-800 bg-stone-900 p-3">
              <Info className="h-6 w-6 text-[#38BDF8]" />
            </div>
          </div>

          <div className="space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            <p>
              {t.pages.about.p1}
            </p>
            <p>
              {t.pages.about.p2}
            </p>
          </div>
        </div>
      </div>

      {/* Enfoque de trabajo */}
      <div className="relative min-h-100 rounded-3xl border border-zinc-800 p-3 bg-zinc-950/50 flex flex-col items-center justify-center border-dashed">
        <div className="relative flex flex-col items-center justify-center p-10 text-center">
          <div className="rounded-full bg-zinc-900 border border-zinc-800 p-6 mb-6">
            <Video className="h-10 w-10 text-zinc-600" />
          </div>
          {/* Ajustado a h3 o h3 semántico visual */}
          <h3 className="text-xl font-semibold text-white mb-2">{t.pages.about.videoTitle}</h3>
          <p className="text-zinc-500 max-w-sm">
            {t.pages.about.videoDesc}
          </p>
        </div>
      </div>

    </section>
  );
}