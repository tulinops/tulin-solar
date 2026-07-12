"use client";

import { useTranslations } from "next-intl";
import { Sun } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z",
  },
  {
    label: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z",
  },
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-brand-footer text-brand-muted-2">
      <div className="mx-auto max-w-6xl px-6 pb-7 pt-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex size-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-brand-primary to-brand-secondary">
                <Sun className="size-[18px]" />
              </span>
              <span className="text-lg font-bold">Tulin Solar</span>
            </div>
            <p className="mt-4 max-w-[280px] text-[14.5px]">{t("foot_tag")}</p>
          </div>

          <div>
            <div className="mb-3.5 text-sm font-semibold text-white">{t("foot_quick")}</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#top" className="text-brand-muted-2 hover:text-white">
                {t("nav_home")}
              </a>
              <a href="#about" className="text-brand-muted-2 hover:text-white">
                {t("nav_about")}
              </a>
              <a href="#plans" className="text-brand-muted-2 hover:text-white">
                {t("foot_plans")}
              </a>
              <a href="#subsidy" className="text-brand-muted-2 hover:text-white">
                {t("nav_subsidy")}
              </a>
              <a href="#contact" className="text-brand-muted-2 hover:text-white">
                {t("nav_contact")}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3.5 text-sm font-semibold text-white">{t("foot_services")}</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <span>{t("svc1")}</span>
              <span>{t("svc2")}</span>
              <span>{t("svc3")}</span>
              <span>{t("svc4")}</span>
            </div>
          </div>

          <div>
            <div className="mb-3.5 text-sm font-semibold text-white">{t("foot_social")}</div>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-[9px] bg-white/8 text-brand-muted-2 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-5 text-[13px]">
          <span>{t("foot_copy")}</span>
          <span>{t("foot_partner")}</span>
        </div>
      </div>
    </footer>
  );
}
