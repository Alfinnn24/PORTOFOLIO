import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { staggerItem, scaleIn } from '../lib/motion';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <motion.article
      variants={scaleIn}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl group"
      style={{
        background: 'linear-gradient(180deg,rgba(36,32,90,0.35) 0%,rgba(9,13,31,0.85) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{
        borderColor: 'rgba(118,87,255,0.4)',
        y: -6,
        boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(118,87,255,0.15)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Media — 7 cols */}
      <div
        className={`lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] bg-midnight overflow-hidden flex items-center justify-center ${
          isEven ? 'lg:order-2' : ''
        }`}
      >
        <span
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full font-mono text-xs font-semibold text-cyan-accent"
          style={{ background:'rgba(9,13,31,0.8)', border:'1px solid rgba(255,255,255,0.15)', backdropFilter:'blur(8px)' }}
        >
          {project.badge}
        </span>

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'linear-gradient(180deg,transparent 40%,rgba(9,13,31,0.85) 100%)' }}
        />
      </div>

      {/* Content — 5 cols */}
      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
        <span className="font-mono text-xs font-semibold text-violet-electric uppercase tracking-wider mb-2">
          {project.subtitle}
        </span>

        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="text-mutedText text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md font-mono text-xs text-softWhite"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors hover:border-violet-electric"
            style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.14)' }}
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
            style={{
              background: 'linear-gradient(135deg,#7657FF,#258BFF)',
              boxShadow: '0 4px 15px rgba(118,87,255,0.35)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 25px rgba(118,87,255,0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(118,87,255,0.35)'; }}
          >
            <span>Live Demo</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
