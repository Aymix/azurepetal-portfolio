import React from 'react';
import {
  Share2,
  Briefcase,
  Layout,
  Smartphone,
  Zap,
  Search,
  ArrowRight } from
'lucide-react';
const reasons = [
{
  icon: <Share2 className="w-6 h-6" />,
  title: 'Expertise That Drives Results',
  description:
  'Our team of seasoned professionals brings years of experience and expertise to the table.'
},
{
  icon: <Briefcase className="w-6 h-6" />,
  title: 'Tailored Business Solutions',
  description:
  "We understand that every business is unique. That's why our solutions are customized."
},
{
  icon: <Layout className="w-6 h-6" />,
  title: 'Cutting-Edge Web Design',
  description:
  'Lead a lasting impression on your audience with our top-notch web design services.'
},
{
  icon: <Smartphone className="w-6 h-6" />,
  title: 'Mobile-First Approach',
  description:
  "In today's mobile-centric world, we prioritize mobile-first design to ensure your website."
},
{
  icon: <Zap className="w-6 h-6" />,
  title: 'Marketing Strategies',
  description:
  'Our data-driven marketing strategies ensure you target the right audience with precision.'
},
{
  icon: <Search className="w-6 h-6" />,
  title: 'Search Engine Optimization',
  description:
  'SEO Mastery. Boost your online visibility with our expert SEO techniques.'
}];

export function ReasonsSection() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Reasons to Choose DigitX for <br />
            <span className="text-[var(--text-muted)]">
              Your Digital Journey
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Partnering with DigitX offers a multitude of advantages. Experience
            increased brand visibility, improved customer engagement, and higher
            ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) =>
          <div
            key={index}
            className="bg-[var(--bg-secondary)] p-8 rounded-2xl hover:bg-[var(--bg-tertiary)] transition-all duration-300 group border border-transparent hover:border-[var(--border-hover)] shadow-sm hover:shadow-md">

              <div className="w-12 h-12 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors text-[var(--text-primary)]">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                {reason.description}
              </p>
              <button className="flex items-center text-sm font-medium text-[var(--text-primary)] opacity-70 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}