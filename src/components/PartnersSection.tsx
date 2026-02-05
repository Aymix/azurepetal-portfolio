import React from 'react';
import { Hexagon, Triangle, Circle, Square, Star, Diamond } from 'lucide-react';
const partners = [
{
  name: 'ABC Tech Solutions',
  icon: <Hexagon className="w-8 h-8" />
},
{
  name: 'GreenEarth Eco Store',
  icon: <Triangle className="w-8 h-8" />
},
{
  name: 'HealthFirst Insurance',
  icon: <Circle className="w-8 h-8" />
},
{
  name: 'GlobalTech Solutions',
  icon: <Square className="w-8 h-8" />
},
{
  name: 'TechGurus Inc.',
  icon: <Star className="w-8 h-8" />
},
{
  name: 'ArtScape Gallery',
  icon: <Diamond className="w-8 h-8" />
}];

export function PartnersSection() {
  return (
    <section className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-6 md:px-12 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="text-[var(--text-muted)]">
              Partners and Clients
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            We are grateful for the opportunity to work with esteemed partners
            and clients. Our strong relationships are a testament to our
            dedication and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) =>
          <div
            key={index}
            className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-color)] flex flex-col items-center text-center hover:border-[var(--border-hover)] transition-colors group shadow-[var(--shadow-card)]">

              <div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]">
                {partner.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                A leading technology firm that trusted DigitX for a website
                redesign.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}