import { Twitter, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] pt-16 pb-8 px-6 md:px-12 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-6">

              <span>Azure</span>
              <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[var(--text-primary)] to-gray-500">
                Petals
              </span>
            </a>
            <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-xs">
              Empowering businesses with innovative digital solutions. We build
              the future of the web, one pixel at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]">

                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]">

                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]">

                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]">

                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Mobile App Dev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors">

                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[var(--text-accent)]" />
                <span>123 Azure St, Digital Valley, CA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--text-accent)]" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--text-accent)]" />
                <span>hello@azurepetals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-secondary)]">
          <p>&copy; 2026 Azure Petals. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[var(--text-primary)] transition-colors">

              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--text-primary)] transition-colors">

              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-[var(--text-primary)] transition-colors">

              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}