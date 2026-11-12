import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Stars from './components/Stars';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlassShowcase3D from './components/GlassShowcase3D';
import Portfolio from './components/Portfolio';
import MusicSection from './components/MusicSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#080808] text-[#94A3B8] selection:bg-[#DC2626]/40 selection:text-white overflow-x-hidden">
        {/* Space & Crimson Ambient Stars Background */}
        <Stars />

        {/* Floating Glass Navigation Bar with Language & Audio Controls */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* Section 1: Hero — Editorial "PORTFOLIO" headline + Center Portrait with Overlapping Stroke Text + Left Typography + Right Stats */}
          <Hero />

          {/* Section 2: 3D Spatial Floating Glass Showcase (Images 2, 3, 4, 5 integration) */}
          <GlassShowcase3D />

          {/* Section 3: Portfolio — Selected Projects (5 Numbered Cards) + Education & Skills + Work Process + Crimson Quote */}
          <Portfolio />

          {/* Section 4: Music — Official Spotify Coding Soundtrack Player */}
          <MusicSection />

          {/* Section 5: Contact — Let's Work Together + Direct Channels + Desk Mockup Preview */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
