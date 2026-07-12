"use client";

import { useTranslations } from "next-intl";
import {
  IdCard,
  CreditCard,
  Receipt,
  Home,
  Landmark,
  PiggyBank,
  TrendingUp,
  Wrench,
  Leaf,
  CalendarClock,
  BadgeIndianRupee,
  type LucideIcon,
} from "lucide-react";

const DOCS: { icon: LucideIcon; key: string }[] = [
  { icon: IdCard, key: "doc1" },
  { icon: CreditCard, key: "doc2" },
  { icon: Receipt, key: "doc3" },
  { icon: Home, key: "doc4" },
  { icon: Landmark, key: "doc5" },
];

const BENEFITS: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: PiggyBank, titleKey: "ben1_t", descKey: "ben1_d" },
  { icon: TrendingUp, titleKey: "ben2_t", descKey: "ben2_d" },
  { icon: Wrench, titleKey: "ben3_t", descKey: "ben3_d" },
  { icon: Leaf, titleKey: "ben4_t", descKey: "ben4_d" },
  { icon: CalendarClock, titleKey: "ben5_t", descKey: "ben5_d" },
  { icon: BadgeIndianRupee, titleKey: "ben6_t", descKey: "ben6_d" },
];

export function DocsBenefits() {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-[88px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("docs_eyebrow")}
          </div>
          <h2 className="mt-3 text-[28px] font-extrabold sm:text-[32px]">{t("docs_h2")}</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {DOCS.map((doc) => (
              <li
                key={doc.key}
                className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 text-[15px] font-medium"
              >
                <doc.icon className="size-[18px] text-brand-primary" />
                <span>{t(doc.key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("ben_eyebrow")}
          </div>
          <h2 className="mt-3 text-[28px] font-extrabold sm:text-[32px]">{t("ben_h2")}</h2>
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.titleKey} className="flex gap-3 rounded-xl border border-border bg-white p-[18px]">
                <b.icon className="size-5 shrink-0 text-brand-secondary" />
                <div>
                  <div className="text-[15px] font-semibold">{t(b.titleKey)}</div>
                  <div className="text-[13.5px] text-muted-foreground">{t(b.descKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
