import React, { useState } from 'react';
import { 
  Mail, Globe, Phone, MapPin, ArrowRight, Send, Check, AlertCircle, Copy 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { sendContactMessage } from '../lib/supabaseClient';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setError]  = useState('');
  const [copied, setCopied]   = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendContactMessage(form);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.65 },
          colors: ['#DC2626', '#EF4444', '#FFFFFF'],
        });
      } catch (_) {}
    } catch (err) {
      setError(t.contact.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative bg-[#0A0A0A] text-[#F8FAFC]">
      <div className="section-divider mb-12 sm:mb-16" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ====================================================
              LEFT: LET'S WORK TOGETHER (md:col-span-1, lg:col-span-4)
              ==================================================== */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-wider uppercase">
                {t.contact.title}
              </h2>
              <span className="text-[#DC2626] text-lg sm:text-xl">✦</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 sm:mb-8 max-w-sm">
              {t.contact.desc}
            </p>

            <a
              href="mailto:alfin9827@gmail.com?subject=Tawaran%20Magang%20/%20Kolaborasi%20Proyek"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1A1A1A] hover:bg-[#DC2626] border border-white/10 hover:border-[#DC2626] text-white font-mono text-[11px] sm:text-xs font-semibold tracking-wider transition-all group"
            >
              <ArrowRight size={14} className="text-[#DC2626] group-hover:text-white group-hover:translate-x-1 transition-all" />
              <span>{t.contact.availBtn}</span>
            </a>
          </div>

          {/* ====================================================
              MIDDLE: CONTACT DETAILS WITH ICONS (md:col-span-1, lg:col-span-4)
              ==================================================== */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-4 sm:gap-5 pt-1">
            {/* Email item */}
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Mail size={15} className="sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.emailLabel}</span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:alfin9827@gmail.com"
                    className="text-xs sm:text-sm text-white font-medium hover:text-[#DC2626] transition-colors truncate"
                  >
                    alfin9827@gmail.com
                  </a>
                  <button
                    onClick={handleCopy}
                    className="text-[10px] font-mono text-[#DC2626] hover:text-white cursor-pointer"
                    aria-label="Copy email"
                  >
                    {copied ? '✓' : <Copy size={12} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Website item */}
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Globe size={15} className="sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.domainLabel}</span>
                <a
                  href="https://www.alfari.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-white font-medium hover:text-[#DC2626] transition-colors"
                >
                  www.alfari.my.id
                </a>
              </div>
            </div>

            {/* Phone/WhatsApp item */}
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Phone size={15} className="sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.whatsappLabel}</span>
                <a
                  href="https://wa.me/6285748982798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-white font-medium hover:text-[#DC2626] transition-colors"
                >
                  +62 857 4898 2798
                </a>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <MapPin size={15} className="sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.locationLabel}</span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {t.contact.locationValue}
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT: MOCKUP DESK / SCREEN PREVIEW (IMAGE 1 REPLICA)
              Featuring: /alfin7.jpeg inside a glass screen frame
              ==================================================== */}
          <div className="md:col-span-2 lg:col-span-4 mt-2 sm:mt-0 flex flex-col gap-4">
            {/* Screen Mockup Container */}
            <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Screen Top Status Bar */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  <span className="font-mono text-[10px] text-[#94A3B8] ml-2">alfin-desk:~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
                  <span className="font-mono text-[9px] text-[#E50914] font-bold tracking-wider">CREATIVE DESK</span>
                </div>
              </div>

              {/* Mockup Screen Visual with /alfin7.jpeg */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black group-hover:border-[#E50914]/50 transition-all duration-500">
                <img
                  src="/alfin7.jpeg"
                  alt="Alfin Creative Studio Desk Preview"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle gradient gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none" />

                {/* Floating Bottom Pill */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#E50914] flex items-center justify-center text-white text-[10px] font-black">
                      M
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[10px] font-bold font-display uppercase tracking-wider">
                        MOCH ALFIN B.
                      </span>
                      <span className="text-[#94A3B8] text-[8px] font-mono">
                        Ready for Full-Stack & Creative Projects
                      </span>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono text-[9px] flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Fast Quick Contact Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  {t.contact.formTitle}
                </h3>
                <span className="font-mono text-[9px] text-[#E50914] font-semibold">DIRECT INBOX</span>
              </div>

              {success && (
                <div className="mb-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check size={14} className="flex-shrink-0" />
                  <span>{t.contact.successMsg}</span>
                </div>
              )}
              {errorMsg && (
                <div className="mb-3 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#E50914] focus:outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#E50914] focus:outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  rows={2}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3 py-2 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#E50914] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-[#E50914] hover:bg-[#B91C1C] text-white font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.contact.submitBtn}</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
