"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { quoteKey: "testi1_q", name: "Ramesh Kumar" },
  { quoteKey: "testi2_q", name: "S. Lakshmi" },
];

export function Testimonials() {
  const t = useTranslations();

  return (
    <section className="bg-gradient-to-b from-[#0F766E] to-[#134E4A] text-white">
      <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold sm:text-[34px]">{t("testi_h2")}</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="rounded-[18px] border border-white/14 bg-white/8 p-7">
              <div className="mb-3.5 flex gap-0.5 text-[#FCD34D]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[18px] fill-current" />
                ))}
              </div>
              <p className="mb-[18px] text-[17px] text-white/92">{t(item.quoteKey)}</p>
              <div className="font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
