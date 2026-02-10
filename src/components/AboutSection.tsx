import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
    return (
        <section id="about" className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-24 px-6 md:px-12 overflow-hidden relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Visual/Graphic */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                alt="Our Team Collaborating"
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent"></div>
                        </div>

                        {/* Decorative Azure Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--text-accent)]/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--accent-primary)]/5 rounded-full blur-3xl"></div>

                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -left-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 rounded-2xl shadow-xl z-20 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[var(--bg-tertiary)] rounded-xl flex items-center justify-center text-[var(--text-accent)]">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">10+</div>
                                    <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Years Excellence</div>
                                </div>
                            </div>
                        </div>

                        {/* Map Integration moved here */}
                        <div className="mt-20 relative rounded-2xl overflow-hidden border border-[var(--border-color)] h-48 group shadow-lg">
                            <div className="absolute inset-0 bg-[var(--accent-primary)]/10 z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-122.0000!3d37.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAwJzAwLjAiTiAxMjLCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.5] contrast-[1.1]"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Innovating at the <br />
                            <span className="text-[var(--text-accent)]">Edge of Digital</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                            At Azure Petals, we believe that the digital landscape is a canvas for innovation.
                            Since our inception, we've dedicated ourselves to helping businesses redefine their
                            online presence through strategic design and cutting-edge technology.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[var(--text-accent)]">
                                    <Target size={20} />
                                    <h4 className="font-bold uppercase tracking-widest text-sm">Our Mission</h4>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    To empower brands with digital solutions that are not just functional, but transformative
                                    and future-proof.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[var(--text-accent)]">
                                    <Eye size={20} />
                                    <h4 className="font-bold uppercase tracking-widest text-sm">Our Vision</h4>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    To be the global benchmark for creative technology, where every pixel serves a
                                    strategic purpose.
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Data-Driven Design Strategies',
                                'Agile & Transparent Work Culture',
                                'Unwavering Commitment to Quality'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-[var(--text-accent)]" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-[var(--accent-primary)] text-[var(--accent-text)] px-8 py-4 rounded-full font-bold hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-[var(--text-accent)]/20">
                            Discover Our Story
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
