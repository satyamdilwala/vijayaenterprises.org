import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/images/vijaya-logo.png" alt="Vijaya Enterprises Logo" className="logo-img" />
          <div className="logo-text">
            <span className="name">Vijaya Enterprises</span>
            <span className="tagline">Global Export/Import</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: var(--transition);
          background: transparent; /* Default transparent */
        }

        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
        }

        .logo-img {
            height: 50px;
            width: auto;
            object-fit: contain;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        /* Logic for Text Colors */
        /* Default State (Transparent background, dark overlay expected) -> White Text */
        .logo-text .name {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1;
          color: var(--white); 
          text-shadow: 0 2px 4px rgba(0,0,0,0.3); /* Add shadow for better legibility */
        }

        .logo-text .tagline {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.9);
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .nav-menu a {
          font-weight: 600;
          font-size: 1rem;
          color: var(--white); /* White text by default */
          position: relative;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .mobile-toggle {
            color: var(--white);
            cursor: pointer;
             display: none;
        }


        /* Scrolled State -> Dark Text */
        .navbar.scrolled .logo-text .name {
          color: var(--primary-color);
          text-shadow: none;
        }

        .navbar.scrolled .logo-text .tagline {
           color: var(--text-light);
            text-shadow: none;
        }

        .navbar.scrolled .nav-menu a {
          color: var(--primary-color);
           text-shadow: none;
        }

        .navbar.scrolled .mobile-toggle {
             color: var(--primary-color);
        }
        
        /* Active Link Styling */
        .nav-menu a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary-color);
          transition: var(--transition);
        }

        .nav-menu a.active::after, .nav-menu a:hover::after {
          width: 100%;
        }

        /* Mobile Menu */
        .mobile-menu {
           display: none;
        }
        
         @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-menu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--white);
            height: 0;
            overflow: hidden;
            transition: var(--transition);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .mobile-menu.open {
            height: 300px;
          }

          .mobile-menu ul {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .mobile-menu ul a {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-color); /* Always dark in mobile menu dropdown */
            text-shadow: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
