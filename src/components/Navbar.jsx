import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[rgb(20,20,20)] shadow transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="flex items-center justify-between h-20 text-white px-4 md:px-8 lg:px-12 max-w-custom mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center h-full"
          aria-label="Scroll to top"
        >
          <img src="/logo192.png" alt="Logo" className="h-12" />
        </button>
        <div className="hidden md:flex space-x-6 text-sm font-medium h-full">
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="h-full flex items-center hover:text-gray-500 transition text-lg"
            >
              {section}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center text-white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <button className="md:hidden h-full flex items-center" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-black bg-white">
          {['about', 'projects', 'skills'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-gray-500"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
