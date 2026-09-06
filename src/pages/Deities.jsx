import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { deities } from '../data/deities';
import SectionHeader from '../components/ui/SectionHeader';
import DetailModal from '../components/ui/DetailModal';

function DeityCard({ deity, index, onClick }) {
  return (
    <motion.div
      className="card-glass rounded-xl overflow-hidden cursor-pointer group flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onClick={() => onClick(deity)}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${deity.name}`}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(deity); }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[var(--color-bg-secondary)]">
        <img
          src={deity.image}
          alt={deity.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100D] via-[#11100D]/30 to-transparent pointer-events-none" />
        
        {/* Domain Badge */}
        <span className="absolute top-3 right-3 badge-gold px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium tracking-wider uppercase">
          {deity.domain || 'DEITY'}
        </span>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-heading text-xl tracking-[0.08em] text-[var(--color-gold-bright)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
            {deity.name}
          </h3>
          <p className="font-serif text-sm italic text-[var(--color-muted)] font-normal">
            {deity.title}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-3 mb-4 font-light">
          {deity.description}
        </p>

        <div className="pt-3 border-t border-[var(--color-gold)]/10 flex items-center justify-between text-[var(--color-gold)] group-hover:text-[var(--color-gold-bright)] transition-all duration-300">
          <span className="tracking-label text-[0.6rem] font-semibold">EXPLORE TRADITION</span>
          <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Deities() {
  const [selectedDeity, setSelectedDeity] = useState(null);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="DIVINE REALMS"
          title="DEITIES"
          subtitle="Explore the gods, goddesses, and supreme divine aspects across Vedic, Puranic, and regional traditions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {deities.map((deity, index) => (
            <DeityCard
              key={deity.id}
              deity={deity}
              index={index}
              onClick={setSelectedDeity}
            />
          ))}
        </div>
      </div>

      {selectedDeity && (
        <DetailModal
          item={selectedDeity}
          onClose={() => setSelectedDeity(null)}
        />
      )}
    </div>
  );
}
