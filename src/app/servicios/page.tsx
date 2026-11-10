"use client";

import { Bot, Braces, GitBranch, Layers3, Palette, Server } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const stackIcons = [Braces, Layers3, Server, Palette, Bot, GitBranch];

export default function StackPage() {
  const { t } = useTranslation();
  const stack = t.pages.stack.items as Array<{ title: string; description: string; tools: string[] }>;

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-8 py-24 md:px-16">
      <header className="max-w-3xl">
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-violet-300">{t.pages.stack.eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{t.pages.stack.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">{t.pages.stack.summary}</p>
      </header>

      <section className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((item, index) => {
          const Icon = stackIcons[index % stackIcons.length];
          return (
            <article key={item.title} className="bg-[#0b1821] p-7 transition-colors hover:bg-[#102631]">
              <Icon className="h-7 w-7 text-[#38BDF8]" />
              <h2 className="mt-8 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 min-h-20 text-sm leading-relaxed text-slate-400">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => <span key={tool} className="border border-[#38BDF8]/25 px-2.5 py-1 font-mono text-xs text-[#BAE6FD]">{tool}</span>)}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
