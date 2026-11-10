"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, User } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="relative flex min-h-screen items-center justify-center p-6 md:p-12">
      <div className="relative z-10 w-full max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t.pages.contact.heading}</h1>
          <p className="text-lg text-slate-300">{t.pages.contact.sub}</p>
        </div>

        <Card className="overflow-hidden rounded-[28px] border border-white/10 bg-stone-950/35 shadow-[0_0_30px_rgba(234,88,12,0.14)] backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center border-b border-white/10 bg-slate-900/50 p-10 md:border-r md:border-b-0">
              <h2 className="mb-6 text-2xl font-semibold text-white">{t.pages.contact.contactInfoTitle}</h2>
              <div className="space-y-6 text-slate-300">
                <div className="flex items-center gap-3 rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/5 p-3">
                  <Mail className="h-5 w-5 text-[#38BDF8]" />
                  <span>{t.pages.contact.email}</span>
                </div>
                <p className="mt-8 text-sm italic text-slate-400">
                  {t.pages.contact.note}
                </p>
              </div>
            </div>

            <CardContent className="space-y-6 bg-slate-950/45 p-10 backdrop-blur-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder={t.pages.contact.placeholderName}
                    className="border border-[#334155] bg-[#1B1526] pl-10 text-[#F4EFEA] placeholder:text-[#94A3B8] focus-visible:border-[#38BDF8] focus-visible:ring-[#38BDF8]/30"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder={t.pages.contact.placeholderEmail}
                    type="email"
                    className="border border-[#334155] bg-[#1B1526] pl-10 text-[#F4EFEA] placeholder:text-[#94A3B8] focus-visible:border-[#38BDF8] focus-visible:ring-[#38BDF8]/30"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <Textarea
                    placeholder={t.pages.contact.placeholderMessage}
                    className="min-h-30 border border-[#334155] bg-[#1B1526] pl-10 text-[#F4EFEA] placeholder:text-[#94A3B8] focus-visible:border-[#38BDF8] focus-visible:ring-[#38BDF8]/30"
                  />
                </div>
                <Button className="w-full rounded-xl border border-[#38BDF8]/50 bg-[linear-gradient(135deg,#131B2E_0%,#1E3A8A_38%,#38BDF8_100%)] py-6 text-lg font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.4)] transition-all hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(96,165,250,0.65)]">
                  {t.pages.contact.submit}
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  );
}