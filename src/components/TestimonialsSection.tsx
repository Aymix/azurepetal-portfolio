import React from 'react';
import { Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
  author: 'Mark Roberts',
  role: 'Founder of GreenEarth Solutions',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
},
{
  quote:
  'The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users. Highly recommended!',
  author: 'Lisa Williams',
  role: 'Head of Product at HealthTech Innovations',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
},
{
  quote:
  'DigitX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and hassle-free.',
  author: 'Michael Johnson',
  role: 'Marketing Manager at TechGurus Inc.',
  avatar: 'https://randomuser.me/api/portraits/men/86.jpg'
}];

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[var(--text-muted)]">Testimonials</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients
            have to say about their experience with DigitX. We take pride in
            building lasting relationships and delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <div
            key={index}
            className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-color)] relative flex flex-col shadow-[var(--shadow-card)]">

              <div className="absolute -top-4 left-8 bg-[var(--bg-tertiary)] p-2 rounded-full">
                <Quote className="w-5 h-5 text-[var(--text-muted)]" />
              </div>
              <p className="text-[var(--text-secondary)] italic mb-8 mt-4 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-[var(--border-color)] pt-6">
                <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[var(--bg-tertiary)]" />

                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}