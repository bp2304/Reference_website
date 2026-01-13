import { useState, useCallback } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="lg:ml-64">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection onNavigate={handleNavigate} />
          <TimelineSection />
          <LeadershipSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
