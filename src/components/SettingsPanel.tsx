import { useState, useEffect } from 'react';
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
  Check,
  Sparkles,
  Palette
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const SettingsPanel = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-6 right-6 z-50 h-12 px-4 rounded-full bg-background/80 backdrop-blur-md border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <Settings className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-primary group-hover:rotate-180 transition-all duration-500" />
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
            Settings
          </span>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-96 p-0 bg-gradient-to-br from-background/95 via-card/90 to-background/95 backdrop-blur-2xl border-0 shadow-2xl rounded-3xl overflow-hidden" 
        align="end"
        sideOffset={16}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl" />
        <div className="absolute inset-[1px] bg-gradient-to-br from-background/95 via-card/90 to-background/95 rounded-[calc(1.5rem-1px)]" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <Card className="border-0 shadow-none bg-transparent relative z-10">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="gradient-text">Settings</span>
            </CardTitle>
            <p className="text-muted-foreground text-sm">Customize your experience</p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Theme Selection */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" />
                Theme
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon;
                  const isSelected = theme === themeOption.value;
                  return (
                    <Button
                      key={themeOption.value}
                      variant="ghost"
                      size="sm"
                      onClick={() => setTheme(themeOption.value as any)}
                      className={`
                        h-auto p-4 flex flex-col gap-2 relative group transition-all duration-300
                        ${isSelected 
                          ? 'bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-lg scale-105' 
                          : 'hover:bg-card/50 hover:scale-105'
                        }
                        rounded-xl border border-border/20 hover:border-primary/30
                      `}
                    >
                      {/* Background Glow for Selected */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-sm" />
                      )}
                      
                      <Icon className={`w-5 h-5 relative z-10 ${isSelected ? 'text-primary' : 'text-muted-foreground'} group-hover:scale-110 transition-transform duration-300`} />
                      <span className={`text-xs font-medium relative z-10 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                        {themeOption.label}
                      </span>
                      
                      {isSelected && (
                        <Check className="w-3 h-3 absolute top-1 right-1 text-primary animate-pulse" />
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Languages className="w-4 h-4 text-accent" />
                Language
              </h4>
              <div className="space-y-2">
                {languages.map((lang) => {
                  const isSelected = language === lang.value;
                  return (
                    <Button
                      key={lang.value}
                      variant="ghost"
                      size="sm"
                      onClick={() => setLanguage(lang.value)}
                      className={`
                        w-full justify-start h-auto p-4 relative group transition-all duration-300
                        ${isSelected 
                          ? 'bg-gradient-to-r from-accent/20 to-secondary/20 text-accent shadow-lg' 
                          : 'hover:bg-card/50'
                        }
                        rounded-xl border border-border/20 hover:border-accent/30
                      `}
                    >
                      {/* Background Glow for Selected */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl blur-sm" />
                      )}
                      
                      <span className="mr-4 text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {lang.flag}
                      </span>
                      <span className={`flex-1 text-left font-medium relative z-10 ${isSelected ? 'text-accent' : 'text-muted-foreground'}`}>
                        {lang.label}
                      </span>
                      
                      {isSelected && (
                        <Check className="w-5 h-5 text-accent animate-pulse" />
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPanel;