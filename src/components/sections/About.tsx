"use client";

import { useTranslations } from "next-intl";

const STATS = [
  { value: "90%", labelKey: "stat_bill" },
  { value: "₹78k", labelKey: "stat_subsidy" },
  { value: "30 yrs", labelKey: "stat_life" },
  { value: "2–5 days", labelKey: "stat_install" },
];

export function About() {
  const t = useTranslations();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-[88px]">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("about_eyebrow")}
          </div>
          <h2 className="mt-3.5 text-3xl font-extrabold sm:text-[38px]">{t("about_h2")}</h2>
          <p className="mt-5 text-[17px] text-muted-foreground">{t("about_p1")}</p>
          <p className="mt-4 text-[17px] text-muted-foreground">
            {t.rich("about_p2", {
              strong: (chunks) => <b className="text-foreground">{chunks}</b>,
            })}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="rounded-2xl border border-border bg-white p-5">
              <div className="text-[30px] font-extrabold text-brand-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
