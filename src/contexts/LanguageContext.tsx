import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'fr';

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
    'about.age': 'Age',
    'about.location': 'Location',
    'about.description1': "I'm a passionate full-stack developer from Morocco, driven by an insatiable curiosity for technology and its potential to solve complex problems. My journey began with simple curiosity but has evolved into a deep commitment to crafting exceptional digital experiences.",
    'about.description2': 'What truly excites me is the intersection of creativity and logic – transforming abstract ideas into tangible, impactful applications. I thrive on challenges that push me to learn new technologies and implement innovative solutions.',
    'about.seeking': "I'm actively seeking a Junior Full Stack Developer role where I can contribute to meaningful projects, collaborate with talented teams, and continue my growth in a dynamic environment.",
    'about.education.title1': 'Technician Spécialisé in Software Development',
    'about.education.school1': 'OMNIA School of Business & Technology',
    'about.education.desc1': 'Intensive program mastering full-stack development, database architecture, and modern software engineering practices.',
    'about.education.title2': 'Bachelor Project Defense',
    'about.education.status2': 'Successfully Completed 2024-2025',
    'about.education.desc2': 'Demonstrated mastery of advanced full-stack development through comprehensive project presentation and defense.',
    'about.education.title3': 'Baccalaureate',
    
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
    'footer.copyright': '© 2024 Badr Moutaouakil. All rights reserved.',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'التواصل',
    'nav.resume': 'السيرة الذاتية',
    'nav.portfolio': 'معرض أعمالي',
    
    // Hero Section
    'hero.greeting': 'مرحباً، أنا',
    'hero.name.first': 'بدر',
    'hero.name.last': 'متوكل',
    'hero.title': 'مطور ويب متكامل محترف',
    'hero.description': 'شغوف بصناعة تجارب رقمية استثنائية باستخدام أحدث التقنيات. متخصص في Laravel و React و Spring Boot.',
    'hero.cta.work': 'استكشف أعمالي',
    'hero.cta.connect': 'دعنا نتواصل',
    'hero.status': 'متاح للفرص الوظيفية',
    'hero.scroll': 'اكتشف المزيد',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.subtitle': 'اكتشف رحلتي وشغفي وتفاني في صناعة تجارب رقمية استثنائية.',
    'about.age': 'العمر',
    'about.location': 'الموقع',
    'about.description1': 'أنا مطور ويب متكامل شغوف من المغرب، مدفوع بفضول لا يشبع للتكنولوجيا وإمكاناتها في حل المشاكل المعقدة. بدأت رحلتي بفضول بسيط لكنها تطورت إلى التزام عميق بصناعة تجارب رقمية استثنائية.',
    'about.description2': 'ما يثيرني حقاً هو تقاطع الإبداع والمنطق - تحويل الأفكار المجردة إلى تطبيقات ملموسة ومؤثرة. أزدهر في التحديات التي تدفعني لتعلم تقنيات جديدة وتنفيذ حلول مبتكرة.',
    'about.seeking': 'أبحث بنشاط عن دور مطور ويب متكامل مبتدئ حيث يمكنني المساهمة في مشاريع هادفة والتعاون مع فرق موهوبة ومواصلة نموي في بيئة ديناميكية.',
    'about.education.title1': 'تقني متخصص في تطوير البرمجيات',
    'about.education.school1': 'مدرسة أومنيا للأعمال والتكنولوجيا',
    'about.education.desc1': 'برنامج مكثف لإتقان التطوير المتكامل وهندسة قواعد البيانات وممارسات هندسة البرمجيات الحديثة.',
    'about.education.title2': 'دفاع مشروع البكالوريوس',
    'about.education.status2': 'مكتمل بنجاح 2024-2025',
    'about.education.desc2': 'إثبات إتقان التطوير المتكامل المتقدم من خلال عرض ودفاع شامل للمشروع.',
    'about.education.title3': 'البكالوريا',
    
    // Skills Section
    'skills.title': 'الخبرة التقنية',
    'skills.subtitle': 'ترسانة شاملة من التقنيات والأدوات الحديثة التي أستخدمها لبناء تجارب رقمية استثنائية.',
    'skills.frontend': 'تطوير الواجهة الأمامية',
    'skills.backend': 'تطوير الخلفية',
    'skills.database': 'إدارة قواعد البيانات',
    'skills.tools': 'أدوات التطوير',
    'skills.frameworks': 'الأطر والمكتبات',
    'skills.architecture': 'أنماط الهندسة المعمارية',
    'skills.languages': 'اللغات',
    'skills.design': 'الحساسية التصميمية',
    'skills.problem': 'حل المشاكل',
    'skills.quality': 'جودة الكود',
    
    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'عرض خبرتي من خلال تطبيقات العالم الحقيقي والحلول المبتكرة.',
    'projects.view': 'عرض المشروع',
    'projects.demo': 'عرض توضيحي مباشر',
    
    // Contact Section
    'contact.title': 'دعنا ننشئ شيئاً مذهلاً معاً',
    'contact.subtitle': 'مستعد لإحياء أفكارك؟ دعنا نناقش مشروعك ونستكشف كيف يمكننا العمل معاً.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معي',
    'contact.info.subtitle': 'لا تتردد في التواصل للتعاون أو مجرد تحية ودية!',
    
    // Footer
    'footer.description': 'مطور ويب متكامل شغوف مكرس لإنشاء تجارب رقمية استثنائية.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.social': 'تابعني',
    'footer.copyright': '© 2024 بدر متوكل. جميع الحقوق محفوظة.',
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
    'about.age': 'Âge',
    'about.location': 'Localisation',
    'about.description1': 'Je suis un développeur full-stack passionné du Maroc, animé par une curiosité insatiable pour la technologie et son potentiel à résoudre des problèmes complexes. Mon voyage a commencé par une simple curiosité mais a évolué vers un engagement profond à créer des expériences numériques exceptionnelles.',
    'about.description2': 'Ce qui m\'excite vraiment, c\'est l\'intersection de la créativité et de la logique - transformer des idées abstraites en applications tangibles et impactantes. Je m\'épanouis dans les défis qui me poussent à apprendre de nouvelles technologies et à implémenter des solutions innovantes.',
    'about.seeking': 'Je recherche activement un poste de Développeur Full Stack Junior où je peux contribuer à des projets significatifs, collaborer avec des équipes talentueuses et continuer ma croissance dans un environnement dynamique.',
    'about.education.title1': 'Technicien Spécialisé en Développement de Logiciels',
    'about.education.school1': 'École OMNIA Business & Technology',
    'about.education.desc1': 'Programme intensif maîtrisant le développement full-stack, l\'architecture de base de données et les pratiques modernes d\'ingénierie logicielle.',
    'about.education.title2': 'Soutenance de Projet de Licence',
    'about.education.status2': 'Complété avec Succès 2024-2025',
    'about.education.desc2': 'Démontré la maîtrise du développement full-stack avancé à travers une présentation et soutenance complète de projet.',
    'about.education.title3': 'Baccalauréat',
    
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
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
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