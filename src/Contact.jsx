import React, { useState } from 'react';
import istockImage from './images/istockphoto-2163189353-1024x1024.jpg';

function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({name: '', email: '', message: ''});
  };

  return (
    <section
      id="contact"
      className={`w-full p-12 rounded-lg shadow-lg relative bg-cover bg-center transition-colors duration-500 ${
        theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
      }`}
      style={{
        backgroundImage: `url(${istockImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-500 mb-6 text-center drop-shadow-lg transition-colors duration-500">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-700 bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-700 bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded bg-slate-700 bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 rounded font-semibold hover:bg-red-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
