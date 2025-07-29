import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, User, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Discover my journey, passion, and dedication to crafting exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20">
                <User className="w-5 h-5 text-primary" />
                <span className="font-medium">25 years old</span>
              </div>
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Had Soualem, Morocco</span>
              </div>
            </div>

            <p className="text-foreground leading-relaxed text-lg">
              I'm a passionate full-stack developer from Morocco, driven by an insatiable curiosity for technology and its potential to solve complex problems. My journey began with simple curiosity but has evolved into a deep commitment to crafting <span className="text-primary font-semibold">exceptional digital experiences</span>.
            </p>

            <p className="text-foreground leading-relaxed text-lg">
              What truly excites me is the intersection of <span className="text-accent font-semibold">creativity and logic</span> – transforming abstract ideas into tangible, impactful applications. I thrive on challenges that push me to learn new technologies and implement innovative solutions.
            </p>

            <div className="bg-gradient-card p-6 rounded-xl border border-border/20 shadow-soft">
              <p className="text-foreground leading-relaxed text-lg">
                I'm actively seeking a <strong className="gradient-text">Junior Full Stack Developer</strong> role where I can contribute to meaningful projects, collaborate with talented teams, and continue my growth in a dynamic environment.
              </p>
            </div>
          </div>

          {/* Right Column - Education Cards */}
          <div className="space-y-6 stagger-fade">
            <Card className="glass-card shadow-soft hover-lift hover-glow group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-primary p-4 rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-foreground">Technician Spécialisé in Software Development</h3>
                    <p className="text-primary font-semibold text-lg">OMNIA School of Business & Technology</p>
                    <p className="text-muted-foreground mb-3">2022 – 2024 • Casablanca</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Intensive program mastering full-stack development, database architecture, and modern software engineering practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-soft hover-lift hover-glow group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-accent p-4 rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-foreground">Bachelor Project Defense</h3>
                    <p className="text-accent font-semibold text-lg">Successfully Completed 2024-2025</p>
                    <p className="text-muted-foreground mb-3">Diploma Pending</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Demonstrated mastery of advanced full-stack development through comprehensive project presentation and defense.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-soft hover-lift hover-glow group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-primary p-4 rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-foreground">Baccalaureate</h3>
                    <p className="text-muted-foreground text-lg">Lycée Oulad Hriz Had Soualem</p>
                    <p className="text-muted-foreground">2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;