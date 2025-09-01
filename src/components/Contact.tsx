import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const submission = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) {
        throw error;
      }

      // Send email notification
      try {
        await supabase.functions.invoke('send-contact-notification', {
          body: submission
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the whole submission if email fails
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "b.moutawakil.at@gmail.com",
      href: "mailto:b.moutawakil.at@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+212 680 157 997",
      href: "tel:+212680157997"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Had Soualem, Morocco",
      href: "https://maps.google.com/?q=Had+Soualem,+Morocco"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/badrmoutaouakil"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/badr-moutaouakil-a2687b25b/"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/212680157997"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-1 space-y-8 stagger-fade">
            <Card className="glass-card shadow-soft hover-glow">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  {t('contact.info.title')}
                </CardTitle>
                <p className="text-muted-foreground">{t('contact.info.subtitle')}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/20 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Enhanced Social Links */}
            <Card className="glass-card shadow-soft hover-glow">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
                <p className="text-muted-foreground">Follow my journey and projects</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square bg-gradient-primary rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-glow transition-all duration-300 group"
                      title={social.label}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card shadow-soft hover-glow">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Send Message
                </CardTitle>
                <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                        {t('contact.name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t('contact.name')}
                        required
                        className="h-12 bg-card/50 border-border/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                        {t('contact.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t('contact.email')}
                        required
                        className="h-12 bg-card/50 border-border/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-foreground">
                      {t('contact.subject')}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t('contact.subject')}
                      className="h-12 bg-card/50 border-border/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.message')}
                      rows={6}
                      required
                      className="bg-card/50 border-border/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="xl" 
                    disabled={isSubmitting}
                    className="w-full group hover-lift"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        {t('contact.send')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Quick Contact CTA */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative p-12 bg-gradient-primary rounded-3xl text-white shadow-glow overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">Prefer Direct Communication?</h3>
              <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto leading-relaxed">
                Skip the form and reach out directly. I'm always excited to discuss new projects and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="glassmorphism" 
                  size="xl"
                  asChild
                  className="hover-lift"
                >
                  <a href="mailto:b.moutawakil.at@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Me Directly
                  </a>
                </Button>
                <Button 
                  variant="glassmorphism" 
                  size="xl"
                  asChild
                  className="hover-lift"
                >
                  <a href="https://wa.me/212680157997" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
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

export default Contact;