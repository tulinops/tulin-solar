"use client";

import { useTranslations } from "next-intl";

const STEPS = [
  { labelKey: "step_lbl1", textKey: "proc1" },
  { labelKey: "step_lbl2", textKey: "proc2" },
  { labelKey: "step_lbl3", textKey: "proc3" },
  { labelKey: "step_lbl4", textKey: "proc4" },
  { labelKey: "step_lbl5", textKey: "proc5" },
  { labelKey: "step_lbl6", textKey: "proc6" },
  { labelKey: "step_lbl7", textKey: "proc7" },
  { labelKey: "step_lbl8", textKey: "proc8" },
];

export function Process() {
  const t = useTranslations();

  return (
    <section id="process" className="border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[620px] text-center">
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
            {t("proc_eyebrow")}
          </div>
          <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("proc_h2")}</h2>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.labelKey} className="rounded-2xl border border-border p-[22px]">
              <div className="text-[13px] font-bold text-brand-primary">{t(step.labelKey)}</div>
              <div className="mt-2 font-semibold">{t(step.textKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
