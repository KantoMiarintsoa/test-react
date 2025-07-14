'use client';

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {useLocale, useTranslations} from "next-intl";
import { changeLocaleAction } from "./action";

function TopBar({ onGenerate }: { onGenerate: () => void }) {
  const { setTheme, theme } = useTheme();
  const locale = useLocale();
  const [language, setLanguage] = useState(()=>{
    const localeLanguageMap = [
      {key:"en", language:"English"},
      {key:"fr", language:"Français"}
    ];

    const current = localeLanguageMap.find((l)=>l.key===locale);

    return current?.language??"Français";
  });
  const t = useTranslations();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLanguage(lang: string) {
    setLanguage(lang);
    setOpen(false);
  }

  async function changeLocale(locale:string){
    await changeLocaleAction(locale);
  }

  return (
    <div className="flex items-center justify-end px-6 py-3 bg-gray-100 dark:bg-gray-800 sticky top-0 z-50 shadow-sm rounded-md">
      <div className="flex items-center space-x-4">

        {/* Bouton thème clair/sombre */}
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          <Moon className="w-5 h-5 dark:hidden" />
          <Sun className="w-5 h-5 hidden dark:block" />
        </button>

        {/* Dropdown langue */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            aria-haspopup="true"
            aria-expanded={open}
          >
            <Globe size={18} className="mr-1" />
            <span className="text-sm">{language}</span>
            <ChevronDown size={16} className="ml-1" />
          </button>

          {open && (
            <ul className="absolute right-0 mt-1 w-28 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={async () => {
                  selectLanguage("Français");
                  await changeLocale("fr")
                }}
              >
                Français
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={async() => {
                  selectLanguage("Anglais");
                  await changeLocale("en")
                }}
              >
                Anglais
              </li>
            </ul>
          )}
        </div>

        {/* Bouton générer */}
        <button
          className="p-2 text-sm rounded-md bg-primary text-primary-foreground cursor-pointer dark:text-white hover:bg-primary/90 dark:hover:bg-[#0e5113] transition"
          onClick={onGenerate}
        >
          {t("generate")}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
