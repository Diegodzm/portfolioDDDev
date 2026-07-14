"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react"

const footerSections = [
  {
    title: "Navegación",
    links: [
      { label: "Acerca de", href: "/acercade" },
      { label: "Servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Servicios Core",
    links: [
      { label: "Desarrollo Web", href: "/servicios#desarrollo" },
      { label: "Integraciones IA", href: "/servicios#ia" },
      { label: "Consultoría Digital", href: "/servicios#consultoria" },
    ],
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#09070f] border-t border-[#a855f7]/30 relative overflow-hidden antialiased font-sans">
      
      {/* ================= EFECTOS DE LUZ AMBIENTAL DE FONDO ================= */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-1/4 translate-x-1/2 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-8 relative z-10">
        
        {/* FILA SUPERIOR: Info de Marca + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Bloque de Identidad (Columna Izquierda) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center w-fit transition-opacity hover:opacity-80">
              <div className="relative h-12 w-16 overflow-hidden">
                <Image
                            src="/webforgedesign/yunk.png"
                            alt="Web Forge logo"
                            fill
                            sizes="(max-width: 768px) 100px, 100px"
                            priority
                            className="object-contain logo-image"
                          />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Ingeniería de software y diseño de interfaces exclusivas. Forjando el futuro digital de independientes y empresas con Next.js e Inteligencia Artificial.
            </p>
            {/* Redes Sociales Internas */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-[#a855f7] hover:border-[#a855f7]/40 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Bloques de Enlaces Dinámicos (Columnas Derecha) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-zinc-200 tracking-wider uppercase">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Columna de Contacto Directo rápido */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4N">
              <h4 className="text-sm font-bold text-zinc-200 tracking-wider uppercase mb-4">
                ¿Listo para forjar?
              </h4>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 group transition-colors duration-200"
              >
                Contacto
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">contacto@webforge.design</span>
              </div>
            </div>
          </div>

        </div>

        {/* FILA INFERIOR: Copyright y Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} <span className="text-zinc-400 font-medium">WebForge</span>. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-600">Santiago, Chile</span>
            <span className="inline-flex items-center gap-1">
              Hecho a medida con 
              <span className="text-purple-500/80">✦</span> 
              Next.js
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}