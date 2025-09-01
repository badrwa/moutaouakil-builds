import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VersionInfo from "@/components/VersionInfo";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";
import MorphingBlobs from "@/components/MorphingBlobs";
import MatrixRain from "@/components/MatrixRain";
import DNAHelix from "@/components/DNAHelix";
import NeuralNetwork from "@/components/NeuralNetwork";
import HolographicGrid from "@/components/HolographicGrid";
import EnergyOrbs from "@/components/EnergyOrbs";
import ConstellationMap from "@/components/ConstellationMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Multi-Layered Advanced Background Effects */}
      <ConstellationMap />
      <DNAHelix />
      <NeuralNetwork />
      <MatrixRain />
      <AnimatedBackground />
      <MorphingBlobs />
      <FloatingElements />
      <HolographicGrid />
      <EnergyOrbs />
      
      {/* Quantum Background Field */}
      <div className="fixed inset-0 bg-interference-pattern opacity-5 animate-drift"></div>
      
      <div className="relative z-20">
        <Header />
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
    </div>
  );
};

export default Index;
