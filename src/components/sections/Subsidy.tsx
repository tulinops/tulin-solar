"use client";

import { useTranslations } from "next-intl";
import { FileCheck2 } from "lucide-react";

export function Subsidy() {
  const t = useTranslations();

  return (
    <section id="subsidy" className="mx-auto max-w-[1080px] px-6 py-16 md:py-20 lg:py-[88px]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("sub_eyebrow")}
          </div>
          <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("sub_h2")}</h2>
          <p className="mt-[18px] text-[17px] text-muted-foreground">{t("sub_p")}</p>
          <div className="mt-5 flex items-center gap-2.5 text-[15px] font-medium text-foreground">
            <FileCheck2 className="size-[19px] text-brand-secondary" />
            <span>{t("sub_note")}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-border bg-white">
          <div className="flex bg-brand-primary px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
            <span className="flex-1">{t("sub_cap")}</span>
            <span>{t("sub_amt")}</span>
          </div>
          <div className="flex border-b border-border px-6 py-[18px] text-base">
            <span className="flex-1 font-medium">1 kW</span>
            <span className="font-bold">₹30,000</span>
          </div>
          <div className="flex border-b border-border px-6 py-[18px] text-base">
            <span className="flex-1 font-medium">2 kW</span>
            <span className="font-bold">₹60,000</span>
          </div>
          <div className="flex bg-brand-accent-soft px-6 py-[18px] text-base">
            <span className="flex-1 font-semibold">{t("sub_3plus")}</span>
            <span className="font-extrabold text-brand-accent-deep">₹78,000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
