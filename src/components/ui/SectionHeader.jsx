import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col ${alignment} mb-16`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <span className="tracking-label text-[var(--color-gold)] mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] text-[var(--color-text)] glow-gold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--color-muted)] max-w-2xl text-base sm:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-8 w-12 h-[1px] bg-[var(--color-gold)]/30" />
    </motion.div>
  );
}
