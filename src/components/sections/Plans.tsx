"use client";

import { useTranslations } from "next-intl";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Plans() {
  const t = useTranslations();

  return (
    <section id="plans" className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-[88px]">
      <div className="mx-auto max-w-[620px] text-center">
        <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
          {t("plans_eyebrow")}
        </div>
        <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("plans_h2")}</h2>
        <p className="mt-3.5 text-base text-muted-foreground">{t("plans_sub")}</p>
      </div>

      <div className="mt-11 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {/* 1 kW */}
        <div className="flex flex-col rounded-[18px] border border-border bg-white p-7">
          <div className="text-[15px] font-semibold text-muted-foreground">1 kW</div>
          <div className="mt-1.5 mb-0.5 text-[34px] font-extrabold">{t("plan1_name")}</div>
          <div className="mt-3.5 flex items-baseline gap-2">
            <span className="text-[15px] text-muted-foreground">{t("lbl_subsidy")}</span>
            <span className="text-[22px] font-bold text-brand-secondary">₹30,000</span>
          </div>
          <div className="my-5 h-px bg-border" />
          <ul className="flex flex-1 flex-col gap-3 text-[15px] text-foreground">
            {["plan1_f1", "plan1_f2", "plan1_f3"].map((k) => (
              <li key={k} className="flex gap-2.5">
                <Check className="size-[18px] shrink-0 text-brand-secondary" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant="outline"
            className="mt-6 h-auto rounded-[11px] border-border py-3 text-[15px] font-semibold text-foreground"
          >
            <a href="#contact">{t("btn_enquire")}</a>
          </Button>
        </div>

        {/* 3 kW — featured */}
        <div className="relative flex -translate-y-0 flex-col rounded-[18px] bg-gradient-to-br from-[#0F766E] to-[#134E4A] p-8 text-white shadow-[0_24px_50px_-20px_rgba(15,118,110,0.6)] md:-translate-y-2">
          <div className="absolute right-[18px] top-[18px] inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-[11px] py-[5px] text-xs font-bold text-[#7C2D12]">
            <Star className="size-[13px]" />
            {t("badge_popular")}
          </div>
          <div className="text-[15px] font-semibold text-white/75">3 kW</div>
          <div className="mt-1.5 mb-0.5 text-[34px] font-extrabold">{t("plan3_name")}</div>
          <div className="mt-3.5 flex items-baseline gap-2.5">
            <span className="text-[32px] font-extrabold">₹1,22,000</span>
            <span className="text-[15px] text-white/60 line-through">₹2,00,000</span>
          </div>
          <div className="mt-1 text-[13px] font-semibold text-[#FCD34D]">{t("plan3_price")}</div>
          <div className="my-5 h-px bg-white/18" />
          <ul className="flex flex-1 flex-col gap-3 text-[15px]">
            {["plan3_f1", "plan3_f2", "plan3_f3", "plan3_f4"].map((k) => (
              <li key={k} className="flex gap-2.5">
                <Check className="size-[18px] shrink-0 text-[#6EE7B7]" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mt-6 h-auto rounded-[11px] bg-white py-3.5 text-[15px] font-bold text-brand-primary hover:bg-white/90"
          >
            <a href="#contact">{t("btn_getplan")}</a>
          </Button>
        </div>

        {/* 2 kW */}
        <div className="flex flex-col rounded-[18px] border border-border bg-white p-7">
          <div className="text-[15px] font-semibold text-muted-foreground">2 kW</div>
          <div className="mt-1.5 mb-0.5 text-[34px] font-extrabold">{t("plan2_name")}</div>
          <div className="mt-3.5 flex items-baseline gap-2">
            <span className="text-[15px] text-muted-foreground">{t("lbl_subsidy")}</span>
            <span className="text-[22px] font-bold text-brand-secondary">₹60,000</span>
          </div>
          <div className="my-5 h-px bg-border" />
          <ul className="flex flex-1 flex-col gap-3 text-[15px] text-foreground">
            {["plan2_f1", "plan2_f2", "plan2_f3"].map((k) => (
              <li key={k} className="flex gap-2.5">
                <Check className="size-[18px] shrink-0 text-brand-secondary" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant="outline"
            className="mt-6 h-auto rounded-[11px] border-border py-3 text-[15px] font-semibold text-foreground"
          >
            <a href="#contact">{t("btn_enquire")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
