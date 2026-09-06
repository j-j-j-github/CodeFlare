import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { epics } from '../data/epics';
import SectionHeader from '../components/ui/SectionHeader';

function EpicJourney({ epic }) {
  const [activeStage, setActiveStage] = useState(0);
  const stage = epic.stages[activeStage];

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Epic Header */}
      <div className="mb-10">
        <h3 className="font-heading text-3xl sm:text-4xl tracking-[0.08em] text-[var(--color-text)] mb-3">
          {epic.name}
        </h3>
        <p className="text-[var(--color-muted)]/60 text-sm max-w-2xl leading-relaxed font-light">
          {epic.description}
        </p>
      </div>

      {/* Stage Navigation - Horizontal scroll on mobile */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {epic.stages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStage(i)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-400 ${
              i === activeStage
                ? 'bg-[var(--color-gold)]/[0.08] border border-[var(--color-gold)]/20 text-[var(--color-gold)]'
                : 'border border-transparent text-[var(--color-muted)]/40 hover:text-[var(--color-muted)]'
            }`}
          >
            <span className="tracking-label text-[0.55rem]">{String(i + 1).padStart(2, '0')}</span>
            <span className="tracking-label text-[0.6rem]">{s.name}</span>
          </button>
        ))}
      </div>

      {/* Stage Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          className="card-glass rounded-lg p-8 sm:p-12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="tracking-label text-[var(--color-gold)]/40 mb-2 block">{stage.subtitle}</span>
              <h4 className="font-heading text-2xl tracking-[0.08em] text-[var(--color-text)]">{stage.name}</h4>
            </div>
            <span className="font-heading text-4xl text-[var(--color-gold)]/[0.08]">
              {String(activeStage + 1).padStart(2, '0')}
            </span>
          </div>

          <p className="text-[var(--color-text)]/70 leading-relaxed text-sm sm:text-base mb-8 max-w-2xl">
            {stage.description}
          </p>

          {/* Characters */}
          <div className="mb-6">
            <span className="tracking-label text-[var(--color-muted)]/30 block mb-3">Key Figures</span>
            <div className="flex flex-wrap gap-2">
              {stage.characters.map((char) => (
                <span
                  key={char}
                  className="px-3 py-1 text-xs text-[var(--color-text)]/50 border border-white/[0.04] rounded-sm bg-white/[0.01]"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Event */}
          <div>
            <span className="tracking-label text-[var(--color-muted)]/30 block mb-2">Central Event</span>
            <p className="text-sm text-[var(--color-gold)]/60 font-serif italic">{stage.event}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.03]">
            <button
              onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
              disabled={activeStage === 0}
              className="flex items-center gap-2 tracking-label text-[0.6rem] text-[var(--color-muted)]/30 hover:text-[var(--color-muted)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={12} /> PREVIOUS
            </button>
            <span className="text-xs text-[var(--color-muted)]/20">
              {activeStage + 1} / {epic.stages.length}
            </span>
            <button
              onClick={() => setActiveStage(Math.min(epic.stages.length - 1, activeStage + 1))}
              disabled={activeStage === epic.stages.length - 1}
              className="flex items-center gap-2 tracking-label text-[0.6rem] text-[var(--color-muted)]/30 hover:text-[var(--color-muted)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              NEXT <ChevronRight size={12} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function Epics() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="THE GREAT EPICS"
          title="EPICS"
          subtitle="Two monumental literary traditions that have shaped India's moral, philosophical, and cultural landscape for millennia."
        />

        <EpicJourney epic={epics.ramayana} />
        <div className="divider-gold my-16" />
        <EpicJourney epic={epics.mahabharata} />
      </div>
    </div>
  );
}
