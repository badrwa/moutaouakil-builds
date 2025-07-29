import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Left - Enhanced Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold gradient-text mb-3">
              Badr Moutaouakil
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              Full-Stack Web Developer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Center - Enhanced Social Links */}
          <div className="flex justify-center">
            <div className="flex gap-6">
              <a
                href="https://github.com/badrmoutaouakil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card/50 backdrop-blur-md rounded-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300 group"
                title="GitHub"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/badrmoutaouakil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card/50 backdrop-blur-md rounded-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:b.moutawakil.at@gmail.com"
                className="w-14 h-14 bg-card/50 backdrop-blur-md rounded-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300 group"
                title="Email"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right - Enhanced Tech Info */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2 text-sm">
              Built with <span className="text-primary font-semibold">React + Vite</span>
            </p>
            <p className="text-muted-foreground mb-2 text-sm">
              Styled with <span className="text-accent font-semibold">Tailwind CSS</span>
            </p>
            <p className="text-muted-foreground text-sm">
              Powered by <span className="gradient-text font-semibold">Lovable</span>
            </p>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-3 text-sm">
            © {currentYear} Badr Moutaouakil. Crafted with 
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            from Morocco 🇲🇦
          </p>
          <p className="text-muted-foreground text-xs mt-2 opacity-75">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;