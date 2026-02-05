import React from 'react';
import { ArrowUpRight } from 'lucide-react';
const projects = [
{
  title: 'Innovative E-commerce Platform',
  category: 'Web Development',
  date: 'January 2024',
  description:
  'Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With a robust infrastructure and secure payment gateways.',
  image:
  'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Mobile App for Enhanced Fitness',
  category: 'Mobile App Development',
  date: 'March 2024',
  description:
  'Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy enjoyable.',
  image:
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Modern Corporate Website',
  category: 'Web Design',
  date: 'April 2024',
  description:
  "Check out our sleek and modern corporate website that showcases the client's brand and services. Our responsive design ensures a consistent experience across devices.",
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Digital Marketing Success Story',
  category: 'Digital Marketing',
  date: 'May 2024',
  description:
  "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];

export function WorksSection() {
  return (
    <section
      id="works"
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6 md:px-12 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[var(--text-muted)]">Works</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Witness the brilliance of our previous projects. Our portfolio
            showcases the successful collaborations we've had with diverse
            clients across various industries. Let our work speak for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
          <div
            key={index}
            className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden group border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300 shadow-[var(--shadow-card)]">

              <div className="h-64 overflow-hidden relative">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent opacity-80"></div>
                <div className="absolute bottom-4 right-4 bg-[var(--bg-primary)]/80 backdrop-blur-sm p-2 rounded-full border border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-[var(--text-primary)] w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4 text-sm text-[var(--text-muted)]">
                  <span className="bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span>{project.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--text-muted)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2 hover:underline">
                  View Project Details <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--border-color)] transition-colors inline-flex items-center gap-2">
            View All Projects <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>);

}