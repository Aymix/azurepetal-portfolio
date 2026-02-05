import React from 'react';
import { Code, Smartphone, Palette, Megaphone, ArrowRight } from 'lucide-react';
const services = [
{
  icon: <Code className="w-8 h-8" />,
  title: 'Web Development',
  description:
  'Unlock your online potential with our top-notch web development services. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices.'
},
{
  icon: <Smartphone className="w-8 h-8" />,
  title: 'Mobile App Development',
  description:
  'Embrace mobility with our state-of-the-art mobile app development services. Our mobile app development services enable you to connect with your customers on the go.'
},
{
  icon: <Palette className="w-8 h-8" />,
  title: 'Web Design',
  description:
  "Elevate your brand aesthetics. Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces."
},
{
  icon: <Megaphone className="w-8 h-8" />,
  title: 'Digital Marketing',
  description:
  'Drive your business forward in the digital landscape. Our digital marketing services help you rise above the noise and connect with your target audience effectively through data-driven campaigns.'
}];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-6 md:px-12 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[var(--text-muted)]">Services</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Our comprehensive range of services includes web design, mobile app
            development, SEO, social media marketing, and more. Whether you're a
            startup or an established enterprise, we have solutions for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            className="bg-[var(--bg-primary)] p-10 rounded-3xl border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300 group relative overflow-hidden shadow-[var(--shadow-card)]">

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--text-primary)]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>

              <div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-2xl flex items-center justify-center mb-8 text-[var(--text-primary)] shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="inline-flex items-center justify-center px-6 py-2 border border-[var(--border-color)] rounded-full text-sm font-medium hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}