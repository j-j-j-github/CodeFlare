import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { name: 'Explore', path: '/#explore' },
  { name: 'Deities', path: '/deities' },
  { name: 'Epics', path: '/epics' },
  { name: 'Heroes', path: '/heroes' },
  { name: 'Creatures', path: '/creatures' },
  { name: 'Folklore', path: '/folklore' },
  { name: 'Stories', path: '/stories' },
];

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-3 bg-[#080706]/85 backdrop-blur-xl border-b border-[var(--color-gold)]/[0.06]'
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-3">
            <span className="font-heading text-lg tracking-[0.25em] text-[var(--color-text)] font-semibold">
              MYTHOS
            </span>
            <span className="text-[var(--color-gold)] font-serif text-lg italic font-light">India</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative tracking-label transition-colors duration-300 ${
                    isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={onSearchOpen}
              className="text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              aria-label="Search the archive"
            >
              <Search size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[var(--color-text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080706]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="font-heading text-2xl tracking-[0.15em] text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={() => { setMobileOpen(false); onSearchOpen?.(); }}
              className="mt-4 tracking-label text-[var(--color-muted)] hover:text-[var(--color-gold)] flex items-center gap-2 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Search size={14} /> SEARCH
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
