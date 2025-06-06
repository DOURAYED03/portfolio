import React from 'react';
import { FaGithub, FaFacebook, FaEnvelope, FaLinkedin, FaAngleDoubleUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-800 via-slate-900 to-black text-slate-100 py-10 mt-12 relative shadow-inner">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/DOURAYED03" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-red-400 transition-colors duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.facebook.com/dourayed.glii?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="mailto:dourayedg@gmail.com" aria-label="Email" className="hover:text-green-400 transition-colors duration-300">
            <FaEnvelope size={30} />
          </a>
          <a href="https://www.linkedin.com/in/glii-dourayed-14047a30b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="text-xl font-semibold text-center mb-6">
          &copy; {new Date().getFullYear()} Dourayed Glii. All rights reserved.
        </p>
        <div className="flex flex-col justify-center items-center cursor-pointer select-none text-red-500 text-5xl animate-bounce space-y-1">
          <FaAngleDoubleUp />
          <FaAngleDoubleUp className="delay-150 animate-bounce" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
