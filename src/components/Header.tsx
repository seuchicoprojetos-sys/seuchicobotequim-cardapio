"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full bg-botequim-bg/95 backdrop-blur-md border-b border-botequim-secondary/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <Link href="#top" className="flex items-center shrink-0 hover:scale-105 transition-transform duration-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/logo.png" 
            alt="Seu Chico Botequim" 
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-stone-500 text-xs hidden md:block font-bold uppercase tracking-wider">
            {t.language}
          </span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
