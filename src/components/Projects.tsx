import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Users, Database, Code2 } from "lucide-react";
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className="shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden group">
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                      {project.status === "Completed" && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;