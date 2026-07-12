"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{10,15}$/, "Enter a valid phone number"),
  city: z.string().trim().optional(),
  bill: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: wire to a real backend / email service (e.g. Resend, Formspree).
    console.log("Contact form submission", data);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-[84px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-primary">
              {t("con_eyebrow")}
            </div>
            <h2 className="mt-3 text-[32px] font-extrabold sm:text-[38px]">{t("con_h2")}</h2>
            <p className="mt-4 mb-7 text-[17px] text-muted-foreground">{t("con_p")}</p>

            <div className="flex flex-col gap-[18px]">
              <div className="flex gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">{t("con_addr")}</div>
                  <div className="text-[15px] text-muted-foreground">
                    #45, MVP Colony, Visakhapatnam,
                    <br />
                    Andhra Pradesh – 530017
                  </div>
                </div>
              </div>
              <div className="flex gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">{t("con_phone")}</div>
                  <div className="text-[15px] text-muted-foreground">+91 98765 43210 · +91 91234 56789</div>
                </div>
              </div>
              <div className="flex gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">{t("con_email")}</div>
                  <div className="text-[15px] text-muted-foreground">
                    info@tulin.in · sales@tulin.in · www.tulin.in
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-border bg-background p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="name" className="text-[13.5px] font-semibold text-foreground">
                    {t("f_name")}
                  </Label>
                  <Input
                    id="name"
                    className="mt-1.5 h-auto rounded-[10px] border-border bg-white px-3.5 py-2.5 text-[15px]"
                    placeholder={t("f_name_ph")}
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[13.5px] font-semibold text-foreground">
                    {t("f_phone")}
                  </Label>
                  <Input
                    id="phone"
                    className="mt-1.5 h-auto rounded-[10px] border-border bg-white px-3.5 py-2.5 text-[15px]"
                    placeholder="+91"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                </div>
                <div>
                  <Label htmlFor="city" className="text-[13.5px] font-semibold text-foreground">
                    {t("f_city")}
                  </Label>
                  <Input
                    id="city"
                    className="mt-1.5 h-auto rounded-[10px] border-border bg-white px-3.5 py-2.5 text-[15px]"
                    placeholder={t("f_city_ph")}
                    {...register("city")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="bill" className="text-[13.5px] font-semibold text-foreground">
                    {t("f_bill")}
                  </Label>
                  <Input
                    id="bill"
                    className="mt-1.5 h-auto rounded-[10px] border-border bg-white px-3.5 py-2.5 text-[15px]"
                    placeholder={t("f_bill_ph")}
                    {...register("bill")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="text-[13.5px] font-semibold text-foreground">
                    {t("f_msg")}
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    className="mt-1.5 rounded-[10px] border-border bg-white px-3.5 py-2.5 text-[15px]"
                    placeholder={t("f_msg_ph")}
                    {...register("message")}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-[18px] h-auto w-full rounded-[11px] bg-brand-primary py-3.5 text-[15.5px] font-semibold text-white hover:bg-brand-primary-dark"
              >
                <Send className="size-[17px]" />
                {t("f_submit")}
              </Button>

              {submitted && (
                <p className="mt-3 text-center text-[13px] font-medium text-brand-primary">
                  Thanks — we&apos;ve received your request.
                </p>
              )}
              <p className="mt-3 text-center text-[12.5px] text-brand-muted-2">{t("f_note")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
