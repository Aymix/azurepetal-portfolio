import React from 'react';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="bg-black text-[var(--text-primary)] py-20 px-6 md:px-12 lg:py-32 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Azure Petals <br />
            <span className="text-[var(--text-accent)]">That Drive Success</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Our mission is to help businesses thrive in the digital
            age through innovation and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>
            <a href="#contact" className="bg-transparent border border-[var(--text-secondary)] text-[var(--text-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--bg-tertiary)] transition-colors flex items-center justify-center">
              Free Consultation
            </a>
          </div>
        </div>

        {/* Decorative Graphic */}
        <div className="relative h-64 md:h-96 lg:h-[500px] flex items-center justify-center">
          {/* Abstract 'X' Graphic Representation */}
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] aspect-square flex items-center justify-center">
              <video
                src="/cube.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain opacity-90 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>);

}