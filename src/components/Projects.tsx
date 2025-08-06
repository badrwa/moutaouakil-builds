import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, Shield, Users, Database, Code2, Mail, Sparkles, Star, Zap, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import institutionLogin from "@/assets/institution-login.jpg";
import institutionDashboard from "@/assets/institution-dashboard.jpg";
import institutionAdminTable from "@/assets/institution-admin-table.jpg";
import institutionStudentDashboard from "@/assets/institution-student-dashboard.jpg";
import institutionInstructorDashboard from "@/assets/institution-instructor-dashboard.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import ecommerceCatalog from "@/assets/ecommerce-catalog.jpg";
import ecommerceCheckout from "@/assets/ecommerce-checkout.jpg";
import blogImage from "@/assets/blog-cms-project.jpg";
import blogEditor from "@/assets/blog-editor.jpg";
import blogFrontend from "@/assets/blog-frontend.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t('projects.institution.title'),
      description: t('projects.institution.description'),
      images: [
        "/lovable-uploads/69397aa9-955f-484f-a07f-6f6f44171d8f.png", // Login
        "/lovable-uploads/34fd681a-1201-4195-a2cc-be2d16bb8792.png", // Admin Management
        "/lovable-uploads/752b14ad-eedb-4973-b3b1-6bbcdcb413d8.png", // Admin Details
        "/lovable-uploads/c793d6ef-69a7-493a-bf14-e8dd0e6ee19e.png", // Admin Edit
        "/lovable-uploads/63935396-3134-4336-b76b-6ce2385ba76a.png", // Main Dashboard
        "/lovable-uploads/1e541d98-ec6e-4044-af9f-95778fedd344.png", // Student Dashboard
        "/lovable-uploads/e4552096-3a24-4073-995d-8462561e7720.png", // Instructor Dashboard
      ],
      techStack: ["React", "Vite", "Bootstrap 5", "Spring Boot", "Spring Security", "JPA", "MySQL"],
      features: [
        t('projects.institution.feature1'),
        t('projects.institution.feature2'),
        t('projects.institution.feature3'),
        "Admin panel with user management table",
        "Student dashboard with GPA & attendance tracking",
        "Instructor panel for student management"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "MVP",
      icon: Shield,
      color: "from-blue-500 to-purple-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-gradient-to-r from-emerald-500 to-green-500";
      case "MVP": return "bg-gradient-to-r from-blue-500 to-purple-600";
      case "In Progress": return "bg-gradient-to-r from-blue-500 to-indigo-500";
      case "Planned": return "bg-gradient-to-r from-orange-500 to-amber-500";
      default: return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/8 to-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-r from-secondary/12 to-primary/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/30 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary/50 rotate-45 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm border border-primary/20">
            <Star className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold tracking-wider text-primary">PORTFOLIO SHOWCASE</span>
            <Star className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            {t('projects.title')}
          </h2>
          
          <p className="text-muted-foreground max-w-4xl mx-auto text-xl leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={project.title} className="group relative">
                {/* Project Card */}
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/60 via-card/40 to-card/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                  <div className={`grid sm:grid-cols-1 lg:grid-cols-12 gap-0 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Image Carousel Section */}
                    <div className={`lg:col-span-7 relative ${!isEven ? 'lg:col-start-6' : ''}`}>
                      <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6 z-30">
                          <Badge className={`bg-gradient-to-r ${project.color} text-white shadow-xl px-6 py-3 text-sm font-bold rounded-full border-0 backdrop-blur-sm`}>
                            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                            {project.status}
                          </Badge>
                        </div>

                        {/* Image Carousel */}
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.images.map((image, imgIndex) => (
                              <CarouselItem key={imgIndex}>
                                <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[28rem] overflow-hidden">
                                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 mix-blend-multiply z-10`}></div>
                                  <img 
                                    src={image} 
                                    alt={`${project.title} - ${imgIndex + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
                          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
                        </Carousel>

                        {/* Floating Icon */}
                        <div className="absolute bottom-6 right-6 z-20">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-xl backdrop-blur-sm transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`lg:col-span-5 p-8 sm:p-12 lg:p-16 xl:p-20 space-y-6 lg:space-y-8 ${!isEven ? 'lg:col-start-1' : ''}`}>
                      {/* Title & Description */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-foreground flex items-center gap-3">
                          <Code2 className="w-5 h-5 text-primary" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} className="bg-gradient-to-r from-muted/80 to-muted/60 text-foreground border border-border/50 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 px-4 py-2 text-sm font-medium rounded-lg backdrop-blur-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-foreground flex items-center gap-3">
                          <Shield className="w-5 h-5 text-accent" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-4 group/item">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                              <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button 
                          variant="premium" 
                          size="lg" 
                          asChild 
                          className="group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                            {t('projects.view')}
                          </a>
                        </Button>
                        {project.status === "Completed" && (
                          <Button 
                            variant="outline" 
                            size="lg" 
                            asChild 
                            className="group/btn border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                              {t('projects.demo')}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-32 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-accent to-secondary p-1 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-background/95 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-12 lg:p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                    <Sparkles className="w-10 h-10 text-white animate-pulse" />
                  </div>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                  Ready to Build Something <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Extraordinary</span>?
                </h3>
                
                <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
                  Let's transform your vision into reality. I'm here to bring creativity, innovation, and technical excellence to your next project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button 
                    variant="premium" 
                    size="xl"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Star className="w-6 h-6 mr-2" />
                    Start a Conversation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:b.moutawakil.at@gmail.com">
                      <Mail className="w-6 h-6 mr-2" />
                      Email Me Directly
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;