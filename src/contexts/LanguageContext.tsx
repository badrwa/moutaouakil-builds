import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.portfolio': 'My Portfolio',
    
    // Hero Section
    'hero.greeting': "HELLO, I'M",
    'hero.name.first': 'Badr',
    'hero.name.last': 'Moutaouakil',
    'hero.title': 'Elite Full-Stack Developer',
    'hero.description': 'Passionate about crafting exceptional digital experiences with cutting-edge technologies. Specializing in Laravel, React, and Spring Boot.',
    'hero.cta.work': 'Explore My Work',
    'hero.cta.connect': "Let's Connect",
    'hero.status': 'AVAILABLE FOR OPPORTUNITIES',
    'hero.scroll': 'Discover More',
    
    // About Section  
    'about.title': 'About Me',
    'about.subtitle': 'Discover my journey, passion, and dedication to crafting exceptional digital experiences.',
    'about.age': '25',
    'about.location': 'Had Soualem, Morocco', 
    'about.phone': '+212 680 157 997',
    'about.email': 'b.moutawakil.at@gmail.com',
    'about.linkedin': 'linkedin.com/in/badr-moutaouakil-a2687b25b',
    'about.description1': "I'm a passionate full-stack developer from Morocco, driven by an insatiable curiosity for technology and its potential to solve complex problems. My journey began with simple curiosity but has evolved into a deep commitment to crafting exceptional digital experiences.",
    'about.description2': 'What truly excites me is the intersection of creativity and logic – transforming abstract ideas into tangible, impactful applications. I thrive on challenges that push me to learn new technologies and implement innovative solutions.',
    'about.seeking': "I'm actively seeking a Junior Full Stack Developer role where I can contribute to meaningful projects, collaborate with talented teams, and continue my growth in a dynamic environment.",
    'about.education.title1': "Bachelor's in Web and Mobile Application Engineering",
    'about.education.school1': 'OMNIA School of Business & Technology, Casablanca',
    'about.education.desc1': 'Project defense completed, diploma pending. Comprehensive program covering advanced full-stack development and mobile technologies.',
    'about.education.title2': 'Specialized Technician Diploma in Software Development', 
    'about.education.status2': 'OMNIA School of Business & Technology, Casablanca (Completed)',
    'about.education.desc2': 'Intensive program mastering full-stack development, database architecture, and modern software engineering practices.',
    'about.education.title3': 'Baccalaureate in Science Physics',
    'about.education.status3': 'Lycée Oulad Hriz Had Soualem (2020)',
    'about.education.desc3': 'Scientific track with specialized focus on physics and advanced mathematics.',
    
    // Skills Section
    'skills.frontend.items': 'HTML, CSS, JavaScript, React + Vite, Bootstrap, PHP (Laravel Blade)',
    'skills.backend.items': 'Laravel, Spring Boot, Node.js, Express, Java',
    'skills.database.items': 'MySQL (phpMyAdmin)',
    'skills.tools.items': 'Git, GitHub, Postman, Swagger, Netlify, Spring Tool Suite',
    'skills.languages.items': 'Arabic (native), English (working proficiency)',
    
    // Projects
    'projects.institution.title': 'Institution Management System (MVP)',
    'projects.institution.description': 'A comprehensive, role-based full-stack web application for managing educational institutions. Features dynamic dashboards for administrators, students, and instructors with complete user management capabilities.',
    'projects.institution.feature1': 'Role-based authentication & authorization',
    'projects.institution.feature2': 'Dynamic dashboards for each user role',
    'projects.institution.feature3': 'Complete CRUD operations for all users',
    
    // Version
    'version': 'v1.0.0 - 06/08/2025',
    
    // Skills Section
    'skills.title': 'Technical Expertise',
    'skills.subtitle': 'A comprehensive arsenal of modern technologies and tools I use to build exceptional digital experiences.',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database Management',
    'skills.tools': 'Development Tools',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.architecture': 'Architecture Patterns',
    'skills.languages': 'Languages',
    'skills.design': 'Design Sensibility',
    'skills.problem': 'Problem Solving',
    'skills.quality': 'Code Quality',
    'skills.specialization': 'Specialized expertise',
    'skills.communication': 'Communication across cultures',
    'skills.design.desc': 'Strong understanding of UI/UX principles, modern design patterns, and user-centered thinking in development.',
    'skills.problem.desc': 'Advanced analytical thinking, systematic debugging, and creative solution-finding for complex technical challenges.',
    'skills.quality.desc': 'Commitment to writing clean, maintainable, well-documented code following industry best practices and standards.',
    'skills.tech.stack': 'Technology Stack',
    'skills.key.features': 'Key Features',
    'skills.language.arabic': 'Arabic',
    'skills.language.english': 'English',
    'skills.language.native': 'Native',
    'skills.language.working': 'Working Proficiency',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Showcasing my expertise through real-world applications and innovative solutions.',
    'projects.view': 'View Project',
    'projects.demo': 'Live Demo',
    
    // Contact Section
    'contact.title': "Let's Create Something Amazing Together",
    'contact.subtitle': "Ready to bring your ideas to life? Let's discuss your project and explore how we can work together.",
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info.title': 'Get in Touch',
    'contact.info.subtitle': 'Feel free to reach out for collaborations or just a friendly hello!',
    
    // Footer
    'footer.description': 'Passionate full-stack developer dedicated to creating exceptional digital experiences.',
    'footer.quicklinks': 'Quick Links',
    'footer.social': 'Follow Me',
    'footer.copyright': '© 2025 Badr Moutaouakil. All rights reserved.',
  },
  
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.resume': 'CV',
    'nav.portfolio': 'Mon Portfolio',
    
    // Hero Section
    'hero.greeting': 'BONJOUR, JE SUIS',
    'hero.name.first': 'Badr',
    'hero.name.last': 'Moutaouakil',
    'hero.title': 'Développeur Full-Stack Elite',
    'hero.description': 'Passionné par la création d\'expériences numériques exceptionnelles avec des technologies de pointe. Spécialisé en Laravel, React et Spring Boot.',
    'hero.cta.work': 'Explorer Mon Travail',
    'hero.cta.connect': 'Connectons-nous',
    'hero.status': 'DISPONIBLE POUR OPPORTUNITÉS',
    'hero.scroll': 'Découvrir Plus',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Découvrez mon parcours, ma passion et mon dévouement à créer des expériences numériques exceptionnelles.',
    'about.age': '25',
    'about.location': 'Had Soualem, Maroc',
    'about.phone': '+212 680 157 997', 
    'about.email': 'b.moutawakil.at@gmail.com',
    'about.linkedin': 'linkedin.com/in/badr-moutaouakil-a2687b25b',
    'about.description1': 'Je suis un développeur full-stack passionné du Maroc, animé par une curiosité insatiable pour la technologie et son potentiel à résoudre des problèmes complexes. Mon voyage a commencé par une simple curiosité mais a évolué vers un engagement profond à créer des expériences numériques exceptionnelles.',
    'about.description2': 'Ce qui m\'excite vraiment, c\'est l\'intersection de la créativité et de la logique - transformer des idées abstraites en applications tangibles et impactantes. Je m\'épanouis dans les défis qui me poussent à apprendre de nouvelles technologies et à implémenter des solutions innovantes.',
    'about.seeking': 'Je recherche activement un poste de Développeur Full Stack Junior où je peux contribuer à des projets significatifs, collaborer avec des équipes talentueuses et continuer ma croissance dans un environnement dynamique.',
    'about.education.title1': 'Licence en Ingénierie des Applications Web et Mobiles',
    'about.education.school1': 'École OMNIA Business & Technology, Casablanca',
    'about.education.desc1': 'Soutenance de projet complétée, diplôme en attente. Programme complet couvrant le développement full-stack avancé et les technologies mobiles.',
    'about.education.title2': 'Diplôme de Technicien Spécialisé en Développement de Logiciels',
    'about.education.status2': 'École OMNIA Business & Technology, Casablanca (Complété)',
    'about.education.desc2': 'Programme intensif maîtrisant le développement full-stack, l\'architecture de base de données et les pratiques modernes d\'ingénierie logicielle.',
    'about.education.title3': 'Baccalauréat Sciences Physiques',
    'about.education.status3': 'Lycée Oulad Hriz Had Soualem (2020)',
    'about.education.desc3': 'Filière scientifique avec spécialisation en physique et mathématiques avancées.',
    
    // Skills Section
    'skills.frontend.items': 'HTML, CSS, JavaScript, React + Vite, Bootstrap, PHP (Laravel Blade)',
    'skills.backend.items': 'Laravel, Spring Boot, Node.js, Express, Java', 
    'skills.database.items': 'MySQL (phpMyAdmin)',
    'skills.tools.items': 'Git, GitHub, Postman, Swagger, Netlify, Spring Tool Suite',
    'skills.languages.items': 'Arabe (natif), Anglais (compétence professionnelle)',
    
    // Projects
    'projects.institution.title': 'Système de Gestion d\'Institution (MVP)',
    'projects.institution.description': 'Une application web full-stack complète basée sur les rôles pour gérer les institutions éducatives. Propose des tableaux de bord dynamiques pour les administrateurs, étudiants et instructeurs avec des capacités complètes de gestion des utilisateurs.',
    'projects.institution.feature1': 'Authentification et autorisation basées sur les rôles',
    'projects.institution.feature2': 'Tableaux de bord dynamiques pour chaque rôle d\'utilisateur',
    'projects.institution.feature3': 'Opérations CRUD complètes pour tous les utilisateurs',
    
    // Version
    'version': 'v1.0.0 - 06/08/2025',
    
    // Skills Section
    'skills.title': 'Expertise Technique',
    'skills.subtitle': 'Un arsenal complet de technologies et outils modernes que j\'utilise pour construire des expériences numériques exceptionnelles.',
    'skills.frontend': 'Développement Frontend',
    'skills.backend': 'Développement Backend',
    'skills.database': 'Gestion de Base de Données',
    'skills.tools': 'Outils de Développement',
    'skills.frameworks': 'Frameworks et Bibliothèques',
    'skills.architecture': 'Modèles d\'Architecture',
    'skills.languages': 'Langues',
    'skills.design': 'Sensibilité Design',
    'skills.problem': 'Résolution de Problèmes',
    'skills.quality': 'Qualité du Code',
    'skills.specialization': 'Expertise spécialisée',
    'skills.communication': 'Communication interculturelle',
    'skills.design.desc': 'Solide compréhension des principes UI/UX, des modèles de design modernes et de la pensée centrée utilisateur en développement.',
    'skills.problem.desc': 'Pensée analytique avancée, débogage systématique et recherche de solutions créatives pour les défis techniques complexes.',
    'skills.quality.desc': 'Engagement à écrire du code propre, maintenable et bien documenté suivant les meilleures pratiques et standards de l\'industrie.',
    'skills.tech.stack': 'Stack Technologique',
    'skills.key.features': 'Fonctionnalités Clés',
    'skills.language.arabic': 'Arabe',
    'skills.language.english': 'Anglais',
    'skills.language.native': 'Natif',
    'skills.language.working': 'Compétence Professionnelle',
    
    // Projects Section
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Démontrant mon expertise à travers des applications du monde réel et des solutions innovantes.',
    'projects.view': 'Voir le Projet',
    'projects.demo': 'Démo Live',
    
    // Contact Section
    'contact.title': 'Créons Quelque Chose d\'Incroyable Ensemble',
    'contact.subtitle': 'Prêt à donner vie à vos idées ? Discutons de votre projet et explorons comment nous pouvons travailler ensemble.',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.info.title': 'Entrer en Contact',
    'contact.info.subtitle': 'N\'hésitez pas à me contacter pour des collaborations ou juste un hello amical !',
    
    // Footer
    'footer.description': 'Développeur full-stack passionné dédié à créer des expériences numériques exceptionnelles.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.social': 'Suivez-moi',
    'footer.copyright': '© 2024 Badr Moutaouakil. Tous droits réservés.',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
