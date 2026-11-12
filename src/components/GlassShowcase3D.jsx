import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, CheckCircle2, Play, Pause, SkipBack, SkipForward, 
  Shuffle, Repeat, Volume2, Sparkles, Terminal, Code2, Layers, 
  ExternalLink, Heart, Send, Bookmark, MoreHorizontal, Radio
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GlassShowcase3D() {
  const { t } = useLanguage();

  // Spotify Player Simulated State
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(42); // percentage
  const [liked, setLiked] = useState(true);

  // Equalizer animation timer simulation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Code editor active tab state
  const [activeCodeTab, setActiveCodeTab] = useState('portfolio');

  // Tech Orbit Items (Image 3 Replica)
  const orbitTechs = [
    { name: 'React', color: '#61DAFB', angle: 0, icon: '⚛' },
    { name: 'Next.js', color: '#FFFFFF', angle: 51, icon: '▲' },
    { name: 'Node.js', color: '#68A063', angle: 102, icon: '⬡' },
    { name: 'Tailwind', color: '#38BDF8', angle: 154, icon: '≈' },
    { name: 'Python', color: '#FFD43B', angle: 205, icon: '🐍' },
    { name: 'Git', color: '#F05032', angle: 257, icon: '⌥' },
    { name: 'VS Code', color: '#007ACC', angle: 308, icon: '⌘' },
  ];

  return (
    <section id="showcase" className="py-20 relative bg-[#080808] text-[#F8FAFC] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #E50914 0%, #7F1D1D 50%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">

        {/* ======================================================
            SECTION HEADER: 3D SPATIAL INTERACTION
            ====================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider text-[#FF1E27] bg-[#E50914]/10 border border-[#E50914]/30 mb-4">
            <Radio size={13} className="animate-pulse" />
            <span>=== 3D FLOATING GLASS INTERACTION ===</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-wider uppercase mb-4">
            {t.showcase.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {t.showcase.subtitle}
          </p>
        </div>

        {/* ======================================================
            4 GLASSMORPHIC CARDS GRID (IMAGES 2, 3, 4, 5 INTEGRATION)
            ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* ====================================================
              WIDGET 1: GLASS INSTAGRAM ID CARD (IMAGE 2 REPLICA)
              Featuring: /alfin3.jpeg
              ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Gloss Flare */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <div>
              {/* Header: Instagram Profile Title */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5252] via-[#E50914] to-[#F59E0B] flex items-center justify-center text-white shadow-md">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-display font-bold text-sm text-white">
                      <span>alfin.dsgn</span>
                      <CheckCircle2 size={14} className="text-[#38BDF8] fill-[#38BDF8] text-black" />
                    </div>
                    <span className="font-mono text-[10px] text-[#94A3B8]">Creative Developer Pass</span>
                  </div>
                </div>
                <button className="text-[#94A3B8] hover:text-white transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* Profile Main Body */}
              <div className="flex items-center gap-5 sm:gap-6 mb-6">
                {/* Photo: /alfin3.jpeg with glowing story ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#E50914] via-[#F43F5E] to-[#FF9E0B] shadow-[0_0_20px_rgba(229,9,20,0.5)]">
                    <img
                      src="/alfin3.jpeg"
                      alt="Moch Alfin Profile"
                      className="w-full h-full object-cover rounded-full filter brightness-100"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#10B981] border-2 border-[#121212] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>

                {/* Follower Stats */}
                <div className="flex-1 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="font-display font-black text-base sm:text-lg text-white block">
                      {t.showcase.igCard.posts}
                    </span>
                    <span className="font-mono text-[10px] text-[#94A3B8] uppercase">Posts</span>
                  </div>
                  <div>
                    <span className="font-display font-black text-base sm:text-lg text-white block">
                      {t.showcase.igCard.followers}
                    </span>
                    <span className="font-mono text-[10px] text-[#94A3B8] uppercase">Followers</span>
                  </div>
                  <div>
                    <span className="font-display font-black text-base sm:text-lg text-white block">
                      {t.showcase.igCard.following}
                    </span>
                    <span className="font-mono text-[10px] text-[#94A3B8] uppercase">Following</span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="mb-5">
                <h4 className="font-display font-bold text-sm text-white">
                  Moch Alfin Burhanudin Alqodri
                </h4>
                <p className="font-mono text-[11px] text-[#DC2626] font-semibold mb-1">
                  {t.showcase.igCard.role}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {t.showcase.igCard.bio}
                </p>
              </div>

              {/* Story Highlights Circles */}
              <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
                {[
                  { label: 'Projects', icon: '🚀' },
                  { label: 'Coding', icon: '💻' },
                  { label: 'Setup', icon: '⚡' },
                  { label: 'Music', icon: '🎧' },
                ].map((st, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full p-0.5 border border-[#DC2626]/50 bg-[#161616] flex items-center justify-center text-sm shadow-sm hover:scale-105 transition-transform cursor-pointer">
                      <span>{st.icon}</span>
                    </div>
                    <span className="font-mono text-[9px] text-[#94A3B8]">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <a
                href="https://instagram.com/alfinburhanudinn"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-[#E50914] hover:bg-[#B91C1C] text-white font-mono text-xs font-bold tracking-wider text-center transition-all shadow-[0_4px_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-1.5"
              >
                <span>{t.showcase.igCard.followBtn}</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="mailto:alfin9827@gmail.com"
                className="py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>{t.showcase.igCard.messageBtn}</span>
                <Send size={12} />
              </a>
            </div>
          </motion.div>

          {/* ====================================================
              WIDGET 2: TECH STACK 3D ORBIT (IMAGE 3 REPLICA)
              Featuring: /alfin4.jpeg + Orbiting Glowing Badges
              ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Gloss Flare */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E50914]/20 border border-[#E50914] flex items-center justify-center text-[#E50914]">
                  <Layers size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {t.showcase.orbit.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#94A3B8]">Interactive Orbit Matrix</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full font-mono text-[9px] text-[#E50914] bg-[#E50914]/10 border border-[#E50914]/30 font-bold">
                14+ TECH
              </span>
            </div>

            {/* 3D Orbit Stage */}
            <div className="relative w-full h-[280px] sm:h-[300px] flex items-center justify-center my-auto overflow-hidden">
              {/* Outer Ring */}
              <div className="absolute w-[250px] sm:w-[280px] h-[250px] sm:h-[280px] rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]" />
              
              {/* Middle Glowing Ring */}
              <div className="absolute w-[180px] sm:w-[210px] h-[180px] sm:h-[210px] rounded-full border border-[#E50914]/30 shadow-[0_0_20px_rgba(229,9,20,0.15)] animate-[spin_25s_linear_infinite_reverse]" />

              {/* Center Portrait: /alfin4.jpeg */}
              <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#E50914] to-[#121212] shadow-[0_0_30px_rgba(229,9,20,0.6)] group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/alfin4.jpeg"
                  alt="Tech Orbit Center"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-2 py-0.5 rounded-full bg-[#0A0A0A] border border-[#E50914]/60 font-mono text-[8px] text-white tracking-widest uppercase">
                    {t.showcase.orbit.centerTag}
                  </span>
                </div>
              </div>

              {/* Orbiting Tech Badges */}
              {orbitTechs.map((tech, idx) => {
                // Calculate position around 360 circle
                const rad = (tech.angle * Math.PI) / 180;
                const distance = 115; // px from center
                const x = Math.cos(rad) * distance;
                const y = Math.sin(rad) * distance;

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/15 shadow-lg text-[10px] font-mono font-bold text-white hover:border-[#E50914] hover:scale-110 transition-all cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    animate={{
                      y: [y - 3, y + 3, y - 3],
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <span style={{ color: tech.color }}>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer Description */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
              <span>Synchronized Architecture</span>
              <span className="text-[#E50914] font-semibold">Continuous Evolution ✦</span>
            </div>
          </motion.div>

          {/* ====================================================
              WIDGET 3: GLASS SPOTIFY PLAYER WIDGET (IMAGE 4 REPLICA)
              Featuring: /alfin5.jpeg + Equalizer + Track Controls
              ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Gloss Flare */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div>
              {/* Header: Spotify Player Title */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center text-black font-black shadow-md">
                    <Volume2 size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                      {t.showcase.spotify.title}
                    </h3>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#1DB954]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-ping" />
                      <span>{t.showcase.spotify.nowPlaying}</span>
                    </div>
                  </div>
                </div>

                {/* Animated Equalizer Audio Bars */}
                <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-black/40 border border-white/10">
                  {[0.4, 0.8, 0.5, 0.9, 0.3, 0.7].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-1 bg-[#1DB954] rounded-full"
                      animate={{
                        height: isPlaying ? ['20%', '100%', '30%'] : '20%',
                      }}
                      transition={{
                        duration: 0.6 + i * 0.15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Album Art & Track Info */}
              <div className="flex items-center gap-4 sm:gap-5 mb-5">
                {/* Photo: /alfin5.jpeg as Album Art */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/15 shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/alfin5.jpeg"
                    alt="Spotify Track Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Track Details */}
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[9px] text-[#DC2626] uppercase tracking-widest block mb-0.5">
                    DEV SOUNDTRACK
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white truncate">
                    {t.showcase.spotify.track}
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] truncate mb-2">
                    {t.showcase.spotify.artist}
                  </p>
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-1 font-mono text-[10px] text-[#94A3B8] hover:text-[#DC2626] transition-colors"
                  >
                    <Heart size={13} className={liked ? 'text-[#DC2626] fill-[#DC2626]' : ''} />
                    <span>{liked ? 'Saved to Favorites' : 'Add to Playlist'}</span>
                  </button>
                </div>
              </div>

              {/* Interactive Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden cursor-pointer">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#1DB954] to-[#258BFF]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#94A3B8] mt-1.5">
                  <span>2:14</span>
                  <span>3:45</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <button className="text-[#94A3B8] hover:text-white transition-colors">
                  <Shuffle size={15} />
                </button>
                <button className="text-white hover:text-[#1DB954] transition-colors">
                  <SkipBack size={18} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-[#1DB954] hover:bg-[#1ed760] flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(29,185,84,0.5)] transition-transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                </button>
                <button className="text-white hover:text-[#1DB954] transition-colors">
                  <SkipForward size={18} />
                </button>
                <button className="text-[#94A3B8] hover:text-white transition-colors">
                  <Repeat size={15} />
                </button>
              </div>
            </div>

            {/* Playlist Queue Snippet */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
              <span>Next: Cyberpunk Ambient Flow</span>
              <span className="text-[#1DB954] font-semibold">Lossless Audio ✦</span>
            </div>
          </motion.div>

          {/* ====================================================
              WIDGET 4: FLOATING CODE & UI CANVAS (IMAGE 5 REPLICA)
              Featuring: Interactive Code Editor + /alfin6.jpeg Preview
              ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="rounded-3xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Gloss Flare */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div>
              {/* Window Header with macOS Dots */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="flex items-center gap-1 ml-3 font-mono text-[11px] text-white font-medium">
                    <Code2 size={13} className="text-[#DC2626]" />
                    <span>{activeCodeTab === 'portfolio' ? 'PortfolioApp.tsx' : 'Motion.gsap.ts'}</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveCodeTab('portfolio')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeCodeTab === 'portfolio' ? 'bg-[#DC2626] text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    App.tsx
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('motion')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeCodeTab === 'motion' ? 'bg-[#DC2626] text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    GSAP.ts
                  </button>
                </div>
              </div>

              {/* Code Editor Body + Floating Preview Window */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                {/* Syntax Highlighted Code Box (7 Cols) */}
                <div className="sm:col-span-7 p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 font-mono text-[10px] sm:text-[11px] leading-relaxed text-[#94A3B8] shadow-inner overflow-x-auto">
                  {activeCodeTab === 'portfolio' ? (
                    <>
                      <p><span className="text-[#F43F5E]">export const</span> <span className="text-[#38BDF8]">AlfinDeveloper</span> = {'{'}</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">name:</span> <span className="text-[#34D399]">"Moch Alfin"</span>,</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">role:</span> <span className="text-[#34D399]">"Full Stack Engineer"</span>,</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">stack:</span> [<span className="text-[#FFD43B]">"React"</span>, <span className="text-[#61DAFB]">"Next"</span>, <span className="text-[#DC2626]">"Laravel"</span>],</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">status:</span> <span className="text-[#34D399]">"Open for Magang"</span>,</p>
                      <p className="pl-3"><span className="text-[#38BDF8]">execute</span>: () =&gt; <span className="text-[#F43F5E]">shipProduct()</span></p>
                      <p>{'}'};</p>
                    </>
                  ) : (
                    <>
                      <p><span className="text-[#F43F5E]">import</span> {'{ gsap }'} <span className="text-[#F43F5E]">from</span> <span className="text-[#34D399]">'gsap'</span>;</p>
                      <p><span className="text-[#38BDF8]">gsap</span>.<span className="text-[#FFD43B]">to</span>(<span className="text-[#34D399]">".floating-glass"</span>, {'{'}</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">y:</span> -15,</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">rotationY:</span> 18,</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">duration:</span> 1.8,</p>
                      <p className="pl-3"><span className="text-[#94A3B8]">ease:</span> <span className="text-[#34D399]">"power2.out"</span></p>
                      <p>{'});'}</p>
                    </>
                  )}
                </div>

                {/* Floating Preview Screen: Featuring /alfin6.jpeg (5 Cols) */}
                <div className="sm:col-span-5 relative group/preview">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#DC2626]/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] bg-black">
                    <img
                      src="/alfin6.jpeg"
                      alt="UI Live Canvas Preview"
                      className="w-full h-full object-cover group-hover/preview:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[8px] text-[#34D399] flex items-center gap-1 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                      <span>LIVE PREVIEW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-[#34D399]" />
                {t.showcase.codeCanvas.status}
              </span>
              <span className="text-[#DC2626] font-semibold">TypeScript 5.0 • Clean Code</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

