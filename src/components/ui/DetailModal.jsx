import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, item }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-[#080706]/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 sm:inset-8 md:inset-y-12 md:inset-x-[10%] lg:inset-x-[15%] z-[91] bg-[var(--color-bg-secondary)] border border-white/[0.04] rounded-lg overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-12 md:p-16">
              {/* Header */}
              <span className="tracking-label text-[var(--color-gold)] mb-3 block">{item.tradition || item.type}</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.06em] text-[var(--color-text)] mb-3">
                {item.name}
              </h2>
              {item.title && (
                <p className="font-serif text-xl italic text-[var(--color-gold)]/80 mb-8">
                  {item.title}
                </p>
              )}

              {/* Domain */}
              {item.domain && (
                <div className="mb-8">
                  <span className="tracking-label text-[var(--color-muted)]/50 block mb-2">Domain</span>
                  <p className="text-[var(--color-muted)] text-sm">{item.domain}</p>
                </div>
              )}

              <div className="divider-gold mb-8" />

              {/* Description */}
              <div className="mb-10">
                <h3 className="tracking-label text-[var(--color-muted)]/50 mb-4">The Story</h3>
                <p className="text-[var(--color-text)]/80 leading-relaxed text-base max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Associations */}
              {item.associations && item.associations.length > 0 && (
                <div className="mb-10">
                  <h3 className="tracking-label text-[var(--color-muted)]/50 mb-4">Associations</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.associations.map((assoc) => (
                      <span
                        key={assoc}
                        className="px-3 py-1.5 text-xs tracking-wide text-[var(--color-gold)]/80 border border-[var(--color-gold)]/10 rounded-sm bg-[var(--color-gold)]/[0.03]"
                      >
                        {assoc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stories */}
              {item.stories && item.stories.length > 0 && (
                <div className="mb-10">
                  <h3 className="tracking-label text-[var(--color-muted)]/50 mb-4">Associated Stories</h3>
                  <div className="space-y-2">
                    {item.stories.map((story) => (
                      <div
                        key={story}
                        className="flex items-center gap-3 text-sm text-[var(--color-text)]/60 hover:text-[var(--color-gold)] transition-colors cursor-default"
                      >
                        <ArrowRight size={12} className="text-[var(--color-gold)]/40" />
                        {story}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote */}
              {item.quote && (
                <div className="mt-12 border-l-2 border-[var(--color-gold)]/20 pl-6">
                  <p className="font-serif text-lg italic text-[var(--color-muted)]/60 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
