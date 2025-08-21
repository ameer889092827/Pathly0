"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm rounded ${language === "en" ? "bg-gray-900 text-white" : "bg-gray-100"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ru")}
        className={`px-2 py-1 text-sm rounded ${language === "ru" ? "bg-gray-900 text-white" : "bg-gray-100"}`}
      >
        RU
      </button>
    </div>
  );
}
