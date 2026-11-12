import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowRight, Minus, Square, X, ExternalLink, Activity, 
  TrendingUp, ShieldCheck, Award, Wifi, Sparkles, Terminal
} from 'lucide-react';

export default function HolographicProjectCard({ project, index, onSelect }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 60fps physics
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  // Map mouse coordinate to 3D rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-16deg', '16deg']);

  // Parallax offsets for floating hologram widget
  const widgetX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const widgetY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

  // Handle Mouse Movement on Card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Holographic Floating Widgets specific to each project
  const renderHoloWidget = () => {
    switch (project.id) {
      case 'monerize':
        return (
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400">
              <span className="flex items-center gap-1 font-bold">
                <TrendingUp size={11} className="animate-pulse" />
                CASHFLOW HUD
              </span>
              <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/20 border border-emerald-500/40">+24.8%</span>
            </div>
            <div className="text-white font-mono font-bold text-xs">
              IDR 24,850,000
            </div>
            {/* Animated mini equalizer / bars */}
            <div className="flex items-end gap-1 h-3 pt-0.5">
              <div className="w-1.5 h-2 bg-emerald-400 rounded-sm animate-pulse" />
              <div className="w-1.5 h-3 bg-emerald-300 rounded-sm animate-pulse delay-75" />
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm animate-pulse delay-150" />
              <div className="w-1.5 h-2.5 bg-emerald-400 rounded-sm animate-pulse delay-100" />
              <span className="text-[8px] font-mono text-[#94A3B8] ml-auto">REALTIME SYNC</span>
            </div>
          </div>
        );

      case 'operasional':
        return (
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400">
              <span className="flex items-center gap-1 font-bold">
                <Activity size={11} className="animate-pulse" />
                OPS SYSTEM
              </span>
              <span className="text-[8px] text-emerald-400">99.98% UP</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>CLUSTER #01 READY</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden mt-0.5">
              <div className="bg-gradient-to-r from-cyan-400 to-[#E50914] h-full w-[85%] rounded-full animate-pulse" />
            </div>
          </div>
        );

      case 'pkl-umumcsr':
        return (
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono text-purple-400">
              <span className="flex items-center gap-1 font-bold">
                <ShieldCheck size={11} className="animate-pulse" />
                CSR PORTAL
              </span>
              <span className="text-[8px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300">100% AUDIT</span>
            </div>
            <div className="text-white font-mono text-[11px] font-bold">
              142 MITRAS VERIFIED
            </div>
            <span className="text-[8px] font-mono text-purple-300/80">
              PUBLIC LOGISTICS • ACTIVE
            </span>
          </div>
        );

      case 'presma':
        return (
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono text-amber-400">
              <span className="flex items-center gap-1 font-bold">
                <Award size={11} className="animate-pulse" />
                ACHIEVEMENT
              </span>
              <span className="text-[8px] text-amber-300">HONOR ROLL</span>
            </div>
            <div className="text-white font-mono text-xs font-bold">
              500+ VERIFIED AWARDS
            </div>
            <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DEKANAT APPROVED</span>
            </div>
          </div>
        );

      case 'smartclass':
      default:
        return (
          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#FF1E27]">
              <span className="flex items-center gap-1 font-bold">
                <Wifi size={11} className="animate-pulse" />
                ESP32 IOT NODE
              </span>
              <span className="text-[8px] text-emerald-400">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-white font-mono text-[11px] font-bold">
              <span>ROOM 402 OCCUPIED</span>
              <span className="text-cyan-400 text-[10px]">24.5°C</span>
            </div>
            <span className="text-[8px] font-mono text-[#94A3B8]">
              PIR MOTION SENSOR DETECTED
            </span>
          </div>
        );
    }
  };

  const num = `0${index}`;

  return (
    <div 
      className="perspective-1200 w-full"
      style={{ perspective: '1200px' }}
    >
      <motion.article
        ref={cardRef}
        onClick={() => onSelect(project)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: (index - 1) * 0.1 }}
        className="group relative cursor-pointer rounded-2xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-black/80 backdrop-blur-xl border border-white/15 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25),0_0_60px_rgba(229,9,20,0.25)] select-none"
      >
        {/* ====================================================
            HOLOGRAPHIC WINDOW TOP TITLE BAR (- [] X)
            Matching the spatial hologram windows in reference
            ==================================================== */}
        <div 
          className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Left: Window Indicator & File Name */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.8)] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#F8FAFC] font-semibold tracking-wider">
              {project.id}.holo
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-[#94A3B8]/60">
              [3D_SPATIAL_NODE]
            </span>
          </div>

          {/* Right: Window Controls (- [] X) */}
          <div className="flex items-center gap-1.5 text-white/50 group-hover:text-cyan-300 transition-colors">
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
              <Minus size={11} />
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
              <Square size={9} />
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-rose-500/20 hover:text-rose-400 transition-colors">
              <X size={11} />
            </div>
          </div>
        </div>

        {/* ====================================================
            MAIN SCREEN CANVAS CONTAINER (TRANSLATE-Z 15PX)
            ==================================================== */}
        <div 
          className="relative w-full aspect-[16/10] bg-[#0c0c0c] rounded-xl overflow-hidden border border-white/10 mb-3 sm:mb-4 group-hover:border-cyan-400/40 transition-all duration-500"
          style={{ transform: 'translateZ(15px)' }}
        >
          {/* Project Screenshot */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Holographic Scanline sweeping across */}
          <div className="holo-scanline" />

          {/* Hologram Cyber Grid Lines Overlay */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Dark Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Hologram Cyber Corner HUD Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/30 font-mono text-[9px] text-cyan-300 font-semibold tracking-wider flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{project.badge || project.category}</span>
          </div>

          {/* ====================================================
              FLOATING 3D SUB-WINDOW HUD (IMAGE 1:1 REPLICA)
              Hovering in front of the project window in mid-air
              ==================================================== */}
          <motion.div
            style={{
              x: widgetX,
              y: widgetY,
              transform: isHovered ? 'translateZ(48px)' : 'translateZ(30px)',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 max-w-[210px] w-auto rounded-xl p-2.5 bg-black/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 group-hover:border-cyan-300"
          >
            {/* Sub-window header controls */}
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[8px] font-mono text-[#94A3B8]">
              <span className="text-[#38BDF8] font-bold">HOLO_WIDGET</span>
              <div className="flex items-center gap-1">
                <Minus size={8} />
                <Square size={7} />
                <X size={8} className="text-[#E50914]" />
              </div>
            </div>

            {/* Dynamic Project Widget Metrics */}
            {renderHoloWidget()}
          </motion.div>
        </div>

        {/* ====================================================
            CARD FOOTER: NUMBER + TITLE + SUBTITLE + 3D CTA
            ==================================================== */}
        <div 
          className="flex items-start justify-between pt-1"
          style={{ transform: 'translateZ(25px)' }}
        >
          <div className="flex items-start gap-3">
            {/* Red Number 01, 02, 03, 04, 05 with Glow */}
            <span className="font-condensed font-black text-2xl sm:text-3xl text-[#E50914] leading-none drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]">
              {num}
            </span>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span>{project.title}</span>
                <Sparkles size={12} className="text-[#E50914] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">
                {project.subtitle || project.category}
              </p>
            </div>
          </div>

          {/* Interactive Arrow Indicator */}
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] group-hover:bg-[#E50914] group-hover:border-[#E50914] group-hover:text-white transition-all duration-300 shadow-md flex-shrink-0 mt-0.5">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Specular Glare Effect on Mouse Move */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 70%)',
          }}
        />
      </motion.article>
    </div>
  );
}