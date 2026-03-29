'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.neonText}>New Era</span> Polelad
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/classes" className={styles.link}>Classes</Link>
          <Link href="/instructors" className={styles.link}>Instructors</Link>
          <Link href="/contact" className={styles.btnNav}>Book Now</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
          <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>About</Link>
          <Link href="/classes" className={styles.mobileLink} onClick={toggleMenu}>Classes</Link>
          <Link href="/instructors" className={styles.mobileLink} onClick={toggleMenu}>Instructors</Link>
          <Link href="/contact" className={styles.mobileBtn} onClick={toggleMenu}>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
