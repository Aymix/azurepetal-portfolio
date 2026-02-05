import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReasonsSection } from './components/ReasonsSection';
import { ServicesSection } from './components/ServicesSection';
import { WorksSection } from './components/WorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { PartnersSection } from './components/PartnersSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ReasonsSection />
          <ServicesSection />
          <WorksSection />
          <TestimonialsSection />
          <FAQSection />
          <PartnersSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}