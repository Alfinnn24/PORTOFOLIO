import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skillsData';
import { staggerContainer, staggerItem, scaleIn, viewportOnce } from '../lib/motion';

const categoryIcons = { frontend: Code, backend: Database, mobile_iot: Cpu, tools: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.div variants={staggerItem}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-medium tracking-wide text-cyan-accent mb-3"
            style={{ background:'rgba(37,139,255,0.1)', border:'1px solid rgba(37,139,255,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            02 // SKILLS &amp; EXPERTISE
          </motion.div>

          <motion.h2 variants={staggerItem}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-3"
          >
            Kemampuan &amp; Tumpukan Teknologi
          </motion.h2>

          <motion.p variants={staggerItem} className="text-mutedText text-base sm:text-lg max-w-2xl">
            Teknologi yang secara aktif saya gunakan dalam rekayasa web, mobile, dan integrasi perangkat keras.
          </motion.p>
        </motion.div>

        {/* 4 Staggered Skill Category Cards */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <motion.div
                key={cat.id}
                variants={scaleIn}
                className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
                style={{
                  background: 'linear-gradient(180deg,rgba(36,32,90,0.35) 0%,rgba(9,13,31,0.85) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                whileHover={{
                  borderColor: 'rgba(118,87,255,0.4)',
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Category header */}
                <div>
                  <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-white/10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-cyan-accent group-hover:scale-105 transition-transform"
                      style={{ background:'rgba(118,87,255,0.15)', border:'1px solid rgba(118,87,255,0.3)' }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">{cat.title}</h3>
                      <p className="font-mono text-xs text-mutedText">{cat.subtitle}</p>
                    </div>
                  </div>

                  {/* Skill chips — staggered within card */}
                  <motion.div
                    variants={staggerContainer(0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                  >
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={staggerItem}
                        className="p-3 rounded-xl flex flex-col justify-between transition-all"
                        style={{ background:'rgba(9,13,31,0.7)', border:'1px solid rgba(255,255,255,0.05)' }}
                        whileHover={{
                          borderColor: 'rgba(41,217,232,0.35)',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="font-medium text-xs sm:text-sm text-softWhite mb-1">{skill.name}</span>
                        <div className="flex items-center justify-between text-[10px] font-mono text-mutedText">
                          <span>{skill.tag}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent/60" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Card footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-mutedText">
                  <span>Stack Verified</span>
                  <span className="text-violet-electric font-semibold">Active Workflow</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
