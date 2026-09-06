import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { deities } from '../../data/deities';
import { heroes } from '../../data/heroes';
import { creatures } from '../../data/creatures';
import { folklore } from '../../data/folklore';

function buildSearchIndex() {
  const index = [];
  deities.forEach(d => index.push({ name: d.name, category: 'Deity', tradition: d.tradition, description: d.description, link: `/deities` }));
  heroes.forEach(h => index.push({ name: h.name, category: 'Hero', tradition: h.tradition, description: h.description, link: `/heroes` }));
  creatures.forEach(c => index.push({ name: c.name, category: 'Creature', tradition: c.tradition, description: c.description, link: `/creatures` }));
  folklore.forEach(f => index.push({ name: f.name, category: 'Folklore', tradition: f.tradition || f.region, description: f.description, link: `/folklore` }));
  return index;
}

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const searchIndex = useRef(buildSearchIndex());

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = searchIndex.current.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.tradition && item.tradition.toLowerCase().includes(q))
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleResultClick = (link) => {
    navigate(link);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#080706]/95 backdrop-blur-2xl flex flex-col items-center pt-[15vh] px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            {/* Search Input */}
            <div className="relative mb-8">
              <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search gods, heroes, epics, creatures and stories..."
                className="w-full bg-transparent border-b border-[var(--color-gold)]/20 py-4 pl-8 pr-10 text-xl text-[var(--color-text)] placeholder:text-[var(--color-muted)]/40 font-light focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
                aria-label="Search the archive"
              />
              <button
                onClick={onClose}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results */}
            <div className="space-y-2">
              {results.map((item, i) => (
                <motion.button
                  key={`${item.name}-${i}`}
                  className="w-full text-left p-4 rounded-lg hover:bg-white/[0.03] transition-colors group flex items-start justify-between gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => handleResultClick(item.link)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[var(--color-text)] font-medium">{item.name}</span>
                      <span className="tracking-label text-[var(--color-gold)]/60 text-[0.6rem]">{item.category}</span>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]/60 truncate">{item.description}</p>
                  </div>
                  <ArrowRight size={14} className="text-[var(--color-gold)]/0 group-hover:text-[var(--color-gold)]/60 transition-all mt-1 flex-shrink-0" />
                </motion.button>
              ))}
            </div>

            {query && results.length === 0 && (
              <p className="text-center text-[var(--color-muted)]/40 mt-8 font-serif italic text-lg">
                No stories found for "{query}"
              </p>
            )}

            {!query && (
              <div className="text-center mt-8">
                <p className="text-[var(--color-muted)]/30 text-sm">
                  Try searching for "Krishna", "Naga", "Ramayana", or "Vetala"
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
