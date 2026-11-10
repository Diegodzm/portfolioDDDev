"use client"

import Image from "next/image";
import { Info } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:px-10 lg:gap-8">
      <article className="relative flex min-h-100 flex-col rounded-3xl border border-white/10 bg-zinc-950/60 p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative flex grow flex-col p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                {t.pages.about.profileLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t.pages.about.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                {t.pages.about.name}
              </p>
            </div>
            <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 p-3">
              <Info className="h-5 w-5 text-sky-300" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-300 md:text-[1.05rem]">
            <p>{t.pages.about.p1}</p>
            <p className="text-zinc-400">{t.pages.about.p2}</p>
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-3 sm:p-4">
        <Image
          src="/devschema.jpg"
          alt={t.pages.about.schemaAlt}
          width={1408}
          height={768}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="h-auto w-full rounded-2xl"
        />
      </article>
    </section>
  );
}