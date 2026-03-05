"use client";

import { useLanguage } from "@/context/LanguageContext";


export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-botequim-bg border-t border-botequim-secondary/10 py-10 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/logo.png" 
            alt="Seu Chico Botequim" 
            className="h-32 w-auto object-contain brightness-95 contrast-105"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-botequim-muted text-xs flex items-center justify-center gap-1.5 font-medium font-body">
            © {year} Seu Chico Botequim. {t.footerRights}
          </p>

        </div>
      </div>
    </footer>
  );
}
