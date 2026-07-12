"use client";

import { useTranslations } from "next-intl";
import {
  Users,
  Landmark,
  PanelsTopLeft,
  Rocket,
  Zap,
  Gauge,
  ShieldCheck,
  IndianRupee,
  type LucideIcon,
} from "lucide-react";

type ChipColor = "primary" | "amber" | "green";

const CHIP_CLASSES: Record<ChipColor, string> = {
  primary: "bg-brand-primary-soft text-brand-primary",
  amber: "bg-brand-accent-soft text-brand-accent-deep",
  green: "bg-[#F0FDF4] text-[#15803D]",
};

const FEATURES: { icon: LucideIcon; color: ChipColor; titleKey: string; descKey: string }[] = [
  { icon: Users, color: "primary", titleKey: "why1_t", descKey: "why1_d" },
  { icon: Landmark, color: "amber", titleKey: "why2_t", descKey: "why2_d" },
  { icon: PanelsTopLeft, color: "green", titleKey: "why3_t", descKey: "why3_d" },
  { icon: Rocket, color: "primary", titleKey: "why4_t", descKey: "why4_d" },
  { icon: Zap, color: "amber", titleKey: "why5_t", descKey: "why5_d" },
  { icon: Gauge, color: "green", titleKey: "why6_t", descKey: "why6_d" },
  { icon: ShieldCheck, color: "primary", titleKey: "why7_t", descKey: "why7_d" },
  { icon: IndianRupee, color: "amber", titleKey: "why8_t", descKey: "why8_d" },
];

export function WhyChoose() {
  const t = useTranslations();

  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[620px] text-center">
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("why_eyebrow")}
          </div>
          <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("why_h2")}</h2>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.titleKey} className="rounded-2xl border border-border p-6">
              <span className={`flex size-[42px] items-center justify-center rounded-[11px] ${CHIP_CLASSES[f.color]}`}>
                <f.icon className="size-[21px]" />
              </span>
              <div className="mt-4 mb-1 font-semibold">{t(f.titleKey)}</div>
              <div className="text-sm text-muted-foreground">{t(f.descKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
