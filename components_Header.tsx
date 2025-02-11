import React from "react";
import { Menu } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
export const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-white font-bold text-xl">StudyHire</div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white hover:text-blue-100 transition-colors"
              >
                {t("nav", "home")}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition-colors"
              >
                {t("nav", "jobs")}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition-colors"
              >
                {t("nav", "employers")}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition-colors"
              >
                {t("nav", "about")}
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition-colors"
              >
                {t("nav", "contact")}
              </a>
            </nav>
            <LanguageToggle />
            <button className="text-white md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
