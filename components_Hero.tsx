import React from "react";
import { useLanguage } from "../context/LanguageContext";
export const Hero = () => {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
      </div>
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t("hero", "title")}
          <br />
          {t("hero", "subtitle")}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          {t("hero", "description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            {t("hero", "applyNow")}
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
            {t("hero", "findTalent")}
          </button>
        </div>
      </div>
    </div>
  );
};
