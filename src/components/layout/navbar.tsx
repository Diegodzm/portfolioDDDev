"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2, FolderGit2, Home, Languages, Mail, UserRound } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/context/LanguageContext"

export function Navbar() {
  const pathname = usePathname()
  const { t, locale, setLocale } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/acercade", label: t.nav.about, icon: UserRound },
    { href: "/servicios", label: t.nav.stack, icon: Code2 },
    { href: "/proyectos", label: t.nav.projects, icon: FolderGit2 },
    { href: "/contacto", label: t.nav.contact, icon: Mail },
  ]

  return (
    <aside
      className="group fixed inset-y-0 left-0 z-50 flex flex-col border-r border-[#6366F1]/30 bg-[#0F0C1B]/98 px-3 py-5 shadow-[12px_0_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-[width] duration-300"
      style={{ width: isExpanded ? "16rem" : "5rem" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link href="/" className="mb-14 flex items-center gap-3 overflow-hidden px-2 text-white" aria-label="Diego Diaz Dev">
        <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#E0C3FC]/55 bg-[#1B1526] font-mono text-lg text-[#E0C3FC]">DD</span>
        <span className={cn("whitespace-nowrap font-semibold tracking-wide text-[#F4EFEA] transition-opacity delay-100", isExpanded ? "opacity-100" : "opacity-0")}>Diego Diaz <span className="text-[#C084FC]">Dev</span></span>
      </Link>

      <nav className="flex flex-1 flex-col gap-2" aria-label={t.nav.label}>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={cn("flex h-12 items-center gap-4 overflow-hidden border-l-2 px-3 transition-all", isActive ? "border-[#38BDF8] bg-[#1B1526] text-[#F4EFEA] shadow-[inset_0_0_18px_rgba(56,189,248,0.14)]" : "border-transparent text-[#A89FAB] hover:border-[#E0C3FC]/60 hover:bg-[#1B1526] hover:text-[#F4EFEA] hover:shadow-[inset_0_0_18px_rgba(224,195,252,0.12)]")}>
              <Icon className="h-5 w-5 shrink-0" />
              <span className={cn("whitespace-nowrap text-sm font-medium transition-opacity", isExpanded ? "opacity-100" : "opacity-0")}>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 pt-4">
        <div className="flex items-center gap-3 px-3 pb-3 text-[#8D8493]"><Languages className="h-4 w-4 shrink-0" /><span className={cn("text-[10px] uppercase tracking-[0.2em] transition-opacity", isExpanded ? "opacity-100" : "opacity-0")}>{t.nav.language}</span></div>
        <div className="flex gap-1 overflow-hidden">
          {(["es", "en"] as const).map((language) => (
            <button key={language} onClick={() => setLocale(language)} className={cn("h-9 min-w-9 border text-xs font-bold uppercase transition-colors", locale === language ? "border-[#38BDF8] bg-[#38BDF8]/15 text-[#F4EFEA]" : "border-white/10 text-[#8D8493] hover:text-[#F4EFEA]")} aria-label={language === "es" ? t.nav.spanish : t.nav.english}>{language}</button>
          ))}
        </div>
      </div>
    </aside>
  )
}