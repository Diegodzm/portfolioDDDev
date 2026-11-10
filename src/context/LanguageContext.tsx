"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { es, en };

type Locale = "es" | "en";
const localeChangeEvent = "portfolio-locale-change";
let fallbackLocale: Locale = "es";

function getLocaleSnapshot(): Locale {
  try {
    const saved = localStorage.getItem("locale");
    if (saved === "es" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  } catch {
    return fallbackLocale;
  }
}

function subscribeToLocaleChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(localeChangeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(localeChangeEvent, onChange);
  };
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocaleChanges,
    getLocaleSnapshot,
    () => "es",
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    fallbackLocale = newLocale;
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      // The in-memory locale still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(localeChangeEvent));
  };

  const t = dictionaries[locale] || dictionaries.es;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
