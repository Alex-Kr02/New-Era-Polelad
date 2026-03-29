'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './page.module.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 
            className={`${styles.title} animate-fade-in`}
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
            {t('hero.subtitle')}
          </p>
          <div className={`${styles.ctaContainer} animate-fade-in animate-delay-2`}>
            <Link href="/classes" className="btn-primary">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className={styles.programs}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('programs.title')}</h2>
          <p className={styles.sectionDesc}>{t('programs.description')}</p>
        </div>
        
        <div className={styles.grid}>
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.beginner.title')}</h3>
            <p className={styles.cardText}>{t('programs.beginner.text')}</p>
            <Link href="/classes#beginner" className={styles.cardLink}>{t('programs.beginner.link')}</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.exotic.title')}</h3>
            <p className={styles.cardText}>{t('programs.exotic.text')}</p>
            <Link href="/classes#exotic" className={styles.cardLink}>{t('programs.exotic.link')}</Link>
          </div>
          
          <div className="glass-panel">
            <h3 className={styles.cardTitle}>{t('programs.flexibility.title')}</h3>
            <p className={styles.cardText}>{t('programs.flexibility.text')}</p>
            <Link href="/classes#flexibility" className={styles.cardLink}>{t('programs.flexibility.link')}</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyContent}>
          <h2 className={styles.sectionTitle}>{t('philosophy.title')}</h2>
          <p className={styles.philosophyText}>
            {t('philosophy.text')}
          </p>
          <Link href="/about" className="btn-primary">
            {t('philosophy.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
