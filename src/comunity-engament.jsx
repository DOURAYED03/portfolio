import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const imagesDark = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80',
];

const imagesLight = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80',
];

function CommunityEngagement({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = theme === 'dark' ? imagesDark : imagesLight;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ScrollReveal>
      <section id="communityengagement" className={`w-full p-12 rounded-lg shadow-lg transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
        <h2 className="text-4xl font-extrabold text-red-500 mb-6 text-center drop-shadow-lg transition-colors duration-500">
          Community Engagement
        </h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto transition-colors duration-500">
          I actively participate in workshops, hackathons, and online competitive programming contests to enhance my skills and collaborate with the tech community.
        </p>
        <div className="w-full h-64 relative overflow-hidden rounded-lg shadow-lg mx-auto max-w-4xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Community ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-64 object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default CommunityEngagement;

