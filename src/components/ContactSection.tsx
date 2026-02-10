import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
    };

    return (
        <section id="contact" className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-24 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Get in <span className="text-[var(--text-accent)]">Touch</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-lg leading-relaxed">
                            Have a project in mind or just want to say hello? We'd love to hear from you.
                            Our team is ready to help you navigate your digital journey.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-[var(--bg-tertiary)] rounded-2xl flex items-center justify-center text-[var(--text-accent)] transition-colors group-hover:bg-[var(--text-accent)] group-hover:text-[var(--bg-primary)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                    <p className="text-[var(--text-secondary)]">hello@azurepetals.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-[var(--bg-tertiary)] rounded-2xl flex items-center justify-center text-[var(--text-accent)] transition-colors group-hover:bg-[var(--text-accent)] group-hover:text-[var(--bg-primary)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                    <p className="text-[var(--text-secondary)]">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-[var(--bg-tertiary)] rounded-2xl flex items-center justify-center text-[var(--text-accent)] transition-colors group-hover:bg-[var(--text-accent)] group-hover:text-[var(--bg-primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                                    <p className="text-[var(--text-secondary)]">123 Azure Street, Digital Valley, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[var(--bg-primary)] p-8 md:p-10 rounded-3xl border border-[var(--border-color)] shadow-[var(--shadow-card)]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-[var(--text-secondary)] ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl py-3 px-6 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-accent)] transition-colors placeholder:text-[var(--text-muted)]"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-[var(--text-secondary)] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl py-3 px-6 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-accent)] transition-colors placeholder:text-[var(--text-muted)]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-[var(--text-secondary)] ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="How can we help?"
                                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl py-3 px-6 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-accent)] transition-colors placeholder:text-[var(--text-muted)]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-[var(--text-secondary)] ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl py-3 px-6 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-accent)] transition-colors placeholder:text-[var(--text-muted)] resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--accent-primary)] text-[var(--accent-text)] py-4 rounded-2xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
