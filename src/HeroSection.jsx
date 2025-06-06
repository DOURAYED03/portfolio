import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import heroImage from './images/IMG-20250508-WA0024.jpg';

const typingText = "Hello everyone, I'm Dourayed Glii, full-stack developer";

function HeroSection({ theme }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(typingText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === typingText.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(typingText.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bgClass = 'text-white';

  return (
    <ScrollReveal>
      <section
        id="home"
        className={`relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-10w ${bgClass}`}
        style={{
          backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazJ6eDdoOWh4Z2dkbHVweDMwYjgyZ2t4ZnVkOWNueG5hbm5zYWp5byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aRZ4vTsHnyW6A/giphy.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={heroImage} alt="IMg" className="rounded-full w-48 h-48 object-cover" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-mono tracking-wide animate-fadeInUp">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </h1>
          <button
            onClick={scrollToProjects}
            className="mt-4 px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            View My Projects
          </button>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default HeroSection;
