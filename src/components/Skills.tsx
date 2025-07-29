import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Globe,
  Palette,
  Coffee,
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React + Vite", "Bootstrap 5"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Laravel (PHP)", "Java Spring Boot", "Node.js", "Express"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Database Design", "SQL Queries", "Data Management"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git & GitHub", "Postman", "VS Code", "IntelliJ", "Figma"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Working Proficiency", percentage: 75 },
    { name: "French", level: "Basic", percentage: 30 }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((language) => (
                  <div key={language.name} className="text-center">
                    <h4 className="font-semibold text-lg mb-2">{language.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{language.level}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${language.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white mb-4">
              <Palette className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">UI/UX Awareness</h3>
            <p className="text-muted-foreground text-sm">
              Understanding of user experience principles and modern design patterns
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white mb-4">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Problem Solving</h3>
            <p className="text-muted-foreground text-sm">
              Analytical thinking and debugging skills to solve complex challenges
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-4">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
            <p className="text-muted-foreground text-sm">
              Writing maintainable, well-documented code following best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;