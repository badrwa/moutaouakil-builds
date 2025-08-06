import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Globe,
  Palette,
  Coffee,
  Terminal,
  Layers
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: <Code className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React + Vite", level: "Advanced", description: "Modern component architecture" },
        { name: "JavaScript ES6+", level: "Advanced", description: "Advanced JS concepts" },
        { name: "HTML5/CSS3", level: "Advanced", description: "Semantic markup & modern CSS" },
        { name: "TypeScript", level: "Basic", description: "Type-safe development" },
        { name: "PHP", level: "Basic", description: "Server-side scripting" },
        { name: "Dart", level: "Intermediate", description: "Flutter development language" },
        { name: "Flutter", level: "Intermediate", description: "Cross-platform mobile development" },
        { name: "Tailwind CSS", level: "Basic", description: "Utility-first styling" },
        { name: "Responsive Design", level: "Basic", description: "Mobile-first approach" },
      ],
    },
    {
      title: t('skills.backend'),
      icon: <Server className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Laravel", level: "Advanced", description: "Full-stack PHP framework" },
        { name: "Spring Boot", level: "Advanced", description: "Enterprise Java development" },
        { name: "REST APIs", level: "Intermediate", description: "API design & implementation" },
        { name: "Node.js + Express", level: "Basic", description: "JavaScript runtime & framework" },
        { name: "Authentication", level: "Basic", description: "Security & session management" },
      ],
    },
    {
      title: t('skills.database'),
      icon: <Database className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: "Advanced", description: "Advanced queries & optimization" },
        { name: "Database Design", level: "Intermediate", description: "Schema architecture & normalization" },
        { name: "Data Modeling", level: "Intermediate", description: "Entity relationships" },
        { name: "SQL Optimization", level: "Basic", description: "Performance tuning" },
      ],
    },
    {
      title: t('skills.tools'),
      icon: <Settings className="w-7 h-7" />,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "VS Code", level: "Advanced", description: "Advanced IDE workflows" },
        { name: "Spring Tool Suite", level: "Advanced", description: "Spring development environment" },
        { name: "Git & GitHub", level: "Intermediate", description: "Version control & collaboration" },
        { name: "Postman", level: "Intermediate", description: "API testing & documentation" },
        { name: "Swagger", level: "Intermediate", description: "API documentation & testing" },
        { name: "Netlify", level: "Basic", description: "Website deployment & hosting" },
      ],
    },
    {
      title: t('skills.frameworks'),
      icon: <Layers className="w-7 h-7" />,
      gradient: "from-violet-500 to-purple-500",
      skills: [
        { name: "React Ecosystem", level: "Advanced", description: "Components, hooks, context" },
        { name: "Spring Framework", level: "Advanced", description: "Dependency injection, AOP" },
        { name: "Bootstrap", level: "Intermediate", description: "CSS framework for responsive design" },
        { name: "jQuery", level: "Basic", description: "DOM manipulation & AJAX" },
        { name: "Tailwind CSS", level: "Basic", description: "Utility-first CSS framework" },
      ],
    },
    {
      title: t('skills.architecture'),
      icon: <Terminal className="w-7 h-7" />,
      gradient: "from-indigo-500 to-blue-500",
      skills: [
        { name: "MVC Pattern", level: "Advanced", description: "Model-View-Controller architecture" },
        { name: "DAO Pattern", level: "Advanced", description: "Data Access Object design pattern" },
        { name: "REST Architecture", level: "Intermediate", description: "RESTful API design principles" },
        { name: "Component Architecture", level: "Intermediate", description: "Modular frontend design" },
        { name: "Service Layer", level: "Basic", description: "Business logic separation" },
      ],
    },
  ];

  const languages = [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Working Proficiency", percentage: 75 }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Enhanced Technical Skills */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 stagger-fade">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card shadow-soft hover-lift hover-glow group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }}></div>
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">Specialized expertise</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill p-4 rounded-xl bg-card/30 border border-border/20 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <span className={`font-mono text-sm px-2 py-1 rounded-md ${
                          skill.level === 'Advanced' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
                          skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                        }`}>{skill.level}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            skill.level === 'Advanced' ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                            skill.level === 'Intermediate' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                            'bg-gradient-to-r from-gray-400 to-gray-500'
                          }`}
                          style={{ 
                            width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '75%' : '50%',
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="glass-card shadow-soft hover-glow">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-4 shadow-glow">
                <Globe className="w-8 h-8" />
              </div>
              <CardTitle className="text-3xl font-bold">{t('skills.languages')}</CardTitle>
              <p className="text-muted-foreground">Communication across cultures</p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                {languages.map((language, index) => (
                  <div key={language.name} className="text-center group">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-card border-4 border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                        <span className="text-2xl font-bold text-primary">{language.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-foreground">{language.name}</h4>
                    <p className="text-muted-foreground mb-4">{language.level}</p>
                    <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${language.percentage}%`,
                          animationDelay: `${index * 0.3}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Additional Skills */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade">
          <Card className="glass-card shadow-soft hover-lift hover-glow group text-center p-8">
            <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
              <Palette className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">{t('skills.design')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strong understanding of UI/UX principles, modern design patterns, and user-centered thinking in development.
            </p>
          </Card>
          
          <Card className="glass-card shadow-soft hover-lift hover-glow group text-center p-8">
            <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
              <Coffee className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">{t('skills.problem')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced analytical thinking, systematic debugging, and creative solution-finding for complex technical challenges.
            </p>
          </Card>
          
          <Card className="glass-card shadow-soft hover-lift hover-glow group text-center p-8">
            <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
              <Terminal className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">{t('skills.quality')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Commitment to writing clean, maintainable, well-documented code following industry best practices and standards.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;