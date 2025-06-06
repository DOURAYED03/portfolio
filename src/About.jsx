import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const iconUrls = {
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TailwindCSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  Cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Flask: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
  ReactJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  Canva: 'https://static.cdnlogo.com/logos/c/36/canva.png',
  Figma: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
};

function About({ theme }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Languages', 'Tools', 'Frameworks'];

  const icons = {
    All: [
      { label: 'HTML5', url: iconUrls.HTML5 },
      { label: 'CSS3', url: iconUrls.CSS3 },
      { label: 'JavaScript', url: iconUrls.JavaScript },
      { label: 'Tailwind CSS', url: iconUrls.TailwindCSS },
      { label: 'C', url: iconUrls.C },
      { label: 'C++', url: iconUrls.Cplusplus },
      { label: 'Python', url: iconUrls.Python },
      { label: 'Flask', url: iconUrls.Flask },
      { label: 'React.js', url: iconUrls.ReactJS },
      { label: 'Git', url: iconUrls.Git },
      { label: 'GitHub', url: iconUrls.GitHub },
      { label: 'PHP', url: iconUrls.PHP },
      { label: 'Canva', url: iconUrls.Canva },
      { label: 'Figma', url: iconUrls.Figma },
    ],
    Languages: [
      { label: 'HTML5', url: iconUrls.HTML5 },
      { label: 'CSS3', url: iconUrls.CSS3 },
      { label: 'JavaScript', url: iconUrls.JavaScript },
      { label: 'C', url: iconUrls.C },
      { label: 'C++', url: iconUrls.Cplusplus },
      { label: 'Python', url: iconUrls.Python },
      { label: 'PHP', url: iconUrls.PHP },
    ],
    Tools: [
      { label: 'Git', url: iconUrls.Git },
      { label: 'GitHub', url: iconUrls.GitHub },
      { label: 'Canva', url: iconUrls.Canva },
      { label: 'Figma', url: iconUrls.Figma },
    ],
    Frameworks: [
      { label: 'Flask', url: iconUrls.Flask },
      { label: 'React.js', url: iconUrls.ReactJS },
    ],
  };

  return (
    <ScrollReveal>
      <section id="about" className={`w-full p-12 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
        <h2 className="text-5xl font-extrabold text-center text-red-500 mb-10 tracking-wide drop-shadow-lg">
          About Me
        </h2>
        <div className={`p-8 rounded-lg shadow-inner mb-12 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <p className="text-xl leading-relaxed mb-6">
            My name is <span className="font-semibold text-red-400">Dourayed Glii</span>, and I am a software development student at <span className="italic">ENSIT (École Nationale Supérieure d'Ingénieurs de Tunis)</span>. I’m passionate about coding, problem-solving, and building efficient software solutions.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Over time, I’ve developed skills in multiple programming languages, algorithms, and development tools, and I’m constantly working on projects to improve my abilities and become a professional in the field.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Feel free to visit my GitHub to see some of my work, and don’t hesitate to contact me if you have a job opportunity, a collaboration idea, or anything that could help me grow. I'm always open to learning and new challenges!
          </p>
        </div>
        <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">
          Technologies I Have Been Working On Recently
        </h3>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                selectedCategory === category ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-8 text-center">
          {icons[selectedCategory].map(({ label, url }, index) => (
            <div
              key={label}
              className="flex flex-col items-center space-y-3 hover:scale-110 transform transition-transform duration-300 cursor-pointer fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img src={url} alt={label} className="h-20 w-20 object-contain" />
              <span className={`${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;
