import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import Navbar from './Navbar';
import CommunityEngagement from './comunity-engament';
import Contact from './Contact';
import Footer from './footer';
import HeroSection from './HeroSection';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'light' ? 'light' : 'dark bg-slate-900 min-h-screen'}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <About theme={theme} />
      <Projects theme={theme} />
      <CommunityEngagement theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
