"use client";

import { useTranslations } from "next-intl";
import { Sun, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/i18n/LocaleProvider";
import { locales, localeLabels, type Locale } from "@/i18n/config";

const NAV_ITEMS: { key: string; href: string }[] = [
  { key: "nav_about", href: "#about" },
  { key: "nav_plans", href: "#plans" },
  { key: "nav_subsidy", href: "#subsidy" },
  { key: "nav_process", href: "#process" },
  { key: "nav_faq", href: "#faq" },
  { key: "nav_contact", href: "#contact" },
];

export function Header() {
  const t = useTranslations();
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2.5 text-foreground">
          <span className="flex size-[34px] items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
            <Sun className="size-[19px]" />
          </span>
          <span className="text-[19px] font-bold tracking-tight">
            Tulin<span className="text-brand-primary"> Solar</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[14.5px] font-medium text-muted-foreground lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href} className="text-muted-foreground hover:text-foreground">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Globe className="pointer-events-none absolute left-2.5 top-1/2 size-[15px] -translate-y-1/2 text-muted-foreground" />
            <Select value={locale} onValueChange={(v) => setLocale(v as Locale)}>
              <SelectTrigger className="h-9 rounded-[10px] border-border pl-8 text-[13.5px] font-semibold text-foreground [&>svg]:hidden">
                <SelectValue>{localeLabels[locale]}</SelectValue>
              </SelectTrigger>
              <SelectContent align="end">
                {locales.map((l) => (
                  <SelectItem key={l} value={l}>
                    {localeLabels[l]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            asChild
            className="h-auto rounded-[10px] bg-brand-primary px-4 py-[9px] text-[14px] font-semibold text-white shadow-[0_1px_2px_rgba(15,118,110,0.25)] hover:bg-brand-primary-dark"
          >
            <a href="#contact">
              <Phone className="size-[15px]" />
              {t("cta_quote")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
