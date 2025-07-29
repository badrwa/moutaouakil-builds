import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg text-hero-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Badr Moutaouakil
            </h3>
            <p className="text-white/70 text-sm">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <a
                href="https://github.com/badrmoutaouakil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/badrmoutaouakil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:b.moutawakil.at@gmail.com"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Tech Info */}
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm mb-1">
              Built with React + Vite
            </p>
            <p className="text-white/70 text-sm">
              Powered by Lovable
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-2">
            © {currentYear} Badr Moutaouakil. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            from Morocco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;