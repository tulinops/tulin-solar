"use client";

import { useTranslations } from "next-intl";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { faqData } from "@/data/faq";

export function Faq() {
  const t = useTranslations();
  const { locale } = useLocale();
  const items = faqData[locale];

  return (
    <section id="faq" className="mx-auto max-w-[820px] px-6 py-16 md:py-20 lg:py-[88px]">
      <div className="text-center">
        <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
          {t("faq_eyebrow")}
        </div>
        <h2 className="mt-3 text-[32px] font-extrabold sm:text-4xl">{t("faq_h2")}</h2>
      </div>

      <AccordionPrimitive.Root type="multiple" defaultValue={["0"]} className="mt-10 flex flex-col gap-3">
        {items.map((item, i) => (
          <AccordionPrimitive.Item
            key={i}
            value={String(i)}
            className="overflow-hidden rounded-[14px] border border-border bg-white"
          >
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-[22px] py-5 text-left text-[16.5px] font-semibold text-foreground">
                <span>{item.q}</span>
                <span className="shrink-0 text-brand-primary">
                  <Plus className="size-5 group-data-[state=open]:hidden" />
                  <Minus className="hidden size-5 group-data-[state=open]:block" />
                </span>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="px-[22px] pb-[22px] text-[15.5px] leading-[1.65] text-muted-foreground">
                {item.a}
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </section>
  );
}
