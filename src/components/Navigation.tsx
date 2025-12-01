'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.css';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
      <button
            className={styles.closeToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FaTimes />
          </button>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/Tushar's_Resume.pdf"
            download
            className={styles.resumeButton}
          >
            Resume
          </a>
        </li>
      </ul>

      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              &lt;Tushar /&gt;
            </a>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      <ThemeToggle />
    </>
  );
}
