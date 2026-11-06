import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Lightbulb, PenTool, Code2, Rocket, 
  X, Github, ExternalLink, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const workProcessSteps = [
    {
      num: '01',
      title: t.process.step1Title,
      desc: t.process.step1Desc,
      icon: Search,
    },
    {
      num: '02',
      title: t.process.step2Title,
      desc: t.process.step2Desc,
      icon: Lightbulb,
    },
    {
      num: '03',
      title: t.process.step3Title,
      desc: t.process.step3Desc,
      icon: PenTool,
    },
    {
      num: '04',
      title: t.process.step4Title,
      desc: t.process.step4Desc,
      icon: Code2,
    },
    {
      num: '05',
      title: t.process.step5Title,
      desc: t.process.step5Desc,
      icon: Rocket,
    },
  ];

  const skillBadges = [
    'REACT.JS', 'LARAVEL', 'TAILWIND CSS', 'FLUTTER',
    'PHP', 'MYSQL', 'ESP32 IOT', 'JAVASCRIPT',
    'DART', 'NODE.JS', 'GIT / GITHUB', 'REST APIS',
    'FIGMA', 'VITE', 'POSTMAN', 'SUPABASE'
  ];

  return (
    <section id="portfolio" className="py-20 relative bg-[#0A0A0A] text-[#F8FAFC]">
      <div className="section-divider mb-16" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">

        {/* ======================================================
            1. SELECTED PROJECTS ROW HEADER
            ====================================================== */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wider uppercase">
            {t.projects.sectionTitle}
          </h2>
          <button
            onClick={() => setSelectedProject(projectsData[0])}
            className="flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] hover:text-[#DC2626] transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>{t.projects.viewAll}</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* ======================================================
            2. THREE HORIZONTAL PROJECT CARDS (LIKE REFERENCE IMAGE)
            ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projectsData.slice(0, 3).map((project, idx) => {
            const num = `0${idx + 1}`;
            const badgeLabel = idx === 0 ? t.projects.academicBadge : idx === 1 ? t.projects.fintechBadge : t.projects.iotBadge;
            return (
              <motion.article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[16/10] bg-[#141414] rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-500 group-hover:border-[#DC2626]/60 group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 border border-white/10 font-mono text-[9px] text-white">
                    {badgeLabel}
                  </div>
                </div>

                {/* Card Footer: Number + Title + Subtitle + Arrow */}
                <div className="flex items-start justify-between pt-1">
                  <div className="flex items-start gap-3">
                    {/* Red Number 01, 02, 03 */}
                    <span className="font-condensed font-black text-2xl sm:text-3xl text-[#DC2626] leading-none">
                      {num}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-[#DC2626] transition-colors">
                        {project.id === 'presma' ? 'PBL PRESMA' : project.id === 'monerize' ? 'MONERIZE' : 'SMARTCLASS'}
                      </h3>
                      <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">
                        {badgeLabel}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <ArrowRight size={16} className="text-[#94A3B8] group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all mt-1" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ======================================================
            3. THREE-COLUMN SECTION:
               EDUCATION & SKILLS | WORK PROCESS | CRIMSON QUOTE BOX
            ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-white/10">

          {/* COLUMN 1: EDUCATION & SKILLS (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-white tracking-wider uppercase mb-6">
                {t.process.eduSkillsTitle}
              </h3>

              {/* Subsection: EDUCATION */}
              <div className="mb-8">
                <span className="font-mono text-xs font-bold text-[#DC2626] tracking-widest uppercase block mb-4">
                  {t.process.eduSub}
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start pb-3 border-b border-white/5">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        {t.process.edu1Degree}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        {t.process.edu1School}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#DC2626] font-semibold whitespace-nowrap ml-2">
                      {t.process.edu1Period}
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-3 border-b border-white/5">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        {t.process.edu2Degree}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        {t.process.edu2School}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#DC2626] font-semibold whitespace-nowrap ml-2">
                      {t.process.edu2Period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subsection: SKILLS */}
              <div>
                <span className="font-mono text-xs font-bold text-[#DC2626] tracking-widest uppercase block mb-4">
                  {t.process.skillsSub}
                </span>

                <div className="flex flex-wrap gap-2">
                  {skillBadges.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#141414] border border-white/10 text-[10px] font-mono text-[#F8FAFC] hover:border-[#DC2626] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: WORK PROCESS (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-display font-bold text-lg text-white tracking-wider uppercase mb-6">
              {t.process.processTitle}
            </h3>

            {/* Vertical Process Timeline */}
            <div className="relative flex flex-col gap-5 pl-2">
              {/* Connecting Line */}
              <div className="timeline-line" />

              {workProcessSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative flex items-start gap-4 z-10">
                    {/* Circle Node with Number & Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#111111] border-2 border-[#DC2626] flex items-center justify-center text-[#DC2626] flex-shrink-0 shadow-md">
                      <Icon size={16} />
                    </div>

                    {/* Step Content */}
                    <div className="pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#DC2626]">
                          {step.num}
                        </span>
                        <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#94A3B8] leading-relaxed mt-0.5 max-w-xs">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 3: CRIMSON QUOTE CARD (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              className="h-full rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #7F1D1D 0%, #450A0A 100%)',
                border: '1px solid rgba(220, 38, 38, 0.4)',
              }}
            >
              {/* Giant Quotation Mark */}
              <div>
                <span className="font-serif text-6xl sm:text-7xl leading-none text-[#EF4444] opacity-80 block mb-2 select-none">
                  “
                </span>

                <blockquote className="text-base sm:text-lg font-medium leading-relaxed mb-6 text-[#F8FAFC]">
                  {t.process.quote}
                </blockquote>
              </div>

              {/* Signature & Call-to-Action */}
              <div>
                {/* Handwritten Signature */}
                <div className="font-handwriting text-3xl sm:text-4xl text-white mb-6 select-none" style={{ transform: 'rotate(-5deg)' }}>
                  Alfin
                </div>

                <div className="pt-4 border-t border-white/20 flex items-center justify-between font-mono text-[11px] tracking-wider uppercase text-white/90">
                  <span>{t.process.quoteFooter}</span>
                  <span className="text-[#EF4444] text-base">✦</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
          PROJECT DETAILS MODAL (FULL INTERACTION PRESERVED)
          ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#111111] border border-white/20 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold text-[#DC2626] bg-[#DC2626]/15 border border-[#DC2626]/40 inline-block mb-3">
                  {selectedProject.badge}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs text-[#94A3B8]">{selectedProject.subtitle}</p>
              </div>

              <div className="w-full rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover max-h-[340px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-[#EF4444] font-display font-bold text-sm mb-2">
                    <AlertCircle size={16} />
                    <span>{t.projects.modal.problem}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-sm mb-2">
                    <CheckCircle2 size={16} />
                    <span>{t.projects.modal.solution}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-display font-bold text-sm text-white mb-3">
                  {t.projects.modal.features}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                      <CheckCircle2 size={14} className="text-[#DC2626] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-display font-bold text-sm text-white mb-2.5">
                  {t.projects.modal.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md font-mono text-xs text-white bg-white/[0.05] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-[#DC2626] transition-colors flex items-center gap-2"
                >
                  <Github size={15} />
                  <span>{t.projects.modal.sourceCode}</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>{t.projects.modal.liveDemo}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
