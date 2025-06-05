import React from 'react';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
export default App;