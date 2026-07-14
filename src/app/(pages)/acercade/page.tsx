"use client";

import { Info, Video } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* Carta de Narrativa (El Acerca de) */}
      <div className="relative min-h-[400px] rounded-3xl border border-zinc-800 p-3 bg-zinc-950/50 flex flex-col">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        
        <div className="relative flex flex-col flex-grow p-10">
          <div className="flex flex-row items-center justify-between gap-4 mb-8">
            <h3 className="font-sans text-2xl font-semibold text-white md:text-3xl tracking-tight">
              La Idea detrás de Webforge
            </h3>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
              <Info className="h-6 w-6 text-blue-400" />
            </div>
          </div>

          <div className="space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            <p>
              Webforge nace de la necesidad de cerrar la brecha entre el diseño creativo y la ingeniería de alto rendimiento. No solo construimos webs; creamos activos digitales que escalan con tu negocio.
            </p>
            <p>
              Nuestra filosofía se basa en el <strong>código limpio</strong>, la velocidad de carga y la experiencia de usuario intuitiva. Entendemos que en la era actual, tu producto web es la primera impresión y, a menudo, la única oportunidad para convertir un visitante en cliente.
            </p>
          </div>
        </div>
      </div>

      {/* Carta reservada para Video */}
      <div className="relative min-h-[400px] rounded-3xl border border-zinc-800 p-3 bg-zinc-950/50 flex flex-col items-center justify-center border-dashed">
        <div className="relative flex flex-col items-center justify-center p-10 text-center">
          <div className="rounded-full bg-zinc-900 border border-zinc-800 p-6 mb-6">
            <Video className="h-10 w-10 text-zinc-600" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Espacio para Video</h4>
          <p className="text-zinc-500 max-w-sm">
            Próximamente: Demo de producto y nuestro proceso de trabajo en acción.
          </p>
        </div>
      </div>

    </section>
  );
}