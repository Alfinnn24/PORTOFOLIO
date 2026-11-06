import React, { useMemo } from 'react';

export default function Stars() {
  const stars = useMemo(() => {
    const arr = [];
    const totalStars = 160;
    for (let i = 0; i < totalStars; i++) {
      const seed = (i * 2654435761) >>> 0;
      const x = ((seed & 0xFFFF) / 0xFFFF) * 100;
      const y = (((seed >> 16) & 0xFFFF) / 0xFFFF) * 100;
      const size = (((seed >> 8) & 0xFF) / 0xFF) * 2.0 + 0.5;
      const duration = (((seed >> 4) & 0xFF) / 0xFF) * 4 + 2.5;
      const delay = (((seed >> 12) & 0xFF) / 0xFF) * 6;
      const layer = i % 2;
      arr.push({ x, y, size, duration, delay, layer, id: i });
    }
    return arr;
  }, []);

  const shootingStars = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: 10 + i * 20,
      width: 100 + i * 30,
      duration: 5 + i * 1.5,
      delay: i * 3.5,
    })), []);

  return (
    <>
      {/* Matte Dark Background with Crimson Ambient Lighting */}
      <div
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 25%, rgba(185, 28, 28, 0.18) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 40% at 85% 75%, rgba(153, 27, 27, 0.12) 0%, transparent 60%), ' +
            'linear-gradient(180deg, #0A0A0A 0%, #080808 50%, #050505 100%)',
        }}
      />

      {/* Subtle Crimson Ambient Glow */}
      <div
        className="fixed -z-25 pointer-events-none rounded-full filter blur-[120px] opacity-25"
        style={{
          width: '55vw', height: '40vw',
          top: '10%', left: '50%', transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)',
        }}
      />

      {/* Parallax Star Layers */}
      {[0, 1].map((layer) => (
        <div
          key={layer}
          className={`fixed inset-0 -z-20 pointer-events-none star-layer-${layer + 1}`}
        >
          {stars
            .filter((s) => s.layer === layer)
            .map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                  opacity: 0.6 - layer * 0.2,
                  '--duration': `${star.duration}s`,
                  '--delay': `${star.delay}s`,
                }}
              />
            ))}
        </div>
      ))}

      {/* Shooting Stars */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className="shooting-star"
            style={{
              top: `${s.top}%`,
              left: 0,
              width: s.width,
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
