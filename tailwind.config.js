/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark & Crimson Red Theme from reference image
        dark: {
          DEFAULT: '#0A0A0A',
          bg:      '#080808',
          card:    '#111111',
          surface: '#151515',
          border:  'rgba(255,255,255,0.08)',
        },
        crimson: {
          DEFAULT: '#DC2626',
          light:   '#EF4444',
          dark:    '#991B1B',
          deep:    '#7F1D1D',
          glow:    'rgba(220,38,38,0.4)',
        },
        // Legacy compat
        space: {
          dark:  '#0A0A0A',
          navy:  '#0F0F12',
          card:  '#121216',
          border:'rgba(255,255,255,0.08)',
        },
        primary: {
          blue:  '#DC2626',
          light: '#EF4444',
          glow:  'rgba(220,38,38,0.35)',
        },
        accent: {
          cyan:  '#EF4444',
          violet:'#F43F5E',
          emerald:'#34D399',
        },
        text: {
          primary:   '#F8FAFC',
          secondary: '#94A3B8',
          muted:     '#64748B',
        },
        midnight: '#0A0A0A',
        'violet-electric': '#DC2626',
        'blue-electric':   '#EF4444',
        'cyan-accent':     '#EF4444',
        softWhite:         '#F8FAFC',
        mutedText:         '#94A3B8',
        'indigo-deep':     '#111111',
      },
      fontFamily: {
        condensed:   ['"Bebas Neue"', 'Impact', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        sans:        ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display:     ['"Bebas Neue"', '"Manrope"', 'sans-serif'],
        mono:        ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-crimson':      'linear-gradient(135deg, #DC2626 0%, #7F1D1D 100%)',
        'gradient-crimson-soft': 'linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(127,29,29,0.15) 100%)',
        'gradient-dark':         'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
        'gradient-card':         'linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.98) 100%)',
      },
      boxShadow: {
        'glow-crimson': '0 0 45px rgba(220,38,38,0.45)',
        'glow-subtle':  '0 0 25px rgba(220,38,38,0.25)',
        'card':         '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
};
