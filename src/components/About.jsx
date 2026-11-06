import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Briefcase, Sparkles, CheckCircle2, 
  Eye, EyeOff, Boxes, Cpu, Palette, Headphones, ExternalLink 
} from 'lucide-react';
import { personalInfo, educationData, experienceData, personalInterests } from '../data/portfolioData';
import { staggerContainer, staggerItem, scaleIn, viewportOnce } from '../lib/motion';

const interestIconMap = {
  Boxes, Cpu, Palette, Headphones
};

export default function About() {
  const [spiderMaskActive, setSpiderMaskActive] = useState(true);
  const [activeTab, setActiveTab] = useState('education'); // 'education' | 'experience' | 'interests'

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wide text-[#38BDF8] mb-4"
            style={{
              background: 'rgba(37, 99, 235, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            01 // ABOUT ME
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">Moch Alfin Burhanudin</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-[#94A3B8] text-base sm:text-lg leading-relaxed"
          >
            {personalInfo.aboutDescription}
          </motion.p>
        </motion.div>

        {/* 3-Part Editorial Grid: Profile Narrative (Left) | Spider-Man Portrait (Center) | Info Hub (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* ====================================================
              LEFT: Narrative & Principles (4 Cols)
              ==================================================== */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1"
          >
            {/* Story Card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-3xl bg-[#080F20]/75 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider block mb-2">
                CORE PHILOSOPHY
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Crafting Code with Purpose & Precision
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                Sebagai mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang, fokus saya berpusat pada perancangan arsitektur perangkat lunak yang andal, efisien, dan memiliki user experience memukau.
              </p>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                Menghubungkan logika database backend, antarmuka frontend interaktif, hingga mikrokontroler sensor IoT adalah passion yang selalu saya asah setiap hari.
              </p>

              <div className="flex flex-col gap-2 pt-3 border-t border-white/10 text-xs font-medium text-[#F8FAFC]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#38BDF8]" />
                  <span>Clean & Scalable Software Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#38BDF8]" />
                  <span>Interactive Micro-Animations & 3D Experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#38BDF8]" />
                  <span>End-to-End Problem Solving & Team Collaboration</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stat Highlights */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-3"
            >
              <div className="p-4 rounded-2xl bg-[#080F20]/60 border border-white/10 text-center">
                <span className="font-display font-black text-2xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-[#38BDF8]">
                  3+
                </span>
                <p className="font-mono text-[11px] text-[#94A3B8] mt-0.5">Real-World Projects</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#080F20]/60 border border-white/10 text-center">
                <span className="font-display font-black text-2xl text-white bg-clip-text text-transparent bg-gradient-to-r from-[#38BDF8] to-[#2563EB]">
                  14+
                </span>
                <p className="font-mono text-[11px] text-[#94A3B8] mt-0.5">Tech & Frameworks</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ====================================================
              CENTER: LARGE PORTRAIT WITH SPIDER-MAN MASK EFFECT (4 Cols)
              ==================================================== */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="cutout-container relative w-full max-w-[340px] sm:max-w-[360px] aspect-[1/1.25] rounded-3xl p-3">
              {/* Outer Glow Halo */}
              <div className="cutout-frame" />

              {/* Spider-Man Web HUD overlay on outer frame */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none z-10 opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 35%, transparent 20%, rgba(37,99,235,0.4) 21%, transparent 22%), ' +
                    'radial-gradient(circle at 50% 35%, transparent 45%, rgba(56,189,248,0.3) 46%, transparent 47%), ' +
                    'radial-gradient(circle at 50% 35%, transparent 70%, rgba(37,99,235,0.2) 71%, transparent 72%)',
                }}
              />

              {/* The Real Portrait Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#03050B]">
                <img
                  src="/alfin.jpg"
                  alt="Moch Alfin Burhanudin"
                  className="cutout-photo w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  draggable={false}
                />

                {/* ==============================================
                    SPIDER-MAN MASK EFFECT OVERLAY
                    ============================================== */}
                {spiderMaskActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 pointer-events-none z-20"
                  >
                    {/* Futuristic Red-Blue Spider-Man Web Contours & Glowing Ocular Lenses */}
                    <svg
                      viewBox="0 0 300 400"
                      className="w-full h-full absolute inset-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Web Radial Lines converging towards nose bridge (150, 160) */}
                      <g stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3">
                        <line x1="150" y1="160" x2="80" y2="40" />
                        <line x1="150" y1="160" x2="150" y2="20" />
                        <line x1="150" y1="160" x2="220" y2="40" />
                        <line x1="150" y1="160" x2="60" y2="120" />
                        <line x1="150" y1="160" x2="240" y2="120" />
                        <line x1="150" y1="160" x2="70" y2="230" />
                        <line x1="150" y1="160" x2="230" y2="230" />
                        <line x1="150" y1="160" x2="150" y2="280" />
                      </g>

                      {/* Concentric Spider Web Arcs */}
                      <ellipse cx="150" cy="160" rx="35" ry="25" stroke="rgba(37, 99, 235, 0.6)" strokeWidth="1.5" />
                      <ellipse cx="150" cy="160" rx="65" ry="50" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.2" />
                      <ellipse cx="150" cy="160" rx="95" ry="75" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1" />

                      {/* Left Spider Ocular Eye (Geometric & Glowing White-Cyan) */}
                      <path
                        d="M 100 135 C 115 115, 140 120, 142 142 C 142 155, 128 165, 105 160 C 95 158, 92 145, 100 135 Z"
                        fill="rgba(255, 255, 255, 0.88)"
                        stroke="#03050B"
                        strokeWidth="4"
                        filter="drop-shadow(0 0 10px rgba(56,189,248,0.9))"
                      />
                      {/* Left Eye Black Tech Rim */}
                      <path
                        d="M 98 133 C 115 112, 142 118, 145 142 C 145 158, 128 168, 103 162 Z"
                        fill="none"
                        stroke="rgba(37, 99, 235, 0.9)"
                        strokeWidth="2"
                      />

                      {/* Right Spider Ocular Eye */}
                      <path
                        d="M 200 135 C 185 115, 160 120, 158 142 C 158 155, 172 165, 195 160 C 205 158, 208 145, 200 135 Z"
                        fill="rgba(255, 255, 255, 0.88)"
                        stroke="#03050B"
                        strokeWidth="4"
                        filter="drop-shadow(0 0 10px rgba(56,189,248,0.9))"
                      />
                      {/* Right Eye Black Tech Rim */}
                      <path
                        d="M 202 133 C 185 112, 158 118, 155 142 C 155 158, 172 168, 197 162 Z"
                        fill="none"
                        stroke="rgba(37, 99, 235, 0.9)"
                        strokeWidth="2"
                      />

                      {/* Spider Chest Emblem on bottom */}
                      <g transform="translate(150, 310) scale(0.7)" filter="drop-shadow(0 0 8px rgba(56,189,248,0.7))">
                        <ellipse cx="0" cy="0" rx="6" ry="12" fill="#38BDF8" />
                        <path d="M -5 -3 L -24 -22 M -6 0 L -28 -5 M -6 4 L -25 15 M -4 8 L -20 28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 5 -3 L 24 -22 M 6 0 L 28 -5 M 6 4 L 25 15 M 4 8 L 20 28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* Bottom Overlay Info Tag */}
                <div
                  className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between px-3 py-1.5 rounded-xl font-mono text-xs text-white"
                  style={{
                    background: 'rgba(8, 15, 32, 0.88)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="flex items-center gap-1.5 font-semibold text-[#38BDF8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    MOCH ALFIN
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">POLINEMA // D4 TI</span>
                </div>
              </div>

              {/* Toggle Spider-Man Mask Button */}
              <button
                type="button"
                onClick={() => setSpiderMaskActive(!spiderMaskActive)}
                className="mt-4 px-4 py-2 rounded-full font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border"
                style={{
                  background: spiderMaskActive
                    ? 'rgba(37, 99, 235, 0.25)'
                    : 'rgba(255, 255, 255, 0.05)',
                  borderColor: spiderMaskActive ? '#38BDF8' : 'rgba(255,255,255,0.15)',
                  color: spiderMaskActive ? '#38BDF8' : '#94A3B8',
                  boxShadow: spiderMaskActive ? '0 0 20px rgba(56,189,248,0.4)' : 'none',
                }}
              >
                {spiderMaskActive ? (
                  <>
                    <Eye size={14} className="text-[#38BDF8]" />
                    <span>SPIDER MASK: ACTIVE</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={14} />
                    <span>SPIDER MASK: OFF</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* ====================================================
              RIGHT: Interactive Information Hub (Education, Experience, Interests) (4 Cols)
              ==================================================== */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-4 flex flex-col gap-4 order-3"
          >
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10">
              {[
                { id: 'education',  label: 'Education',  Icon: GraduationCap },
                { id: 'experience', label: 'Experience', Icon: Briefcase },
                { id: 'interests',  label: 'Interests',  Icon: Sparkles },
              ].map(({ id, label, Icon }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-[#2563EB] text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[360px]">
              {/* TAB 1: EDUCATION */}
              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  {educationData.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-[#080F20]/75 backdrop-blur-xl border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider block">
                            {edu.period} • {edu.status}
                          </span>
                          <h4 className="font-display font-bold text-base text-white">
                            {edu.degree}
                          </h4>
                        </div>
                      </div>
                      <p className="text-white font-medium text-xs mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {edu.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2.5 py-1 rounded-md font-mono text-[10px] text-[#F8FAFC] bg-white/[0.04] border border-white/10"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 2: EXPERIENCE */}
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  {experienceData.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#080F20]/75 backdrop-blur-xl border border-white/10 hover:border-[#38BDF8]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display font-bold text-sm text-white">{exp.role}</h4>
                        <span className="font-mono text-[10px] text-[#38BDF8]">{exp.period}</span>
                      </div>
                      <p className="text-[11px] text-[#94A3B8] font-medium mb-1.5">{exp.organization}</p>
                      <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-2.5">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[9px] font-mono text-white bg-white/[0.05] border border-white/[0.08]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 3: PERSONAL INTERESTS */}
              {activeTab === 'interests' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
                >
                  {personalInterests.map((item, idx) => {
                    const Icon = interestIconMap[item.icon] || Sparkles;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#080F20]/75 backdrop-blur-xl border border-white/10 flex items-start gap-3 hover:border-[#38BDF8]/40 transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#2563EB]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] flex-shrink-0 mt-0.5">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-white mb-0.5">
                            {item.label}
                          </h4>
                          <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
