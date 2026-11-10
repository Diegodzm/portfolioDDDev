"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react"
import { useTranslation } from "@/context/LanguageContext"

// footerSections will be created from translations inside the component

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: t.footer.sections.navigation,
      links: [
        { label: t.footer.links.about, href: "/acercade" },
        { label: t.footer.links.services, href: "/servicios" },
        { label: t.footer.links.contact, href: "/contacto" },
      ],
    },
    {
      title: t.footer.sections.coreServices,
      links: [
        { label: t.footer.links.development, href: "/servicios#desarrollo" },
        { label: t.footer.links.integrations, href: "/servicios#ia" },
        { label: t.footer.links.consulting, href: "/servicios#consultoria" },
      ],
    },
  ]

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-linear-to-b from-slate-950/25 via-slate-900/20 to-slate-950/60 backdrop-blur-[10px] antialiased">
      <div
        className="absolute inset-0"
        style={{
            backgroundImage: 
              "radial-gradient(circle at top left, rgba(167,139,250,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(234,88,12,0.18), transparent 32%)",
        }}
      />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 h-64 w-64 rounded-full bg-[#A78BFA]/10 blur-[110px]" />
      <div className="absolute right-1/5 top-8 h-56 w-56 rounded-full bg-[#EA580C]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link href="/" className="flex w-fit items-center transition-opacity hover:opacity-80">
            
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-300/80">
              {t.footer.brandDesc}
            </p>

            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-stone-300 transition-all duration-200 hover:border-[#A78BFA]/40 hover:bg-[#A78BFA]/10 hover:text-[#EDE9FE]"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 sm:grid-cols-3">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-100">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="block text-sm text-slate-300/75 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-100">
                {t.footer.readyTitle}
              </h4>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#D8B4FE] transition-colors duration-200 hover:text-[#EDE9FE]"
              >
                {t.footer.contactLabel}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{t.pages.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">
          <div>
            © {currentYear} <span className="font-medium text-slate-200">Diego Diaz Dev</span>. {t.footer.contactLabel}.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">{t.footer.location}</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              {t.footer.madeWith}
              <span className="text-[#D8B4FE]">✦</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}