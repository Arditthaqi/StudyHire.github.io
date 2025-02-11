import React from "react";
import { useLanguage } from "../context/LanguageContext";
export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-12 h-8 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-sm"
    >
      {language.toUpperCase()}
    </button>
  );
};
