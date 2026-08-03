'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  // Close timeout cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on click outside (great for hybrid touch devices)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [servicesOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const serviceLinks = [
    { name: 'Financial Services', path: '/services/financial-services' },
    { name: 'Mutual Fund Calculator', path: '/services/mutual-fund-calculator' },
    { name: 'Product Distribution', path: '/services/product-distribution' },
    { name: 'SWP', path: '/services/swp' },
    { name: 'Wealth Management', path: '/services/wealth-management' },
  ];

  const otherLinks = [
    { name: 'Quick Links', path: '/quick-links' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white border-b border-slate-200/60 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center group">
            <div className="w-56 h-14 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/Cultmoney_logo.svg"
                alt="CultMoney Logo"
                width={224}
                height={56}
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                  pathname === link.path ? 'text-primary font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* Dropdown Menu for Services */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Keep it open on click to prevent hover-click closing conflict
                  setServicesOpen(true);
                }}
                className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 ${
                  serviceLinks.some(link => pathname === link.path)
                    ? 'text-primary font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10 lg:hidden" 
                      onClick={() => setServicesOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-3 w-64 z-20"
                    >
                      <div className="rounded-2xl glass-panel p-2 bg-white border border-slate-200/60 shadow-lg">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => {
                              if (closeTimeoutRef.current) {
                                clearTimeout(closeTimeoutRef.current);
                              }
                              setServicesOpen(false);
                            }}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-slate-50 ${
                              pathname === service.path ? 'text-primary bg-slate-50 font-semibold' : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="text-sm font-medium">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                  pathname === link.path ? 'text-primary font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>



          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:text-slate-900 focus:outline-none transition-colors border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname === link.path ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-slate-100 my-2 pt-2">
                <span className="px-4 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  Services
                </span>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block px-6 py-3 rounded-xl text-base font-medium transition-all ${
                      pathname === service.path ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-slate-100 my-2 pt-2">
                {otherLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      pathname === link.path ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 px-4">
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
