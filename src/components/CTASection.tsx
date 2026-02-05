import React from 'react';
export function CTASection() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your <br />
          <span className="text-[var(--text-muted)]">Digital Presence?</span>
        </h2>
        <p className="text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
          Take the first step towards digital success with DigitX by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="bg-transparent border border-[var(--text-secondary)] text-[var(--text-primary)] px-8 py-3 rounded-full font-bold hover:bg-[var(--bg-tertiary)] transition-colors">
            Free Consultation
          </button>
        </div>

        <div className="relative h-32 md:h-48 flex items-center justify-center overflow-hidden">
          <h1 className="text-[80px] md:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-secondary)] to-[var(--bg-primary)] opacity-50 tracking-widest select-none">
            DigitX
          </h1>
        </div>
      </div>
    </section>);

}