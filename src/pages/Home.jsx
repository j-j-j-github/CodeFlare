import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { discoverPool } from '../data/stories';
import { images } from '../data/images';
import SectionHeader from '../components/ui/SectionHeader';

/* ─── Floating Particles ─── */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-[var(--color-gold)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.05,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [0.05, 0.25, 0.05],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.15]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Banner Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ scale: imageScale }}
      >
        <img
          src="/images/hero_banner.jpg"
          alt="Indian Mythology Celestial Realm"
          className="w-full h-full object-cover object-center opacity-45"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/60 to-[var(--color-bg)]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/80 via-transparent to-[var(--color-bg)]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-bg)]/40 to-[var(--color-bg)]" />
      </motion.div>

      {/* Radial light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-gold)]/[0.08] blur-[140px]" />
      </div>

      {/* Ornamental circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[var(--color-gold)]/[0.06] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-[var(--color-gold)]/[0.08] pointer-events-none z-0" />

      <Particles />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--color-gold)]/[0.06] border border-[var(--color-gold)]/20 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
          <span className="tracking-label text-[var(--color-gold)] text-[0.65rem] sm:text-xs">
            INTERACTIVE DIGITAL ARCHIVE
          </span>
        </motion.div>

        {/* Punchy Main Heading Line (Without Repeating "MYTHOS") */}
        <motion.h1
          className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[var(--color-text)] max-w-4xl mx-auto leading-[1.25] mb-8 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          "Before history was written, India told its stories to the{' '}
          <span className="text-[var(--color-gold)] not-italic font-heading tracking-wider">
            stars.
          </span>"
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Supporting Line */}
        <motion.p
          className="text-xs sm:text-base text-[var(--color-muted)]/80 max-w-2xl mx-auto leading-relaxed font-light mb-12 tracking-wide"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Explore the gods, epics, legends, creatures and folk traditions woven into India's cultural imagination.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#explore"
            className="group flex items-center gap-3 px-8 py-4 bg-[var(--color-gold)]/[0.12] border border-[var(--color-gold)]/30 text-[var(--color-gold)] tracking-label text-[0.7rem] hover:bg-[var(--color-gold)] hover:text-[#11100D] hover:border-[var(--color-gold)] transition-all duration-500 rounded-sm shadow-lg shadow-[var(--color-gold)]/5"
          >
            ENTER THE ARCHIVE
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/stories"
            className="group flex items-center gap-2 px-8 py-4 text-[var(--color-muted)] border border-transparent hover:border-[var(--color-gold)]/20 tracking-label text-[0.7rem] hover:text-[var(--color-text)] transition-all duration-500 rounded-sm"
          >
            DISCOVER A STORY
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="tracking-label text-[var(--color-muted)]/30 text-[0.6rem]">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} className="text-[var(--color-gold)]/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Introduction ─── */
function Introduction() {
  return (
    <motion.section
      className="py-24 sm:py-32 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="tracking-label text-[var(--color-gold)]/60 mb-8 block">INDIA'S STORIES ARE MANY WORLDS</span>

        <p className="text-[var(--color-text)]/70 text-base sm:text-lg leading-[1.9] font-light mb-12">
          Indian mythology and folklore are not a single collection of stories — they are a vast, living landscape of traditions.
          From the Vedic hymns to the Puranic narratives, from the great epics of the Ramayana and Mahabharata to the regional folklore of villages,
          from oral traditions passed through generations to devotional poetry that still echoes in temples — these stories form the cultural bedrock of a civilization.
        </p>

        <div className="border-l-2 border-[var(--color-gold)]/15 pl-6 sm:pl-8 text-left max-w-xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl italic text-[var(--color-muted)]/70 leading-relaxed">
            "Some stories are written.
            <br />
            Others are remembered."
          </p>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Archive Explorer ─── */
const archiveCards = [
  {
    title: 'Deities',
    subtitle: 'Gods, goddesses and divine figures.',
    path: '/deities',
    number: '01',
    image: images.shiva
  },
  {
    title: 'Epics',
    subtitle: 'The Ramayana and Mahabharata.',
    path: '/epics',
    number: '02',
    image: images.mahabharata
  },
  {
    title: 'Heroes',
    subtitle: 'Warriors, sages and legendary figures.',
    path: '/heroes',
    number: '03',
    image: images.arjuna
  },
  {
    title: 'Creatures',
    subtitle: 'Nagas, Garuda, Rakshasas and other legendary beings.',
    path: '/creatures',
    number: '04',
    image: images.naga
  },
  {
    title: 'Folklore',
    subtitle: 'Regional tales, spirits, folk heroes and traditional beliefs.',
    path: '/folklore',
    number: '05',
    image: images.theyyam
  },
  {
    title: 'Legends',
    subtitle: 'Stories that have traveled through generations.',
    path: '/stories',
    number: '06',
    image: images.vetala
  },
];

function ArchiveExplorer() {
  return (
    <section id="explore" className="py-24 sm:py-32 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="EXPLORE THE ARCHIVE"
          title="CHOOSE A PATH"
          subtitle="Choose a path through India's stories."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {archiveCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link
                to={card.path}
                className="card-glass block rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[var(--color-bg)]">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.style.display = 'none'; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100D] via-[#11100D]/40 to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 badge-gold px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium tracking-widest">{card.number}</span>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-heading text-xl tracking-[0.1em] text-[var(--color-gold-bright)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed font-light mb-4">
                    {card.subtitle}
                  </p>
                  <div className="pt-3 border-t border-[var(--color-gold)]/10 flex items-center justify-between text-[var(--color-gold)] group-hover:text-[var(--color-gold-bright)] transition-all duration-300">
                    <span className="tracking-label text-[0.6rem] font-semibold">EXPLORE PATH</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Paths Section ─── */
function PathsSection() {
  const paths = [
    { title: 'The Path of the Gods', description: 'Explore deities and divine figures across Indian traditions.', link: '/deities', image: images.vishnu },
    { title: 'The Path of the Epics', description: 'Walk through the Ramayana and Mahabharata.', link: '/epics', image: images.ramayana },
    { title: 'The Path of the People', description: 'Explore folklore, regional traditions and folk legends.', link: '/folklore', image: images.chhau },
  ];

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader eyebrow="FOLLOW A PATH" title="PATHS THROUGH THE STORIES" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={path.link} className="card-glass block rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col justify-between">
                <div className="relative h-44 overflow-hidden bg-[var(--color-bg)]">
                  <img
                    src={path.image}
                    alt={path.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.style.display = 'none'; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100D] via-[#11100D]/30 to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 badge-gold px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium tracking-widest">PATH 0{i + 1}</span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-lg tracking-[0.08em] text-[var(--color-gold-bright)] mb-3 group-hover:text-[var(--color-gold)] transition-colors">{path.title}</h3>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed font-light mb-4">{path.description}</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-gold)]/10 flex items-center justify-between text-[var(--color-gold)] group-hover:text-[var(--color-gold-bright)] transition-all duration-300">
                    <span className="tracking-label text-[0.6rem] font-semibold">ENTER PATH</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Manuscript Section ─── */
function ManuscriptSection() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative p-10 sm:p-16 rounded-lg border border-[var(--color-gold)]/[0.06] bg-[var(--color-bg)]/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tracking-label text-[var(--color-gold)]/40 mb-8 block">FROM THE ARCHIVE</span>

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[var(--color-text)]/70 leading-[1.6] mb-10">
            In the beginning, there was neither existence nor non-existence. There was no sky, no heaven beyond the sky. What covered it? Where was it? In whose keeping?
          </p>

          <div className="divider-gold mb-6" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="tracking-label text-[var(--color-muted)]/30 block mb-1">TRADITION</span>
              <p className="text-sm text-[var(--color-muted)]/60">Nasadiya Sukta — Rig Veda, Mandala 10, Hymn 129</p>
            </div>
            <Link to="/epics" className="group flex items-center gap-2 tracking-label text-[0.6rem] text-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-colors">
              EXPLORE <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Interactive Discovery Drawer ─── */
function DiscoverySection() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="SERENDIPITY ARCHIVE"
          title="RANDOM DISCOVERY"
          subtitle="Click any card below to uncover a random piece of Indian mythology."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {discoverPool.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.name}
              className="card-glass p-6 rounded-lg cursor-pointer group hover:border-[var(--color-gold)]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="tracking-label text-[var(--color-gold)]/50 text-[0.6rem]">{item.category}</span>
                <Sparkles size={12} className="text-[var(--color-gold)]/30 group-hover:text-[var(--color-gold)]/80 transition-colors" />
              </div>
              <h4 className="font-heading text-lg tracking-[0.08em] text-[var(--color-text)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-[var(--color-muted)]/60 line-clamp-2 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="card-glass p-8 sm:p-12 rounded-xl max-w-lg w-full relative border-2 border-[var(--color-gold)]/30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="tracking-label text-[var(--color-gold)] text-xs mb-3 block">{selectedItem.category} • {selectedItem.tradition}</span>
                <h3 className="font-heading text-3xl text-[var(--color-gold)] mb-4">{selectedItem.name}</h3>
                <p className="text-base text-[var(--color-muted)] leading-relaxed font-light mb-8">{selectedItem.description}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-3 bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 text-[var(--color-gold)] tracking-label text-xs hover:bg-[var(--color-gold)]/25 transition-all"
                >
                  CLOSE DISCOVERY
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ArchiveExplorer />
      <PathsSection />
      <ManuscriptSection />
      <DiscoverySection />
    </div>
  );
}
