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
    { value: 'ar', label: 'العربية', flag: '🇲🇦' },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="fixed top-6 right-6 z-50 group">
          {/* Outer Ring with Rotating Border */}
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-spin" 
               style={{ animationDuration: '8s' }} />
          
          {/* Middle Ring */}
          <div className="absolute inset-[2px] w-[calc(3.5rem-4px)] h-[calc(3.5rem-4px)] rounded-full bg-gradient-to-br from-background/95 to-card/90 backdrop-blur-xl" />
          
          {/* Inner Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`
              relative w-12 h-12 rounded-full m-1
              bg-gradient-to-br from-card/60 to-background/40 backdrop-blur-sm
              border-0 shadow-lg hover:shadow-xl
              transition-all duration-500 group-hover:scale-110
              ${isAnimated ? 'animate-bounce' : ''}
              overflow-hidden
            `}
          >
            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-primary/80 rounded-full animate-ping" 
                   style={{ animationDelay: '0s', animationDuration: '3s' }} />
              <div className="absolute bottom-2 left-1 w-1 h-1 bg-accent/80 rounded-full animate-ping" 
                   style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
              <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-secondary/80 rounded-full animate-ping" 
                   style={{ animationDelay: '0.8s', animationDuration: '3s' }} />
            </div>
            
            {/* Central Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <Settings className="w-5 h-5 text-foreground group-hover:text-primary group-hover:rotate-90 transition-all duration-700" />
            </div>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          
          {/* Floating Particles */}
          <div className="absolute -inset-4 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full animate-float" 
                 style={{ animationDelay: '0s', animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-accent/60 rounded-full animate-float" 
                 style={{ animationDelay: '2s', animationDuration: '5s' }} />
            <div className="absolute left-0 top-1/2 w-0.5 h-0.5 bg-secondary/60 rounded-full animate-float" 
                 style={{ animationDelay: '1s', animationDuration: '6s' }} />
          </div>
        </div>
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