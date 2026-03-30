'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            <span className={styles.neonText}>New Era</span> Polelad
          </h2>
          <p className={styles.tagline}>
            {t('footer.tagline')}
          </p>
        </div>
        
        <div className={styles.linksBlock}>
          <h3 className={styles.heading}>{t('footer.explore')}</h3>
          <ul className={styles.list}>
            <li><Link href="/about">{t('nav.about')}</Link></li>
            <li><Link href="/classes">{t('nav.classes')}</Link></li>
            <li><Link href="/instructors">{t('nav.instructors')}</Link></li>
            <li><Link href="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>
        
        <div className={styles.linksBlock}>
          <h3 className={styles.heading}>{t('footer.socials')}</h3>
          <ul className={styles.list}>
            <li><a href="https://www.instagram.com/new_era_polelab_kifisia/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} New Era Polelad. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
