import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Users, Database, Code2, Mail, Sparkles } from "lucide-react";
import institutionImage from "@/assets/project-institution.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import blogImage from "@/assets/blog-cms-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Institution Management System",
      description: "A secure, role-based full-stack web application for managing users in an educational institution. Admins can create, update, view, and soft-delete students, instructors, accountants, and other roles.",
      image: institutionImage,
      techStack: ["React", "Vite", "Bootstrap 5", "Spring Boot", "Spring Security", "JPA", "MySQL"],
      features: [
        "Role-based login (admin, student, instructor, etc.)",
        "Session authentication (Spring Security)",
        "Dynamic dashboards per role",
        "CRUD operations for actors",
        "DTO & DAO-based architecture",
        "Soft deletion logic"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce web application with shopping cart functionality, product management, and secure payment integration built with React and Laravel.",
      image: ecommerceImage,
      techStack: ["React", "Laravel", "MySQL", "Stripe API", "Tailwind CSS"],
      features: [
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "User authentication and profiles",
        "Admin dashboard for product management",
        "Payment integration with Stripe",
        "Order tracking and history"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editing, category management, and SEO optimization features built with Node.js and React.",
      image: blogImage,
      techStack: ["Node.js", "Express", "React", "MongoDB", "JWT", "TinyMCE"],
      features: [
        "Rich text editor for content creation",
        "Category and tag management",
        "SEO optimization tools",
        "Comment system with moderation",
        "User roles and permissions",
        "Responsive design"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-gradient-to-r from-emerald-500 to-green-500";
      case "In Progress": return "bg-gradient-to-r from-blue-500 to-indigo-500";
      case "Planned": return "bg-gradient-to-r from-orange-500 to-amber-500";
      default: return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  return (
    <section id="projects" className="py-32 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Showcasing my expertise in full-stack development through real-world applications, 
            from innovative concepts to polished deployments.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto stagger-fade">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-card shadow-elegant hover-lift hover-glow group overflow-hidden border-0 bg-card/40 backdrop-blur-xl">
              <div className={`grid lg:grid-cols-2 gap-0`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-30 transition-all duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/40 group-hover:to-primary/40 transition-all duration-700 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <Badge className={`${getStatusColor(project.status)} text-white shadow-glow px-5 py-2.5 text-sm font-bold rounded-full border-0`}>
                      <Sparkles className="w-3 h-3 mr-1.5" />
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute bottom-6 right-6 z-20 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-12 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/8 to-transparent opacity-70"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-60"></div>
                  
                  <CardHeader className="p-0 mb-10 relative z-10">
                    <CardTitle className="text-3xl lg:text-4xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-10 relative z-10">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold mb-6 flex items-center gap-3 text-xl">
                        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                          <Code2 className="w-5 h-5 text-white" />
                        </div>
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="bg-card/60 backdrop-blur-sm border border-border/30 text-foreground hover:bg-gradient-primary hover:text-white hover:border-primary/50 transition-all duration-300 px-4 py-2 text-sm font-medium rounded-lg shadow-soft hover:shadow-glow hover:scale-105">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-bold mb-6 flex items-center gap-3 text-xl">
                        <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-4 group/item">
                            <div className="w-2.5 h-2.5 bg-gradient-primary rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                            <span className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                      <Button variant="premium" size="lg" asChild className="hover-lift group/btn">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Code
                        </a>
                      </Button>
                      {project.status === "Completed" && (
                        <Button variant="glassmorphism" size="lg" asChild className="hover-lift group/btn">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary p-12 rounded-2xl shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                I'm passionate about turning ideas into reality. Let's collaborate on your next project and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glassmorphism" 
                  size="xl"
                  className="hover-lift"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start a Conversation
                </Button>
                <Button 
                  variant="glassmorphism" 
                  size="xl"
                  className="hover-lift"
                  asChild
                >
                  <a href="mailto:b.moutawakil.at@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Me Directly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;