import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { LanguagePrompt } from "@/components/LanguagePrompt";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tulin Solar — Rooftop Solar Installer in Visakhapatnam",
  description:
    "MNRE approved rooftop solar installer in Visakhapatnam. Save up to ₹78,000 with government subsidy and cut your electricity bill by up to 90%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <LocaleProvider>
          <LanguagePrompt />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
