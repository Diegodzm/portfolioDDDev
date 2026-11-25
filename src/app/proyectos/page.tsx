"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight, ExternalLink, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from "@/context/LanguageContext";

type GalleryImage = { src: string; alt: string };

export default function ProjectsPage() {
  const { t } = useTranslation();
  const projects = t.pages.projects.items;
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxImage = lightboxImages?.[lightboxIndex] ?? null;

  useEffect(() => {
    if (!lightboxImages) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImages(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((index) => (index + 1) % lightboxImages.length);
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((index) => (index - 1 + lightboxImages.length) % lightboxImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImages]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
      <section className="grid gap-8">
        {projects.map((project) => {
          const projectImages = [
            ...(project.image ? [{ src: project.image, alt: project.imageAlt }] : []),
            ...project.gallery,
          ];

          return (
          <article
            key={project.title}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/35 p-4 md:p-6"
          >
            <GlowingEffect
              blur={0}
              borderWidth={2}
              spread={80}
              glow
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />

            <div className="relative grid min-w-0 gap-6 rounded-[22px] border border-white/5 bg-slate-900/35 p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:p-8">
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-violet-300">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                    {project.category}
                  </div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${
                      project.kind === "personal"
                        ? "border-violet-300/30 bg-violet-400/10 text-violet-200"
                        : "border-emerald-300/30 bg-emerald-400/10 text-emerald-200"
                    }`}
                  >
                    {project.kind === "personal"
                      ? t.pages.projects.badges.personal
                      : t.pages.projects.badges["client-production"]}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
                <p className="mb-5 max-w-xl text-base leading-relaxed text-slate-300">{project.summary}</p>
                <p className="max-w-xl text-sm leading-relaxed text-slate-400">{project.description}</p>

                {project.integrations.length > 0 && (
                  <div className="mt-6">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {t.pages.projects.integrationsLabel}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.integrations.map((integration) => (
                        <span
                          key={integration}
                          className="rounded-full border border-sky-400/25 bg-sky-400/5 px-3 py-1 text-xs font-medium text-sky-100"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex min-w-0 flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.24),transparent_65%),linear-gradient(145deg,#1e1b2e,#0f172a)] text-center text-violet-100">
                  {project.image ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setLightboxImages(projectImages);
                          setLightboxIndex(0);
                        }}
                        aria-label={`${t.pages.projects.openImageLabel}: ${project.imageAlt}`}
                        className="absolute inset-0 cursor-zoom-in"
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </button>
                      <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                        {t.pages.projects.cardLabel}
                      </span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mb-3 h-10 w-10 text-violet-300" />
                      <span className="px-4 text-lg font-semibold">{project.title}</span>
                      <span className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {t.pages.projects.cardLabel}
                      </span>
                    </>
                  )}
                </div>

                {project.gallery.length > 0 && (
                  <div className="min-w-0 overflow-hidden">
                    <p className="mb-2 text-xs font-medium text-slate-400">{t.pages.projects.galleryLabel}</p>
                    <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
                      {project.gallery.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => {
                            setLightboxImages(projectImages);
                            setLightboxIndex(index + (project.image ? 1 : 0));
                          }}
                          aria-label={`${t.pages.projects.openImageLabel}: ${image.alt}`}
                          className="relative h-14 w-20 shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-white/15 transition hover:border-violet-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-[#38BDF8]/50 bg-[linear-gradient(135deg,#131B2E_0%,#1E3A8A_38%,#38BDF8_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.24)] transition-all hover:border-[#60A5FA] hover:shadow-[0_0_22px_rgba(96,165,250,0.4)]"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    {t.pages.projects.cta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </article>
          );
        })}
      </section>

      {lightboxImages && lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setLightboxImages(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImages(null)}
            aria-label={t.pages.projects.closeImageLabel}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-[calc(100dvh-8rem)] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              sizes="100vw"
              unoptimized
              className="object-contain"
            />
            {lightboxImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((index) => (index - 1 + lightboxImages.length) % lightboxImages.length)}
                  aria-label={t.pages.projects.previousImageLabel}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-5"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((index) => (index + 1) % lightboxImages.length)}
                  aria-label={t.pages.projects.nextImageLabel}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-5"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
                <p aria-live="polite" className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-sm text-white">
                  {lightboxIndex + 1} / {lightboxImages.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}