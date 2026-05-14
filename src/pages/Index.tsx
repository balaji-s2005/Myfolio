import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import CyberpunkNav from "@/components/CyberpunkNav";
import IntroAnimation from "@/components/IntroAnimation";
import HomePage from "@/pages/HomePage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";
import ConnectPage from "@/pages/ConnectPage";
import ChatUpPage from "@/pages/ChatUpPage";
import cyberpunkBg from "@/assets/cyberpunk-bg.png";

const SECTIONS = ["home", "skills", "projects", "contact", "connect", "chatup"] as const;

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  const navigate = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light", isDark);
  };

  // Update active section on scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight * 0.4;

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i]);
      if (el && el.offsetTop - container.offsetTop <= scrollTop + sectionHeight) {
        setActiveSection(SECTIONS[i]);
        break;
      }
    }
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75 fixed"
        style={{ backgroundImage: `url(${cyberpunkBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "hsl(var(--background) / 0.85)" }} />

      {/* Intro */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      {/* Nav */}
      {!showIntro && (
        <CyberpunkNav
          currentPage={activeSection}
          onNavigate={navigate}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}

      {/* Scrolling Content */}
      {!showIntro && (
        <div
          className="h-screen w-screen overflow-y-auto pt-16 relative z-10 scroll-smooth"
          onScroll={handleScroll}
        >
          <section id="home" className="min-h-screen flex items-center justify-center">
            <HomePage />
          </section>
          <section id="skills" className="min-h-screen flex items-center justify-center">
            <SkillsPage />
          </section>
          <section id="projects" className="min-h-screen flex items-center justify-center">
            <ProjectsPage />
          </section>
          <section id="contact" className="min-h-screen flex items-center justify-center">
            <ContactPage />
          </section>
          <section id="connect" className="min-h-screen flex items-center justify-center">
            <ConnectPage />
          </section>
          <section id="chatup" className="min-h-screen flex items-center justify-center">
            <ChatUpPage />
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
