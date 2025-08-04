import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.home'), id: "home" },
    { label: t('nav.about'), id: "about" },
    { label: t('nav.skills'), id: "skills" },
    { label: t('nav.projects'), id: "projects" },
    { label: t('nav.contact'), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-elegant border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection("home")}
          >
            {t('nav.portfolio')}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button variant="premium" size="sm" className="ml-6">
              <Download className="w-4 h-4" />
              {t('nav.resume')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-glow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border/20 animate-slide-up">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-left group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                    {item.label}
                  </span>
                </button>
              ))}
              <Button variant="premium" size="sm" className="w-fit mt-4">
                <Download className="w-4 h-4" />
                {t('nav.resume')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;