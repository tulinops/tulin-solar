"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, ClipboardCheck, Calculator, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKLIST_KEYS = ["hero_c1", "hero_c2", "hero_c3", "hero_c4"];

export function Hero() {
  const t = useTranslations();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 500px at 78% -10%, rgba(34,197,94,.14), transparent 60%), radial-gradient(900px 480px at 12% 8%, rgba(15,118,110,.10), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FDE68A] bg-brand-accent-soft px-3 py-1.5 text-[13px] font-semibold text-brand-accent-deep">
            <BadgeCheck className="size-[15px]" />
            {t("hero_badge")}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
            {t.rich("hero_h1", {
              accent: (chunks) => <span className="text-brand-primary">{chunks}</span>,
            })}
          </h1>

          <p className="mt-5 max-w-[520px] text-lg text-muted-foreground sm:text-[19px]">
            {t.rich("hero_sub", {
              strong: (chunks) => <b className="text-foreground">{chunks}</b>,
            })}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3.5 text-[14.5px] font-medium text-foreground">
            {CHECKLIST_KEYS.map((key) => (
              <span key={key} className="flex items-center gap-2">
                <CheckCircle2 className="size-[17px] text-brand-secondary" />
                {t(key)}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button
              asChild
              className="h-auto rounded-xl bg-brand-primary px-6 py-3.5 text-[15.5px] font-semibold text-white shadow-[0_6px_18px_rgba(15,118,110,0.25)] hover:bg-brand-primary-dark"
            >
              <a href="#contact">
                <ClipboardCheck className="size-[18px]" />
                {t("hero_btn1")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-xl border-border bg-white px-6 py-3.5 text-[15.5px] font-semibold text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-muted"
            >
              <a href="#calculator">
                <Calculator className="size-[18px]" />
                {t("hero_btn2")}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0F766E] to-[#134E4A] p-8 text-white shadow-[0_24px_60px_-20px_rgba(15,118,110,0.55)]">
          <motion.div
            className="pointer-events-none absolute -right-[46px] -top-[46px] size-[150px] text-brand-accent/85"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <Sun className="size-full" />
          </motion.div>

          <div className="relative">
            <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">
              {t("herocard_title")}
            </div>
            <div className="mt-3 mb-1 flex items-baseline gap-2.5">
              <span className="text-4xl font-extrabold tracking-tight sm:text-[44px]">₹1,22,000</span>
              <span className="text-base text-white/60 line-through">₹2,00,000</span>
            </div>
            <div className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-brand-accent/20 px-[11px] py-[5px] text-[13px] font-semibold text-[#FCD34D]">
              {t("herocard_sub")}
            </div>

            <div className="my-6 h-px bg-white/16" />

            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <div>
                <div className="text-[22px] font-bold">360–420</div>
                <div className="text-[12.5px] text-white/65">{t("hc_units")}</div>
              </div>
              <div>
                <div className="text-[22px] font-bold">30 yrs</div>
                <div className="text-[12.5px] text-white/65">{t("hc_panelw")}</div>
              </div>
              <div>
                <div className="text-[22px] font-bold">8 yrs</div>
                <div className="text-[12.5px] text-white/65">{t("hc_invw")}</div>
              </div>
              <div>
                <div className="text-[22px] font-bold">Up to 90%</div>
                <div className="text-[12.5px] text-white/65">{t("hc_billr")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
