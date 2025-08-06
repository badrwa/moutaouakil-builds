import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import VersionInfo from "@/components/VersionInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SettingsPanel />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <VersionInfo />
    </div>
  );
};

export default Index;
