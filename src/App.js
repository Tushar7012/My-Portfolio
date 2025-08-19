import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx'; 
import Contact from './components/Contact.jsx';

function App() {
  return (
    // The bg-black class can live here on the main container
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        {/* Add other sections like Projects, Contact here */}
      </main>
    </div>
  );
}

export default App;