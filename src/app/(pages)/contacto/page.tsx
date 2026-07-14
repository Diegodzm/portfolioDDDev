"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, User } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl">
        {/* Encabezado con impacto */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Tienes una idea en mente?</h1>
          <p className="text-zinc-400 text-lg">Construyamos el futuro de tu negocio juntos.</p>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Columna Izquierda: Branding */}
            <div className="bg-zinc-900 p-10 flex flex-col justify-center border-r border-zinc-800">
              <h2 className="text-2xl font-semibold text-white mb-6">Información de contacto</h2>
              <div className="space-y-6 text-zinc-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>contacto@webforge.cl</span>
                </div>
                <p className="text-sm italic mt-8 text-zinc-500">
                  "Respondemos en menos de 24 horas. Tu proyecto es nuestra prioridad."
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <CardContent className="p-10 space-y-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <Input placeholder="Nombre" className="pl-10 bg-zinc-950 border-zinc-800" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <Input placeholder="Email" type="email" className="pl-10 bg-zinc-950 border-zinc-800" />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="pl-10 min-h-[120px] bg-zinc-950 border-zinc-800" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg rounded-xl">
                  Enviar Propuesta
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  );
}