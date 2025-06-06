import React from 'react';

const projects = [
  {
    title: "Application Web d'un Centre de Recherche",
    description: "A web application for managing research center activities and resources.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Brick Breaker Game",
    description: "A classic brick breaker game built with JavaScript and HTML5 canvas.",
    imageUrl: "./src/images/Brick breaker.png",
    link: "#",
  },
  {
    title: "Mini Library",
    description: "A small library management system to track books and users.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Mini Graph Project",
    description: "A mini project involving graph algorithms and visualizations.",
    imageUrl: "./src/images/minigraph.jpg",
    link: "#",
  },
];

import ScrollReveal from './ScrollReveal';

function Projects({ theme }) {
  return (
    <ScrollReveal>
      <section id="projects" className={`w-full p-12 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
        <h2 className="text-5xl font-extrabold text-center text-red-500 mb-10 tracking-wide drop-shadow-lg">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ title, description, imageUrl }, index) => (
            <div key={index} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-100'} transition-colors duration-500`}>
              <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>{title}</h3>
                <p className={`flex-grow ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;
