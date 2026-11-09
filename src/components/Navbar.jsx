import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [activeSection, setActiveSection]   = useState('hero');
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioOn, setIsAudioOn]           = useState(false);
  const audioContextRef                     = useRef(null);
  const oscillatorRef                       = useRef(null);
  const gainNodeRef                         = useRef(null);

  const navItems = [
    { id: 'hero',      label: t.nav.home },
    { id: 'portfolio', label: t.nav.projects },
    { id: 'music',     label: t.nav.soundtrack },
    { id: 'contact',   label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 250;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems]);

  const toggleAudio = () => {
    if (!isAudioOn) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = audioContextRef.current || new AudioCtx();
        audioContextRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(136.1, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setIsAudioOn(true);
      } catch (e) {
        console.warn('Audio not supported or blocked:', e);
      }
    } else {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.8);
        setTimeout(() => {
          if (oscillatorRef.current) {
            try { oscillatorRef.current.stop(); } catch (_) {}
          }
        }, 800);
      }
      setIsAudioOn(false);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 md:px-8 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'pointer-events-auto w-full max-w-4xl rounded-full',
          'flex items-center justify-between',
          'transition-all duration-300',
          'bg-[#0D0D0D]/90 backdrop-blur-xl border border-white/10',
          isScrolled
            ? 'py-1.5 sm:py-2 px-3 sm:px-5 shadow-[0_12px_36px_rgba(0,0,0,0.8),0_0_20px_rgba(220,38,38,0.25)] border-[#DC2626]/40'
            : 'py-2 sm:py-2.5 px-3.5 sm:px-6 shadow-[0_6px_25px_rgba(0,0,0,0.6)]',
        ].join(' ')}
      >
        {/* Monogram */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none flex-shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DC2626] flex items-center justify-center font-condensed font-black text-xs sm:text-sm text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105 transition-transform">
            MA
          </div>
          <span className="font-display font-bold text-xs sm:text-sm text-white tracking-wider group-hover:text-[#DC2626] transition-colors uppercase">
            ALFIN<span className="text-[#DC2626]">.</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full p-1 border border-white/5">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={[
                  'relative px-3.5 lg:px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-colors cursor-pointer focus:outline-none uppercase tracking-wider',
                  active ? 'text-white' : 'text-[#94A3B8] hover:text-[#F8FAFC]',
                ].join(' ')}
              >
                {active && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full bg-[#DC2626]/20 border border-[#DC2626]/60 shadow-[0_0_15px_rgba(220,38,38,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Language Switcher + Audio + Status + Mobile Drawer */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher Button (ID / EN) */}
          <button
            onClick={toggleLang}
            className="px-2 sm:px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-[10px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            <Languages size={12} className="text-[#DC2626]" />
            <span className="tracking-wider">{lang === 'id' ? 'ID' : 'EN'}</span>
            <span className="text-[9px] text-[#94A3B8]">/</span>
            <span className="text-[9px] text-[#94A3B8]">{lang === 'id' ? 'EN' : 'ID'}</span>
          </button>

          {/* Sound Ambience Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-1.5 sm:p-2 rounded-full border transition-all text-xs flex items-center gap-1 ${
              isAudioOn
                ? 'bg-[#DC2626]/20 border-[#DC2626] text-[#EF4444] shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'bg-white/5 border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/10'
            }`}
            title={isAudioOn ? t.nav.soundOff : t.nav.soundOn}
            aria-label="Toggle Audio"
          >
            {isAudioOn ? (
              <Volume2 size={13} className="animate-pulse" />
            ) : (
              <VolumeX size={13} />
            )}
          </button>

          {/* Internship Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
            {t.nav.internBadge}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-[#F8FAFC] hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            className="pointer-events-auto absolute top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 bg-[#111111]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col gap-1.5 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item, idx) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={[
                    'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all font-mono',
                    active
                      ? 'bg-[#DC2626]/20 text-white border border-[#DC2626]/40'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5',
                  ].join(' ')}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#DC2626]">0{idx + 1}.</span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={15} className="opacity-60" />
                </button>
              );
            })}

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between px-2">
              <span className="font-mono text-xs text-[#94A3B8]">Language:</span>
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626]/15 border border-[#DC2626]/40 text-white font-mono text-xs font-bold"
              >
                {lang === 'id' ? '🇮🇩 Bahasa Indonesia' : '🇬🇧 English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
