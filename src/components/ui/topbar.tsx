'use client';

import { ChevronDown, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function TopBar() {

  const {setTheme, theme} = useTheme();

  return (
    <div className="flex items-center justify-end px-6 py-3 bg-gray-100 dark:bg-gray-800 sticky top-0 z-50 shadow-sm rounded-md">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          onClick={()=>setTheme(theme==="light"?"dark":"light")}
        >
          <Moon className="w-5 h-5 dark:hidden" />
          <Sun className="w-5 h-5 hidden dark:block" />
        </button>

        <div className="relative">
          <button className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <Globe size={18} className="mr-1" />
            <span className="text-sm">Français</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>

        <button className="p-2 text-sm rounded-md bg-primary text-primary-foreground cursor-pointer dark:text-white hover:bg-primary/90 dark:hover:bg-[#0e5113] transition">
          Generer
        </button>
      </div>
    </div>
  );

}
export default TopBar;
