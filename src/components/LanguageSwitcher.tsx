"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/data/translations";

const LANGS: { locale: Locale; code: string; label: string }[] = [
  { locale: "pt-BR", code: "br", label: "PT" },
  { locale: "en", code: "us", label: "EN" },
  { locale: "es", code: "es", label: "ES" },
  { locale: "fr", code: "fr", label: "FR" },
  { locale: "it", code: "it", label: "IT" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-botequim-secondary/10 shadow-sm">
      {LANGS.map((l) => (
        <button
          key={l.locale}
          onClick={() => setLocale(l.locale)}
          aria-label={`Switch to ${l.label}`}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-300 ${
            locale === l.locale
              ? "bg-botequim-secondary text-white shadow-md scale-105"
              : "text-botequim-secondary/60 hover:text-botequim-secondary hover:bg-botequim-secondary/5"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`https://flagcdn.com/w40/${l.code}.png`} 
            alt="" 
            className="w-4 h-3 object-cover rounded-[1px] shadow-xs"
          />
          <span className="hidden sm:inline font-heading font-bold tracking-wider">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
