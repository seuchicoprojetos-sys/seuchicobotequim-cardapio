"use client";

import React, { createContext, useContext, useState } from "react";
import { Locale, Translation, translations } from "@/data/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "pt-BR",
  t: translations["pt-BR"],
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  const setLocale = (l: Locale) => setLocaleState(l);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
