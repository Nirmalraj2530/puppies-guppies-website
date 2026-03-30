import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logoArea}>
          <img src="/assets/logo.png" alt="Puppies 2 Guppies Logo" style={{ height: '50px', borderRadius: '10px' }} />
          <span className={styles.logoText}>Puppies 2 Guppies</span>
        </div>

        {/* Desktop Links */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
          <a href="tel:08438531230" className="btn btn-primary">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="tel:08438531230" className="btn btn-primary" style={{ width: '100%' }}>
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
