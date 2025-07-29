import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Users, Database, Code2, Mail } from "lucide-react";
import projectImage from "@/assets/project-institution.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Institution Management System",
      description: "A secure, role-based full-stack web application for managing users in an educational institution. Admins can create, update, view, and soft-delete students, instructors, accountants, and other roles.",
      image: projectImage,
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
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
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
      case "Completed": return "bg-green-500";
      case "In Progress": return "bg-blue-500";
      case "Planned": return "bg-orange-500";
      default: return "bg-gray-500";
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

        <div className="space-y-12 max-w-6xl mx-auto stagger-fade">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-card shadow-soft hover-lift hover-glow group overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <Badge className={`${getStatusColor(project.status)} text-white shadow-glow px-4 py-2 text-sm font-semibold`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                </div>

                {/* Project Content */}
                <div className={`p-10 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
                  
                  <CardHeader className="p-0 mb-8 relative z-10">
                    <CardTitle className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-8 relative z-10">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <Code2 className="w-4 h-4 text-white" />
                        </div>
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="bg-card/50 border border-border/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                      <Button variant="premium" size="lg" asChild className="hover-lift">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                      </Button>
                      {project.status === "Completed" && (
                        <Button variant="glassmorphism" size="lg" asChild className="hover-lift">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
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