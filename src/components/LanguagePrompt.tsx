"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from "@/i18n/LocaleProvider";
import { defaultLocale, isLocale, localeLabels, locales, STORAGE_KEY, type Locale } from "@/i18n/config";

export function LanguagePrompt() {
  const { setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!isLocale(stored)) setOpen(true);
  }, []);

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) choose(defaultLocale);
      }}
    >
      <DialogContent>
        <DialogTitle className="text-center text-lg">
          Choose your language
          <span className="mt-1 block text-base font-medium text-muted-foreground">
            अपनी भाषा चुनें · మీ భాషను ఎంచుకోండి
          </span>
        </DialogTitle>

        <div className="mt-5 flex flex-col gap-2.5">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => choose(l)}
              className="flex items-center gap-3 rounded-[10px] border border-border px-4 py-3 text-left text-[15px] font-semibold text-foreground transition-colors hover:border-brand-primary hover:bg-brand-primary-soft"
            >
              <Globe className="size-[17px] text-muted-foreground" />
              {localeLabels[l]}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
