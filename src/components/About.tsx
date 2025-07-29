import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, User, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-lg">
              <User className="w-6 h-6 text-primary" />
              <span className="font-semibold">25 years old</span>
              <MapPin className="w-5 h-5 text-muted-foreground ml-4" />
              <span className="text-muted-foreground">Had Soualem, Morocco</span>
            </div>

            <p className="text-foreground leading-relaxed">
              I'm a passionate full-stack web developer from Had Soualem, Morocco, with a strong foundation in modern web technologies. My journey in software development began with a curiosity about how digital solutions can solve real-world problems and has evolved into a dedication to creating efficient, secure, and user-friendly applications.
            </p>

            <p className="text-foreground leading-relaxed">
              What excites me most about development is the endless learning opportunities and the ability to transform ideas into functional, beautiful applications. I enjoy working with both frontend and backend technologies, always striving to write clean, maintainable code that follows industry best practices.
            </p>

            <p className="text-foreground leading-relaxed">
              I'm currently seeking opportunities as a <strong className="text-primary">Junior Full Stack Developer</strong> where I can contribute to meaningful projects, continue learning, and grow alongside experienced professionals in a collaborative environment.
            </p>
          </div>

          {/* Right Column - Education Cards */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Technician Spécialisé in Software Development</h3>
                    <p className="text-primary font-medium">OMNIA School of Business & Technology</p>
                    <p className="text-muted-foreground">2022 – 2024 • Casablanca</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Comprehensive program covering full-stack development, database design, and software engineering principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Bachelor Project Defense</h3>
                    <p className="text-accent font-medium">Completed 2024-2025</p>
                    <p className="text-muted-foreground">Awaiting diploma</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Successfully defended my bachelor's project, demonstrating advanced full-stack development skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Baccalaureate</h3>
                    <p className="text-muted-foreground">Lycée Oulad Hriz Had Soualem</p>
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