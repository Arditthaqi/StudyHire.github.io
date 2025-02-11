import React, { useState, createContext, useContext } from "react";
const translations = {
  en: {
    nav: {
      home: "Home",
      jobs: "Jobs",
      employers: "Employers",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Find Your Dream Job in Germany",
      subtitle: "Quick & Easy",
      description:
        "Register now and discover your perfect job match with leading companies across Germany.",
      applyNow: "Apply Now",
      findTalent: "Find Talent",
    },
    // Add more translations as needed
  },
  de: {
    nav: {
      home: "Startseite",
      jobs: "Jobs",
      employers: "Arbeitgeber",
      about: "Über uns",
      contact: "Kontakt",
    },
    hero: {
      title: "Finden Sie Ihren Traumjob in Deutschland",
      subtitle: "Schnell & Einfach",
      description:
        "Registrieren Sie sich jetzt und entdecken Sie passende Jobs bei führenden Unternehmen in Deutschland.",
      applyNow: "Jetzt Bewerben",
      findTalent: "Talent Finden",
    },
    // Add more translations as needed
  },
};
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  t: (section: string, key: string) => "",
});
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };
  const t = (section: string, key: string) => {
    return translations[language]?.[section]?.[key] || "";
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
