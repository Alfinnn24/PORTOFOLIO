import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-[#0A0A0A]">

      {/* ========================================================
          TOP HEADER ROW (INSIDE HERO)
          ======================================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl pt-2 sm:pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono tracking-wider">
          {/* Top Left: Profession details */}
          <div className="flex flex-col">
            <span className="text-[#DC2626] font-bold tracking-widest text-[10px] sm:text-[11px]">
              {t.hero.roleTop}
            </span>
            <span className="text-[#94A3B8] text-[9px] sm:text-[10px] tracking-wider">
              {t.hero.subTop}
            </span>
          </div>

          {/* Top Right: Availability */}
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#F8FAFC]">
            <span className="text-[#94A3B8]">{t.hero.availabilityTop}</span>
            <span className="text-[#DC2626] text-sm animate-pulse">✦</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN EDITORIAL HERO STAGE
          ======================================================== */}
      <div className="relative w-full flex-1 flex items-center justify-center my-auto py-4 sm:py-8">

        {/* 1. LAYER 1 (BEHIND PHOTO): SOLID DEEP CRIMSON TEXT "PORTFOLIO" */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none z-0 overflow-hidden w-full max-w-full px-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-condensed font-black tracking-widest uppercase text-center select-none"
            style={{
              fontSize: 'clamp(54px, 14.5vw, 240px)',
              letterSpacing: '0.06em',
              color: '#881337',
              textShadow: '0 0 60px rgba(185, 28, 28, 0.35)',
              lineHeight: 0.85,
            }}
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* 2. LAYER 3 (OVER PHOTO): STROKED & SEMI-TRANSPARENT TEXT "PORTFOLIO" */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none z-20 overflow-hidden w-full max-w-full px-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-condensed font-black tracking-widest uppercase text-center select-none"
            style={{
              fontSize: 'clamp(54px, 14.5vw, 240px)',
              letterSpacing: '0.06em',
              lineHeight: 0.85,
              WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.75)',
              color: 'rgba(220, 38, 38, 0.12)',
              mixBlendMode: 'screen',
            }}
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* 3. THREE-COLUMN EDITORIAL CONTENT (LEFT TEXT | CENTER PORTRAIT | RIGHT STATS) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-center">

            {/* ==================================================
                LEFT COLUMN: TYPOGRAPHY, BIO & CALL-TO-ACTIONS
                (On Phone/Tablet: Order 2, On Desktop: Order 1)
                ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-30 order-2 lg:order-1 pt-2 lg:pt-0"
            >
              {/* Handwritten script: "Hello, I'm" / "Halo, Saya" */}
              <span
                className="font-handwriting text-xl sm:text-2xl lg:text-3xl text-[#EF4444] font-bold tracking-wide mb-1"
                style={{ transform: 'rotate(-4deg)', display: 'inline-block' }}
              >
                {t.hero.greeting}
              </span>

              {/* Bold Condensed Tall Name */}
              <h2
                className="font-condensed font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-tight leading-[0.88] mb-3 sm:mb-4"
              >
                MOCH ALFIN<br />
                BURHANUDIN<br />
                ALQODRI
              </h2>

              {/* Role Title in Red */}
              <div className="font-mono text-xs sm:text-sm font-bold text-[#DC2626] uppercase tracking-wider mb-3 sm:mb-4">
                {t.hero.roleHeadline}
              </div>

              {/* Description Paragraph */}
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-md mb-5 sm:mb-6 font-normal">
                {t.hero.bio}
              </p>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white font-mono text-[10px] sm:text-[11px] mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span className="text-[#94A3B8]">{t.hero.badge}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => scrollTo('portfolio')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_8px_35px_rgba(220,38,38,0.6)] cursor-pointer"
                >
                  <span>{t.hero.btnProjects}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 text-[#F8FAFC] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare size={15} className="text-[#DC2626]" />
                  <span>{t.hero.btnContact}</span>
                </button>
              </div>
            </motion.div>

            {/* ==================================================
                CENTER COLUMN: PROMINENT PORTRAIT CUTOUT
                ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="md:col-span-2 lg:col-span-4 flex justify-center items-end relative z-10 order-1 lg:order-2 my-2 sm:my-0"
            >
              <div className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] mx-auto flex flex-col items-center">

                {/* Subtle Crimson Back-Light Behind Head */}
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full pointer-events-none filter blur-[60px] sm:blur-[80px] opacity-40 -z-10"
                  style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }}
                />

                {/* The Portrait with bottom dark gradient fade */}
                <div className="relative w-full overflow-hidden rounded-t-[24px] sm:rounded-t-[32px] portrait-cutout-container">
                  <img
                    src="/alfin.jpg"
                    alt="Moch Alfin Burhanudin Alqodri"
                    className="w-full h-auto object-cover object-top filter brightness-100 contrast-105"
                    style={{
                      maxHeight: '480px',
                    }}
                    draggable={false}
                  />

                  {/* Gradient shadow fade at the bottom to blend with background */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 sm:h-28 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, #0A0A0A 100%)',
                    }}
                  />
                </div>

                {/* Editorial verified pill under portrait */}
                <div className="absolute bottom-3 sm:bottom-4 z-30 flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-md font-mono text-[9px] sm:text-[11px] text-white shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  <span>{t.hero.verifiedBadge}</span>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                RIGHT COLUMN: INSPIRATIONAL QUOTE & STATS STACK
                ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-3 flex flex-col items-center lg:items-end justify-center z-30 order-3 text-center lg:text-right"
            >
              {/* Quote Spark Statement */}
              <div className="flex items-center lg:items-end gap-2 mb-6 sm:mb-10 max-w-[280px]">
                <span className="text-[#DC2626] text-base sm:text-lg flex-shrink-0">✦</span>
                <p className="text-xs sm:text-sm text-[#F8FAFC] font-medium leading-relaxed">
                  {t.hero.quoteSpark}
                </p>
              </div>

              {/* Metric Counter Stack (Horizontal on mobile/tablet, Vertical on desktop) */}
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-8 justify-between w-full lg:w-auto pt-4 border-t border-white/10 lg:border-t-0">
                {/* Stat 1 */}
                <div className="flex flex-col items-center lg:items-end">
                  <span className="font-condensed font-black text-3xl sm:text-4xl lg:text-5xl text-[#DC2626] leading-none mb-1">
                    {t.hero.stat1Num}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-[#94A3B8] uppercase tracking-wider">
                    {t.hero.stat1Label}
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center lg:items-end">
                  <span className="font-condensed font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-none mb-1">
                    {t.hero.stat2Num}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-[#94A3B8] uppercase tracking-wider">
                    {t.hero.stat2Label}
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center lg:items-end">
                  <span className="font-condensed font-black text-3xl sm:text-4xl lg:text-5xl text-[#DC2626] leading-none mb-1">
                    {t.hero.stat3Num}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-[#94A3B8] uppercase tracking-wider">
                    {t.hero.stat3Label}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
