import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 relative z-10 border-t border-white/10 bg-[#080808]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center font-condensed font-black text-xs text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              MA
            </div>
            <div>
              <span className="font-display font-bold text-sm text-white tracking-wider uppercase">
                {personalInfo.name}
              </span>
              <p className="text-[10px] font-mono text-[#94A3B8]">
                {t.footer.major}
              </p>
            </div>
          </div>

          {/* Socials Row */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.socials.github, Icon: Github, label: 'GitHub' },
              { href: personalInfo.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: personalInfo.socials.instagram, Icon: Instagram, label: 'Instagram' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#DC2626] transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] text-[#94A3B8] text-center sm:text-right">
              © {year} MOCH ALFIN BURHANUDIN ALQODRI. {t.footer.copyright}
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to Top"
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer focus:outline-none transition-colors text-[#94A3B8] hover:text-white bg-white/[0.04] border border-white/10 hover:border-[#DC2626]"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
