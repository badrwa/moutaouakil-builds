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
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-accent opacity-5 rounded-full blur-3xl animate-glow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Greeting */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-accent font-medium text-lg tracking-wide">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tight">
            Badr{" "}
            <span className="gradient-text relative">
              Moutaouakil
              <span className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl"></span>
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl text-foreground/90 mb-8 font-light tracking-wide">
            Elite Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Crafting exceptional digital experiences with{" "}
            <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md">Laravel</span>,{" "}
            <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">React</span>, and{" "}
            <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md">Spring Boot</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 stagger-fade">
            <Button
              variant="premium"
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="group hover-lift"
            >
              <Code className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              Explore My Work
            </Button>
            <Button
              variant="glassmorphism"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="hover-lift"
            >
              Let's Connect
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <span className="text-muted-foreground text-sm mb-4 tracking-wider uppercase">Discover More</span>
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;