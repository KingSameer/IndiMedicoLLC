'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Success Stories', href: '#success-stories' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Safety', href: '#safety' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              onClick={closeMenu}
            >
              IndiHealthcare
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="touch-target inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            {/* Mobile menu header */}
            <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
              <Link 
                href="/" 
                className="text-xl font-bold text-primary-600"
                onClick={closeMenu}
              >
                IndiHealthcare
              </Link>
              <button
                onClick={closeMenu}
                className="touch-target rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile menu links */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="touch-target block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 px-4">
                <a
                  href="#contact"
                  className="touch-target flex w-full items-center justify-center px-4 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
                  onClick={closeMenu}
                >
                  Get Free Quote
                </a>
                <div className="mt-4 flex flex-col items-center space-y-4">
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="touch-target flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <span className="text-sm">Call us: +91-XXXXXXXXXX</span>
                  </a>
                  <a 
                    href="mailto:info@indianmedicaltourism.com" 
                    className="touch-target flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <span className="text-sm">Email: info@indianmedicaltourism.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
