export const locales = ["en", "hi", "te"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
  te: "తెలుగు",
};

export const STORAGE_KEY = "tulin_lang";

export function isLocale(value: string | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
