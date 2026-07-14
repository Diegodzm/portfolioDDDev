"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/acercade", label: "Acerca de" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 h-20 w-full overflow-hidden border-b border-white/10 bg-black/20 px-6 antialiased shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-10">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,hsl(var(--navbar-start))_0%,hsl(var(--navbar-mid))_50%,hsl(var(--navbar-end))_100%)] bg-[length:200%_200%] animate-gradient-x" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_55%)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-between">
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <div className="relative h-10 w-30">
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
        </div>

        <nav className="z-10 hidden items-center gap-12 font-sans tracking-wide md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-base font-bold transition-all duration-300",
                  isActive
                    ? "border-b-2 border-white/20 pb-1 text-purple-300"
                    : "text-white hover:text-[#a855f7]"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="z-10 flex items-center md:hidden">
          {mounted && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-100 hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-purple-950/50 bg-[#0b0813] text-zinc-100">
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                <SheetDescription className="sr-only">Secciones del sitio web</SheetDescription>

                <div className="flex flex-col gap-6 px-8 pt-12 font-sans">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href ? "text-[#a855f7]" : "text-zinc-300 hover:text-[#a855f7]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}