import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, User, Target, Star, Heart, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import QRResumeCard from "./QRResumeCard";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-background via-primary/3 to-accent/5 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/8 to-accent/6 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-accent/6 to-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-secondary/5 to-primary/7 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-accent/30 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-3 h-3 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:gap-20 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                   <h3 className="font-semibold text-foreground mb-2">Age</h3>
                  <p className="text-muted-foreground text-lg">{t('about.age')} Years</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                   <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-lg">{t('about.location')}</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-foreground leading-relaxed text-lg">
              {t('about.description1')}
            </p>

            <p className="text-foreground leading-relaxed text-lg">
              {t('about.description2')}
            </p>

            <div className="bg-gradient-card p-6 rounded-xl border border-border/20 shadow-soft">
              <p className="text-foreground leading-relaxed text-lg">
                {t('about.seeking')}
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
                    <h3 className="font-bold text-xl mb-3 text-foreground">{t('about.education.title2')}</h3>
                    <p className="text-primary font-semibold text-lg">{t('about.education.school1')}</p>
                    <p className="text-muted-foreground mb-3">{t('about.education.status2')}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('about.education.desc2')}
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
                    <h3 className="font-bold text-xl mb-3 text-foreground">{t('about.education.title1')}</h3>
                    <p className="text-accent font-semibold text-lg">{t('about.education.school1')}</p>
                    <p className="text-muted-foreground mb-3">{t('about.education.desc1')}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Project defense completed, diploma pending.
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
                    <h3 className="font-bold text-xl mb-3 text-foreground">{t('about.education.title3')}</h3>
                    <p className="text-muted-foreground text-lg">{t('about.education.status3')}</p>
                    <p className="text-muted-foreground">{t('about.education.desc3')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Code Resume */}
            <QRResumeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
