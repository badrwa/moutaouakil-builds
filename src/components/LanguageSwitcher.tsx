import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Check, ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="hover-glow group relative h-9 gap-2"
          title="Select Language"
        >
          <Languages className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLanguage?.flag}</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-40 bg-background/95 backdrop-blur-md border border-border/40 shadow-lg z-50"
        align="end"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer hover:bg-accent/50"
          >
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </div>
            {language === lang.code && (
              <Check className="h-3 w-3 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;