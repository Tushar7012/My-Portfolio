import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Floating gradient orbs for background ambiance
const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Purple orb - top right */}
    <div
      className="orb orb-purple w-[500px] h-[500px] -top-20 -right-20"
      style={{ animationDelay: '0s' }}
    />
    {/* Cyan orb - bottom left */}
    <div
      className="orb orb-cyan w-[400px] h-[400px] bottom-20 -left-40"
      style={{ animationDelay: '-5s' }}
    />
    {/* Magenta orb - center right */}
    <div
      className="orb orb-magenta w-[300px] h-[300px] top-1/2 right-10"
      style={{ animationDelay: '-10s' }}
    />
    {/* Small purple orb - center left */}
    <div
      className="orb orb-purple w-[200px] h-[200px] top-1/3 left-20"
      style={{ animationDelay: '-7s', opacity: 0.3 }}
    />
  </div>
);

// Subtle grid pattern overlay
const GridOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
    style={{
      backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }}
  />
);

function App() {
  return (
    <div className="relative min-h-screen animated-gradient-bg">
      {/* Background effects */}
      <FloatingOrbs />
      <GridOverlay />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;