"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { calculateSolarPlan, formatINR } from "@/lib/calculator";

export function Calculator() {
  const t = useTranslations();
  const [kw, setKw] = useState(3);
  const values = useMemo(() => calculateSolarPlan(kw), [kw]);

  return (
    <section id="calculator" className="border-y border-border bg-white">
      <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[620px] text-center">
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("calc_eyebrow")}
          </div>
          <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("calc_h2")}</h2>
        </div>

        <div className="mt-11 grid grid-cols-1 overflow-hidden rounded-[20px] border border-border md:grid-cols-2">
          <div className="border-b border-border p-8 md:border-b-0 md:border-r">
            <div className="flex items-baseline justify-between">
              <label className="text-[15px] font-semibold">{t("calc_size")}</label>
              <span className="text-[26px] font-extrabold text-brand-primary">{kw} kW</span>
            </div>
            <Slider
              className="mt-[18px]"
              min={1}
              max={5}
              step={1}
              value={[kw]}
              onValueChange={([v]) => setKw(v)}
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-brand-muted-2">
              <span>1 kW</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5 kW</span>
            </div>

            <div className="mt-8 flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[14.5px] text-muted-foreground">{t("calc_cost")}</span>
                <span className="font-semibold">₹{formatINR(values.cost)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14.5px] text-muted-foreground">{t("calc_gov")}</span>
                <span className="font-semibold text-brand-secondary">− ₹{formatINR(values.subsidy)}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-bold">{t("calc_yourprice")}</span>
                <span className="text-[19px] font-extrabold">₹{formatINR(values.finalPrice)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-brand-primary-soft p-8">
            <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-primary">
              {t("calc_estsav")}
            </div>
            <div className="mt-2.5 mb-0.5 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-brand-primary sm:text-[44px]">
                ₹{formatINR(values.monthlySavings)}
              </span>
              <span className="text-base text-muted-foreground">{t("calc_permonth")}</span>
            </div>
            <div className="text-[14.5px] text-muted-foreground">
              ≈ ₹{formatINR(values.annualSavings)} {t("calc_peryear")}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3.5">
              <div className="rounded-xl border border-border bg-white p-4">
                <div className="text-[22px] font-extrabold">
                  {values.genLow}–{values.genHigh}
                </div>
                <div className="text-[12.5px] text-muted-foreground">{t("calc_unitsmo")}</div>
              </div>
              <div className="rounded-xl border border-border bg-white p-4">
                <div className="text-[22px] font-extrabold">~{values.payback} yrs</div>
                <div className="text-[12.5px] text-muted-foreground">{t("calc_payback")}</div>
              </div>
            </div>

            <Button
              asChild
              className="mt-[26px] h-auto rounded-[11px] bg-brand-primary py-3.5 text-[15px] font-semibold text-white hover:bg-brand-primary-dark"
            >
              <a href="#contact">{t("calc_btn")}</a>
            </Button>
          </div>
        </div>

        <p className="mt-4 text-center text-[12.5px] text-brand-muted-2">{t("calc_note")}</p>
      </div>
    </section>
  );
}
