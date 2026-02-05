import React from 'react';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-6 md:px-12 lg:py-32 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Digital Solutions <br />
            <span className="text-[var(--text-muted)]">That Drive Success</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            At DigitX, we believe in the transformative power of digital
            solutions. Our mission is to help businesses thrive in the digital
            age through innovation and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>
            <button className="bg-transparent border border-[var(--text-secondary)] text-[var(--text-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--bg-tertiary)] transition-colors">
              Free Consultation
            </button>
          </div>
        </div>

        {/* Decorative Graphic */}
        <div className="relative h-64 md:h-96 lg:h-[500px] flex items-center justify-center">
          {/* Abstract 'X' Graphic Representation */}
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[var(--text-secondary)] to-[var(--bg-primary)] rounded-3xl rotate-45 opacity-20 blur-3xl"></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-bold text-[var(--bg-tertiary)] opacity-80 select-none pointer-events-none transition-colors duration-300"
              style={{
                textShadow: '0 0 100px rgba(128,128,128,0.1)'
              }}>

              DX
            </div>
            {/* Glassmorphism cards floating */}
            <div className="absolute top-1/4 right-10 w-24 h-24 bg-[var(--text-primary)]/5 backdrop-blur-md border border-[var(--text-primary)]/10 rounded-xl transform rotate-12 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-[var(--text-primary)]/5 backdrop-blur-md border border-[var(--text-primary)]/10 rounded-xl transform -rotate-6"></div>
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--bg-tertiary)] to-transparent opacity-20 pointer-events-none"></div>
    </section>);

}