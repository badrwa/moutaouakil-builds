import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-5 w-5" />;
    } else if (theme === 'dark') {
      return <Moon className="h-5 w-5" />;
    } else {
      return <Monitor className="h-5 w-5" />;
    }
  };

  const getTitle = () => {
    if (theme === 'light') return 'Switch to Dark mode';
    if (theme === 'dark') return 'Switch to System mode';
    return 'Switch to Light mode';
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover-glow group relative"
      title={getTitle()}
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;