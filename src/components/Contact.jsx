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
    <section id="contact" className="py-20 relative bg-[#0A0A0A] text-[#F8FAFC]">
      <div className="section-divider mb-16" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ====================================================
              LEFT: LET'S WORK TOGETHER (4 Cols)
              ==================================================== */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wider uppercase">
                {t.contact.title}
              </h2>
              <span className="text-[#DC2626] text-xl">✦</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8 max-w-sm">
              {t.contact.desc}
            </p>

            <a
              href="mailto:alfin9827@gmail.com?subject=Tawaran%20Magang%20/%20Kolaborasi%20Proyek"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#DC2626] border border-white/10 hover:border-[#DC2626] text-white font-mono text-xs font-semibold tracking-wider transition-all group"
            >
              <ArrowRight size={14} className="text-[#DC2626] group-hover:text-white group-hover:translate-x-1 transition-all" />
              <span>{t.contact.availBtn}</span>
            </a>
          </div>

          {/* ====================================================
              MIDDLE: CONTACT DETAILS WITH ICONS (4 Cols)
              ==================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-5 pt-1">
            {/* Email item */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Mail size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.emailLabel}</span>
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
                  >
                    {copied ? '✓' : <Copy size={12} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Website item */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Globe size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.domainLabel}</span>
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
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.whatsappLabel}</span>
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
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#94A3B8] group-hover:text-[#DC2626] group-hover:border-[#DC2626] transition-colors flex-shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">{t.contact.locationLabel}</span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {t.contact.locationValue}
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT: FAST CONTACT FORM (4 Cols)
              ==================================================== */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  {t.contact.formTitle}
                </h3>
                <span className="font-mono text-[10px] text-[#DC2626]">ONLINE</span>
              </div>

              {success && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check size={14} />
                  <span>{t.contact.successMsg}</span>
                </div>
              )}
              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#DC2626] focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#DC2626] focus:outline-none"
                />

                <textarea
                  name="message"
                  rows={3}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white placeholder-[#94A3B8]/40 text-xs focus:border-[#DC2626] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
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
