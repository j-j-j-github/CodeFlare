import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { stories } from '../data/stories';
import SectionHeader from '../components/ui/SectionHeader';

function StoryReader({ story }) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const chapter = story.chapters[currentChapter];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {story.chapters.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentChapter(i)}
            className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${
              i <= currentChapter ? 'bg-[var(--color-gold)]/40' : 'bg-white/[0.04]'
            }`}
            aria-label={`Go to chapter ${i + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentChapter}
          className="card-glass rounded-lg p-8 sm:p-12"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="tracking-label text-[var(--color-gold)]/40">CHAPTER {chapter.number}</span>
            <span className="text-xs text-[var(--color-muted)]/20">
              {String(currentChapter + 1).padStart(2, '0')} / {String(story.chapters.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl tracking-[0.08em] text-[var(--color-text)] mb-8">
            {chapter.title}
          </h3>

          <p className="text-[var(--color-text)]/70 leading-[2] text-sm sm:text-base font-light">
            {chapter.text}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.03]">
            <button
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="tracking-label text-[0.6rem] text-[var(--color-muted)]/30 hover:text-[var(--color-muted)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ← PREVIOUS
            </button>
            {currentChapter < story.chapters.length - 1 ? (
              <button
                onClick={() => setCurrentChapter(currentChapter + 1)}
                className="group flex items-center gap-2 px-6 py-2.5 bg-[var(--color-gold)]/[0.08] border border-[var(--color-gold)]/20 text-[var(--color-gold)] tracking-label text-[0.6rem] hover:bg-[var(--color-gold)]/[0.15] transition-all"
              >
                CONTINUE <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <span className="tracking-label text-[0.6rem] text-[var(--color-gold)]/40">END OF STORY</span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* End card */}
      {currentChapter === story.chapters.length - 1 && (
        <motion.div
          className="mt-8 p-8 rounded-lg border border-[var(--color-gold)]/[0.06] bg-[var(--color-bg-secondary)]/40 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="tracking-label text-[var(--color-muted)]/30 mb-4 block">WHAT THIS STORY EXPLORES</span>
          <div className="flex flex-wrap justify-center gap-3">
            {story.themes.map((theme) => (
              <span key={theme} className="px-4 py-2 text-xs tracking-wider uppercase text-[var(--color-gold)]/60 border border-[var(--color-gold)]/10 rounded-sm">
                {theme}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Stories() {
  const storyKeys = Object.keys(stories);
  const featuredStory = stories[storyKeys[0]];

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="THE STORYTELLER"
          title="ENTER A STORY"
          subtitle="Enter a story instead of simply reading about it."
        />

        {/* Story info */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="font-heading text-2xl tracking-[0.08em] text-[var(--color-gold)] mb-2">
            {featuredStory.title}
          </h3>
          <p className="font-serif text-lg italic text-[var(--color-muted)]/50 mb-2">
            {featuredStory.subtitle}
          </p>
          <p className="text-xs text-[var(--color-muted)]/30">{featuredStory.tradition}</p>
        </div>

        <StoryReader story={featuredStory} />
      </div>
    </div>
  );
}
