import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 30, 50, 0.8), rgba(30, 30, 50, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Badr{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Moutaouakil
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-3xl text-white/90 mb-6 font-light">
            Full-Stack Web Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            I design and build modern, secure, and scalable web applications
            using{" "}
            <span className="text-accent font-semibold">Laravel</span>,{" "}
            <span className="text-primary-glow font-semibold">React</span>, and{" "}
            <span className="text-accent font-semibold">Spring Boot</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button
              variant="glassmorphism"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;