import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-white/[0.04] py-16 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-lg tracking-[0.25em] text-[var(--color-text)] font-semibold">MYTHOS</span>
              <span className="text-[var(--color-gold)] font-serif text-lg italic font-light">India</span>
            </div>
            <p className="font-serif text-lg italic text-[var(--color-muted)] leading-relaxed">
              Where ancient stories still breathe.
            </p>
            <p className="mt-4 text-xs text-[var(--color-muted)]/60 leading-relaxed max-w-sm">
              An educational exploration of Indian mythology and folklore. Content is presented with respect for diverse traditions and cultural contexts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="tracking-label text-[var(--color-muted)] mb-6">Navigate</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Deities', 'Epics', 'Heroes', 'Creatures', 'Folklore', 'Stories'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="tracking-label text-[var(--color-muted)] mb-6">About</h4>
            <p className="text-sm text-[var(--color-muted)]/70 leading-relaxed">
              MYTHOS India is designed as an interactive digital archive exploring the rich landscape of Indian mythology and folklore — from the great epics to regional traditions.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-gold mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]/40">
            © 2026 MYTHOS INDIA
          </p>
          <p className="text-xs text-[var(--color-muted)]/40 font-serif italic">
            Some stories are written. Others are remembered.
          </p>
        </div>
      </div>
    </footer>
  );
}
