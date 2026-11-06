/* Shared scroll-reveal animation variants for all sections */

/* Fade up — single element */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* Container that staggers its children */
export const staggerContainer = (staggerTime = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren,
    },
  },
});

/* Staggered child — fade up */
export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

/* Staggered child — fade in from left */
export const staggerLeft = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* Staggered child — fade in from right */
export const staggerRight = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* Scale-in for cards */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

/* Shared viewport options — trigger once, margin offset */
export const viewportOnce = { once: true, margin: '-80px' };

