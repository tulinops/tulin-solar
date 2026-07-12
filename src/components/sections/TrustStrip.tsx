"use client";

import { useTranslations } from "next-intl";
import { PanelsTopLeft, ShieldCheck, Zap } from "lucide-react";

export function TrustStrip() {
  const t = useTranslations();

  return (
    <div className="border-y border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-muted-2">
          {t("trust_label")}
        </span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[17px] font-bold text-muted-foreground">
          <span className="flex items-center gap-2">
            <PanelsTopLeft className="size-[18px] text-brand-primary" />
            Waaree
          </span>
          <span className="flex items-center gap-2">
            <PanelsTopLeft className="size-[18px] text-brand-primary" />
            Luminous
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="size-[18px] text-brand-secondary" />
            {t("trust_warr")}
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Zap className="size-[18px] text-brand-accent" />
            {t("trust_inv")}
          </span>
        </div>
      </div>
    </div>
  );
}
