import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ExternalLink, Music2, Disc3 } from 'lucide-react';
import { spotifyConfig } from '../data/portfolioData';
import { scaleIn, viewportOnce } from '../lib/motion';

export default function MusicSection() {
  return (
    <section id="music" className="py-20 relative overflow-hidden bg-[#0A0A0A]">
      <div className="section-divider mb-16" />

      {/* Subtle ambient crimson glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none opacity-15 filter blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #DC2626 0%, #1DB954 60%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold tracking-wide text-[#DC2626] bg-[#DC2626]/10 border border-[#DC2626]/30 mb-3">
            <Disc3 size={13} className="animate-spin" />
            <span>SOUNDTRACK FOR CODING</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-wide uppercase mb-3">
            {spotifyConfig.title}{' '}
            <span className="text-[#DC2626]">
              {spotifyConfig.subtitle}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            {spotifyConfig.description}
          </p>
        </div>

        {/* Spotify Glass Container */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative max-w-3xl mx-auto"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-[#111111] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Top Bar with Spotify Status */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center text-black font-black shadow-md">
                  <Music2 size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-2 uppercase tracking-wider">
                    Official Spotify Player
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-ping" />
                  </h4>
                  <p className="font-mono text-[10px] text-[#94A3B8]">Curated Lo-Fi &amp; Focus Flow</p>
                </div>
              </div>

              <a
                href={spotifyConfig.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs font-semibold text-white bg-[#1DB954] hover:bg-[#1ed760] transition-colors shadow-md"
              >
                <span>Listen on Spotify</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Spotify Embed Iframe Container */}
            <div className="w-full rounded-xl overflow-hidden bg-black/60 shadow-inner">
              <iframe
                title="Spotify Coding Playlist"
                style={{ borderRadius: '12px' }}
                src={spotifyConfig.playlistEmbedUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            {/* Bottom info banner */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/5 font-mono text-[10px] sm:text-[11px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Headphones size={13} className="text-[#DC2626]" />
                Best experienced with headphones
              </span>
              <span>No autoplay • User controlled</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
