import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { RotateCcw, ExternalLink, QrCode, ShieldCheck, Sparkles, MapPin, Mail, Github, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProfileCard3D() {
  const constraintRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Motion values for physical drag & swing
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for pendulum sway & elastic recovery
  const springConfig = { stiffness: 220, damping: 18, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // 3D Tilt angles driven by card position
  const rotateY = useTransform(springX, [-180, 180], [-22, 22]);
  const rotateX = useTransform(springY, [-180, 180], [16, -16]);

  // Lanyard rope angle follows swing
  const ropeAngle = useTransform(springX, [-180, 180], [-10, 10]);

  // Dynamic light reflection glare
  const glareX = useTransform(springX, [-180, 180], ['-20%', '120%']);
  const glareY = useTransform(springY, [-180, 180], ['-20%', '120%']);

  const handleCardClick = (e) => {
    // Prevent flip during heavy drag release
    if (Math.abs(x.get()) > 15 || Math.abs(y.get()) > 15) return;
    setIsFlipped(!isFlipped);
    setHasInteracted(true);
  };

  return (
    <div
      ref={constraintRef}
      className="relative flex justify-center items-start py-16 select-none perspective-1000 w-full"
      style={{ minHeight: 580 }}
    >
      {/* ========================================================
          LANYARD ROPE & HANGER MECHANISM
          ======================================================== */}
      <motion.div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        style={{ rotateZ: ropeAngle, transformOrigin: 'top center' }}
      >
        {/* Lanyard Fabric Strap with Polinema text */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            width: 24,
            height: 95,
            background:
              'repeating-linear-gradient(180deg, #080F20 0px, #080F20 8px, #2563EB 8px, #2563EB 12px, #38BDF8 12px, #38BDF8 14px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
          }}
        >
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 font-mono font-bold tracking-widest text-[7px] text-white/80"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            POLINEMA
          </div>
        </div>

        {/* Brushed Metal Clip */}
        <div
          className="rounded-sm border border-white/30 shadow-md -mt-0.5"
          style={{
            width: 32,
            height: 22,
            background: 'linear-gradient(180deg, #94A3B8 0%, #475569 50%, #1E293B 100%)',
          }}
        />

        {/* Steel Split Ring */}
        <div
          className="rounded-full border-2 border-slate-300 -mt-1 shadow-inner"
          style={{ width: 15, height: 15, background: 'transparent' }}
        />
      </motion.div>

      {/* ========================================================
          DRAGGABLE 3D ID CARD CONTAINER
          ======================================================== */}
      <motion.div
        drag
        dragConstraints={constraintRef}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 22 }}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ cursor: 'grabbing', scale: 0.99 }}
        onClick={handleCardClick}
        onDragStart={() => setHasInteracted(true)}
        className="lanyard-card relative mt-24 w-full max-w-[340px] sm:max-w-[360px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Flip Wrapper: controls the 180° rotation */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-3xl transform-style-3d shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(37,99,235,0.25)]"
        >
          {/* ====================================================
              FRONT FACE OF THE ID CARD
              ==================================================== */}
          <div
            className="relative w-full rounded-3xl overflow-hidden border border-white/15 backface-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(8, 15, 32, 0.96) 0%, rgba(3, 5, 11, 0.98) 100%)',
            }}
          >
            {/* Holographic light reflection */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-30 rounded-3xl opacity-30"
              style={{
                background:
                  'radial-gradient(circle at var(--glare-x,50%) var(--glare-y,30%), rgba(255,255,255,0.5), transparent 60%)',
                '--glare-x': glareX,
                '--glare-y': glareY,
              }}
            />

            <div className="p-5 sm:p-6">
              {/* Slot Punch Hole */}
              <div
                className="w-12 h-2 mx-auto mb-4 rounded-full border border-white/10"
                style={{
                  background: 'rgba(0,0,0,0.8)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)',
                }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center font-display font-black text-xs text-white shadow-sm">
                    MA
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs tracking-wider text-white">PORTFOLIO PASS</div>
                    <div className="font-mono text-[9px] text-[#94A3B8]">POLINEMA // TECH-2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563EB]/15 border border-[#38BDF8]/40 font-mono text-[10px] text-[#38BDF8] font-semibold">
                  <Sparkles size={10} />
                  <span>DEV#01</span>
                </div>
              </div>

              {/* Photo Frame with real alfin.jpg */}
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-white/15 mb-4 group"
                style={{ aspectRatio: '1/1.05', background: '#03050B' }}
              >
                {/* Futuristic corner brackets */}
                {['top-2 left-2 border-t-2 border-l-2', 'top-2 right-2 border-t-2 border-r-2',
                  'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map((cls, idx) => (
                  <div key={idx} className={`absolute w-3 h-3 border-[#38BDF8] z-10 ${cls}`} />
                ))}

                <img
                  src="/alfin.jpg"
                  alt="Moch Alfin Burhanudin"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  draggable={false}
                />

                {/* Verified Dev Badge */}
                <div
                  className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] text-white font-medium"
                  style={{
                    background: 'rgba(3, 5, 11, 0.85)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  VERIFIED DEVELOPER
                </div>

                {/* Flip Icon Hint */}
                <button
                  type="button"
                  className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-[#03050B]/80 border border-white/20 text-[#38BDF8] hover:text-white transition-colors"
                  title="Click to Flip Card"
                >
                  <RotateCcw size={12} />
                </button>
              </div>

              {/* Identity & Role */}
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    Moch Alfin Burhanudin
                  </h3>
                  <p className="font-mono text-xs font-semibold text-[#38BDF8] tracking-wide">
                    FULL STACK DEVELOPER
                  </p>
                </div>

                {/* Core Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Laravel', 'React.js', 'Flutter', 'ESP32 IoT'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md font-mono text-[10px] text-[#94A3B8] bg-white/[0.04] border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Barcode & Footer info */}
                <div className="flex items-center justify-between pt-3 border-t border-dashed border-white/10 mt-1">
                  <div className="flex items-center gap-0.5 h-4 opacity-50">
                    {[3, 1, 4, 2, 1, 5, 2, 3, 1, 4, 2, 1, 3].map((w, idx) => (
                      <span key={idx} className="h-full bg-white rounded-sm" style={{ width: w }} />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-[#94A3B8] tracking-wider">
                    CLICK TO FLIP ↺
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              BACK FACE OF THE ID CARD (3D Flipped)
              ==================================================== */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-[#38BDF8]/30 backface-hidden rotate-y-180 flex flex-col justify-between p-6"
            style={{
              background: 'linear-gradient(160deg, rgba(8, 15, 32, 0.98) 0%, rgba(3, 5, 11, 0.99) 100%)',
            }}
          >
            {/* Slot Punch */}
            <div
              className="w-12 h-2 mx-auto rounded-full border border-white/10"
              style={{ background: 'rgba(0,0,0,0.8)' }}
            />

            {/* Back Header */}
            <div className="text-center pt-2">
              <span className="font-mono text-[10px] text-[#38BDF8] tracking-widest uppercase">
                AUTHENTIC DEVELOPER CREDENTIALS
              </span>
              <h4 className="font-display font-bold text-base text-white mt-0.5">
                Moch. Alfin Burhanudin
              </h4>
              <p className="font-mono text-[11px] text-[#94A3B8]">D4 Teknik Informatika — POLINEMA</p>
            </div>

            {/* Scannable QR Code Box */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 my-1">
              <div className="p-2.5 rounded-xl bg-white shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                {/* SVG Real QR Code to portfolio URL */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-24 h-24 text-black"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer corner boxes */}
                  <rect x="0" y="0" width="28" height="28" rx="4" />
                  <rect x="4" y="4" width="20" height="20" fill="white" rx="2" />
                  <rect x="8" y="8" width="12" height="12" rx="2" />

                  <rect x="72" y="0" width="28" height="28" rx="4" />
                  <rect x="76" y="4" width="20" height="20" fill="white" rx="2" />
                  <rect x="80" y="8" width="12" height="12" rx="2" />

                  <rect x="0" y="72" width="28" height="28" rx="4" />
                  <rect x="4" y="76" width="20" height="20" fill="white" rx="2" />
                  <rect x="8" y="80" width="12" height="12" rx="2" />

                  {/* Matrix patterns */}
                  <rect x="36" y="8" width="6" height="6" />
                  <rect x="48" y="8" width="6" height="12" />
                  <rect x="60" y="14" width="6" height="6" />
                  <rect x="8" y="36" width="6" height="12" />
                  <rect x="20" y="42" width="6" height="6" />
                  <rect x="36" y="36" width="8" height="8" rx="1" />
                  <rect x="48" y="40" width="6" height="6" />
                  <rect x="60" y="36" width="10" height="6" />
                  <rect x="78" y="38" width="6" height="14" />
                  <rect x="36" y="52" width="12" height="6" />
                  <rect x="54" y="54" width="8" height="8" />
                  <rect x="70" y="58" width="6" height="6" />
                  <rect x="82" y="60" width="10" height="6" />
                  <rect x="36" y="68" width="6" height="10" />
                  <rect x="48" y="72" width="8" height="6" />
                  <rect x="62" y="72" width="6" height="12" />
                  <rect x="74" y="78" width="8" height="8" />
                  <rect x="88" y="76" width="6" height="6" />
                  <rect x="38" y="84" width="6" height="8" />
                  <rect x="50" y="86" width="8" height="6" />
                </svg>
              </div>
              <span className="font-mono text-[9px] text-[#38BDF8] mt-2 tracking-wider">
                SCAN TO OPEN PORTFOLIO
              </span>
            </div>

            {/* Direct Connect Details */}
            <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Globe size={13} className="text-[#38BDF8]" />
                <span className="text-white">www.alfari.my.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={13} className="text-[#38BDF8]" />
                <span>github.com/Alfinnn24</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#38BDF8]" />
                <span>alfin9827@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#38BDF8]" />
                <span>Malang, Jawa Timur</span>
              </div>
            </div>

            {/* Flip Back Button */}
            <div className="text-center pt-2 border-t border-white/10">
              <span className="font-mono text-[9px] text-[#38BDF8]/80 tracking-widest">
                CLICK TO FLIP FRONT ↺
              </span>
            </div>
          </div>
        </motion.div>

        {/* Interaction Hint: Fades out after interaction */}
        {!hasInteracted && (
          <motion.div
            className="absolute -bottom-8 left-0 right-0 text-center font-mono text-[10px] text-[#38BDF8]/80 tracking-widest pointer-events-none"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦ DRAG ME // CLICK TO FLIP ✦
          </motion.div>
        )}
      </motion.div>

      {/* Orbit Floating Badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl absolute top-28 left-[-16px] md:left-[-32px] z-30"
        style={{
          background: 'rgba(8, 15, 32, 0.88)',
          border: '1px solid rgba(37, 99, 235, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)',
          pointerEvents: 'none',
        }}
      >
        <span className="text-[#38BDF8] text-sm">⚡</span>
        <span className="text-xs font-mono font-semibold text-white">Full Stack & Mobile</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl absolute bottom-16 right-[-16px] md:right-[-32px] z-30"
        style={{
          background: 'rgba(8, 15, 32, 0.88)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(56, 189, 248, 0.25)',
          pointerEvents: 'none',
        }}
      >
        <span className="text-[#2563EB] text-sm">✦</span>
        <span className="text-xs font-mono font-semibold text-white">IoT & Smart Systems</span>
      </motion.div>
    </div>
  );
}
