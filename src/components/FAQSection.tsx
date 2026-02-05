import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
const faqs = [
{
  question: 'How long does it take to complete a web development project?',
  answer:
  "The timeline varies depending on the project's complexity and requirements. On average, a standard website takes 4-8 weeks, while more complex platforms may take 3-6 months."
},
{
  question:
  'Can you create a responsive website design that looks great on all devices?',
  answer:
  'Absolutely! All our websites are designed with a mobile-first approach, ensuring they look and function perfectly on desktops, tablets, and smartphones.'
},
{
  question: 'Can you handle large-scale mobile app development projects?',
  answer:
  'Yes, we have extensive experience in developing scalable mobile applications for enterprise-level clients, handling complex features and high user loads.'
},
{
  question:
  'What digital marketing strategies do you employ to drive website traffic?',
  answer:
  'We use a mix of SEO, PPC advertising, content marketing, and social media strategies tailored to your specific industry and target audience.'
},
{
  question:
  'Do you offer maintenance services for websites and apps developed by other companies?',
  answer:
  'Yes, we offer comprehensive maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performant.'
},
{
  question: 'How do you ensure cross-platform compatibility for mobile apps?',
  answer:
  'We use modern frameworks like React Native and Flutter to build apps that work seamlessly on both iOS and Android platforms from a single codebase.'
}];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently{' '}
            <span className="text-[var(--text-muted)]">Asked Questions</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Got questions? We've got answers. Check out our frequently asked
            questions section to find valuable insights into our processes,
            pricing, and more.
          </p>

          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full py-3 px-10 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-muted)] transition-colors placeholder-[var(--text-muted)]" />

            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-5 h-5" />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className={`bg-[var(--bg-secondary)] rounded-xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-[var(--text-muted)]' : 'border-[var(--border-color)]'} shadow-[var(--shadow-card)]`}>

              <button
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}>

                <span className="font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]' : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'}`}>

                  {openIndex === index ?
                <Minus size={16} /> :

                <Plus size={16} />
                }
                </div>
              </button>

              <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>

                <div className="p-6 pt-0 text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}