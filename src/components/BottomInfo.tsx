"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Clock, CreditCard, AlertCircle, Percent } from "lucide-react";
import { businessInfo, LocalizedString } from "@/data/menu";
import { Locale } from "@/data/translations";

function getLocalizedString(str: LocalizedString, locale: Locale): string {
  if (typeof str === "string") return str;
  return str[locale] || str["pt-BR"];
}

const CARD_LOGOS: { name: string; src: string }[] = [
  { name: "Visa", src: "/images/brands/visa.png" },
  { name: "Mastercard", src: "/images/brands/mastercard.png" },
  { name: "Hipercard", src: "/images/brands/hipercard.png" },
  { name: "Elo", src: "/images/brands/elo.png" },
];

function CardLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg px-3 py-1.5 h-10 w-20 shadow-[0_4px_6px_rgba(0,0,0,0.05)] border-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="max-h-6 max-w-full object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const span = document.createElement("span");
            span.className = "text-botequim-muted text-xs font-bold";
            span.textContent = name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

export default function BottomInfo() {
  const { t, locale } = useLanguage();

  return (
    <section className="w-full bg-botequim-bg py-24 border-t border-botequim-secondary/10 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-full bg-botequim-primary/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {/* Opening Hours */}
        <div className="bg-botequim-card border-0 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-botequim-primary">
            <Clock size={20} />
            <h2 className="font-subtitle font-bold text-sm uppercase tracking-[0.2em] text-botequim-secondary">{t.openingHours}</h2>
          </div>
          <ul className="space-y-3">
            {businessInfo.hours.map((h, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="text-botequim-muted text-[11px] uppercase tracking-wider font-bold">
                  {getLocalizedString(h.days, locale)}
                </span>
                <span className="text-botequim-text font-semibold text-base">
                  {getLocalizedString(h.time, locale)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accepted Cards */}
        <div className="bg-botequim-card border-0 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-botequim-primary">
            <CreditCard size={20} />
            <h2 className="font-subtitle font-bold text-sm uppercase tracking-[0.2em] text-botequim-secondary">{t.acceptedCards}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CARD_LOGOS.map((c) => (
              <CardLogo key={c.name} name={c.name} src={c.src} />
            ))}
          </div>
          <p className="text-red-500 text-xs flex items-center gap-1.5 font-semibold mt-auto pt-2">
            <AlertCircle size={14} />
            {t.noChecks}
          </p>
        </div>

        {/* Couvert & Service */}
        <div className="bg-botequim-card border-0 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-botequim-primary">
            <Percent size={20} />
            <h2 className="font-subtitle font-bold text-sm uppercase tracking-[0.2em] text-botequim-secondary">{t.couvert}</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-dashed border-[#D1D1D1] pb-2">
              <span className="text-botequim-text font-medium text-sm">{t.couvert}</span>
              <span className="text-botequim-text font-bold text-lg">
                {t.couvertRegular}{" "}
                <span className="text-botequim-muted text-xs font-medium">/ {t.perPerson}</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-botequim-text font-medium text-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-botequim-primary"></span>
                {t.specialDays}
              </span>
              <span className="text-botequim-primary font-bold text-lg">
                {t.couvertSpecial}{" "}
                <span className="text-botequim-primary/60 text-xs font-medium">/ {t.perPerson}</span>
              </span>
            </div>
          </div>
          <div className="mt-auto pt-4">
            <p className="text-botequim-muted text-[11px] font-semibold uppercase tracking-wider bg-botequim-bg py-1.5 px-3 rounded-md inline-block">
              {t.serviceFee}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
