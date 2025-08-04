import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { 
  Settings, 
  Sun, 
  Moon, 
  Monitor, 
  Languages, 
  Check 
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const SettingsPanel = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'ar', label: 'العربية', flag: '🇲🇦' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full shadow-elegant hover:shadow-glow bg-background/80 backdrop-blur-sm border-border/20 hover:border-primary/30"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-background/95 backdrop-blur-xl border-border/20" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Theme Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Theme</h4>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon;
                  return (
                    <Button
                      key={themeOption.value}
                      variant={theme === themeOption.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTheme(themeOption.value as any)}
                      className="h-auto p-3 flex flex-col gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs">{themeOption.label}</span>
                      {theme === themeOption.value && (
                        <Check className="w-3 h-3 absolute top-1 right-1" />
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Languages className="w-4 h-4" />
                Language
              </h4>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.value}
                    variant={language === lang.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage(lang.value)}
                    className="w-full justify-start h-auto p-3"
                  >
                    <span className="mr-3 text-lg">{lang.flag}</span>
                    <span className="flex-1 text-left">{lang.label}</span>
                    {language === lang.value && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPanel;