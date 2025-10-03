"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "@phosphor-icons/react/dist/ssr";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={20} className="text-purplePrimary" />
      <div className="flex bg-customBlueSecondary rounded-lg p-1">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
            language === "en"
              ? "bg-purplePrimary text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
            language === "pt"
              ? "bg-purplePrimary text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          PT
        </button>
      </div>
    </div>
  );
}