import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import MyCourse from "@/components/MyCourse";
import WindowFrame from "@/components/WindowFrame";
import heroBg from "@assets/generated_images/abstract_tech_background_for_hero.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Hero />
          </div>
        );
      case "courses":
        return (
          <WindowFrame title="~/learning-journey" onClose={() => setActiveTab("home")}>
            <MyCourse />
          </WindowFrame>
        );
      case "projects":
        return (
          <WindowFrame title="~/featured-projects" onClose={() => setActiveTab("home")}>
            <Projects />
          </WindowFrame>
        );
      case "contact":
        return (
          <WindowFrame title="~/contact-me" onClose={() => setActiveTab("home")}>
            <Contact />
          </WindowFrame>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-20" />
        
        {/* Animated Grid/Particles could go here */}
        <div className="absolute inset-0 opacity-[0.03] z-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-20 h-full w-full flex items-center justify-center p-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl flex items-center justify-center"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dock / Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
