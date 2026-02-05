import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navLinks = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Projects',
    href: '#works'
  },
  {
    name: 'About Us',
    href: '#about'
  },
  {
    name: 'Careers',
    href: '#careers'
  },
  {
    name: 'Contact Us',
    href: '#contact'
  }];

  return (
    <header className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-4 px-6 md:px-12 sticky top-0 z-50 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter flex items-center gap-1">

            <span>Digit</span>
            <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[var(--text-primary)] to-gray-500">
              X
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">

                {link.name}
              </a>
            )}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-primary)]"
            aria-label="Toggle theme">

            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-primary)]"
            aria-label="Toggle theme">

            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="text-[var(--text-primary)] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">

            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen &&
      <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors block"
          onClick={() => setIsMenuOpen(false)}>

              {link.name}
            </a>
        )}
        </div>
      }
    </header>);

}