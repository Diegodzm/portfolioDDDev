"use client";

import { useState } from "react";
import { Rocket, Code2, Presentation, ChevronDown, X } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Definimos la interfaz del objeto feature
interface Feature {
  name: string;
  description: string;
  section?: {
    title: string;
    subtitle: string;
  };
  additional?: boolean;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  summary: string;
  features: Feature[];
}

interface GridItemProps extends Service {
  onOpenModal: () => void;
}

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-400" />,
      title: "Landing Page Profesional",
      price: "120.000 CLP - 150.000 CLP",
      summary: "Página web para la presentacion de servicios y contacto, producto inicial escalable.",
      features: [
        { name: "Diseño UI/UX moderno", description: "Estética profesional alineada a tu marca." },
        { name: "Diseño responsivo (Móvil)", description: "Visibilidad coherente en cualquier dispositivo." },
        { name: "SEO optimizado", description: "Mejora el posicionamiento y visibilidad en Google." },
        { name: "Certificado SSL", description: "Protocolo HTTPS para proteger la privacidad de tus visitantes y garantizar navegación segura." },
        { name: "Integración WhatsApp", description: "Boton de contacto whatsapp con sistema anti bot." },
        { name: "Soporte y Hosting anual", description: "Gestión de hosting y actualizaciones de seguridad por 12 meses." },
        { name: "Incluye dominio .cl o .com", description: "Gestión de la compra de dominio y configuración." },
         { name: "CMS", description: "Panel de autogestión del contenido de la página."},       
      
      ],
    },
    {
      icon: <Code2 className="h-6 w-6 text-purple-400" />,
      title: "Desarrollo a Medida",
      price: "A convenir",
      summary: "Soluciones a medida con Next.js y Supabase para escalar tu negocio.",
      features: [
        { name: "Micro SaaS / Apps", description: "Soluciones específicas de negocio." },
        { name: "Arquitectura escalable", description: "Diseño preparado para crecer." },
        { name: "Next.js + Supabase", description: "Tecnología de vanguardia." },
        { name: "Soporte post-entrega", description: "Acompañamiento técnico." },
      ],
    },
    {
      icon: <Presentation className="h-6 w-6 text-emerald-400" />,
      title: "Consultoría Digital",
      price: "40.000 - 80.000 CLP/hr",
      summary: "Estrategia digital y técnica para optimizar tu producto y procesos.",
      features: [
        { name: "Auditoría técnica", description: "Identificación de brechas." },
        { name: "Estrategia de crecimiento", description: "Hoja de ruta digital." },
        { name: "Optimización de procesos", description: "Automatización de tareas." },
        { name: "Arquitectura web", description: "Diseño de infraestructura." },
      ],
    },
  ];

  const openModal = (title: string) => {
    setExpandedService(title);
  };

  const closeModal = () => {
    setExpandedService(null);
  };

  const selectedService = services.find((s) => s.title === expandedService);

  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="mb-16 rounded-3xl border border-zinc-800 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-10 md:p-14">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Soluciones Digitales a Medida
            </h3>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            Desarrollo digital personalizado, código exclusivo, sin plantillas, favoreciendo escalabilidad velocidad e integraciónes IA.
            </p>
            <div className="pt-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-transparent rounded-full"></div>
              <span className="text-sm text-blue-400 font-semibold tracking-wider">DESARROLLO PROFESIONAL</span>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <GridItem
              key={service.title}
              {...service}
              onOpenModal={() => openModal(service.title)}
            />
          ))}
        </ul>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
}

const GridItem = ({ icon, title, price, summary, features, onOpenModal }: GridItemProps) => {
  return (
    <li className="list-none h-full">
      <div className="relative h-full rounded-3xl border border-zinc-800 p-3 bg-zinc-950/50 flex flex-col min-h-125">
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
          <div className="mb-10 flex flex-row items-center justify-between gap-4">
            <h3 className="font-sans text-2xl font-semibold text-white md:text-3xl tracking-tight leading-tight">
              {title}
            </h3>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
              {icon}
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
              <p className="text-base font-medium text-zinc-100">{summary}</p>
              <p className="mt-2 text-xs text-zinc-500">Elige esta tarjeta para ver el detalle de lo que incluye.</p>
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="group flex w-full items-center justify-between rounded-2xl border border-zinc-700 bg-linear-to-r from-zinc-900 to-zinc-800 px-4 py-4 text-left text-sm text-zinc-300 shadow-sm transition-all hover:border-blue-500/50 hover:bg-zinc-800"
            >
              <span className="text-sm font-semibold text-white">Qué incluye</span>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-blue-400">
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </div>
            </button>

          </div>

          <div className="pt-8 border-t border-zinc-800 mt-auto">
            <span className="inline-block px-6 py-2 rounded-full bg-blue-900/50 border border-blue-500/60 text-sm font-mono text-blue-200 tracking-wider font-semibold shadow-lg shadow-blue-900/50">
              {price}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-700 bg-zinc-900 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-zinc-700 bg-zinc-800 p-2 text-zinc-400 transition-all hover:border-red-500 hover:text-red-400"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-8 flex items-start justify-between gap-4 pr-12">
          <div>
            <h2 className="text-3xl font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-zinc-400">{service.summary}</p>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-3">
            {service.icon}
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 p-4">
          <span className="inline-block rounded-full bg-zinc-800 px-4 py-2 font-mono text-sm font-medium text-blue-400 tracking-wider">
            {service.price}
          </span>
        </div>

        <div className="space-y-5">
          {service.features.map((feature, i) => (
            feature.section ? (
              <div key={i} className="rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-4">
                <div className="text-base font-semibold text-white">{feature.section.title}</div>
                <div className="mt-2 text-sm text-zinc-400">{feature.section.subtitle}</div>
              </div>
            ) : (
              <div key={i} className={"flex flex-col " + (feature.additional ? "text-violet-300" : "")}>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">▹</span>
                  <span
                    className={
                      "font-semibold " + (feature.additional ? "text-violet-400" : "text-white")
                    }
                  >
                    {feature.name}
                  </span>
                </div>
                <p className={"mt-1 ml-6 text-sm " + (feature.additional ? "text-violet-200" : "text-zinc-400")}>
                  {feature.description}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};