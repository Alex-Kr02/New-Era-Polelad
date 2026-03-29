'use client';

import { useTranslation } from '@/hooks/useTranslation';
import styles from './about.module.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 
          className={`${styles.title} animate-fade-in`}
          dangerouslySetInnerHTML={{ __html: t('about.title') }}
        />
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          {t('about.subtitle')}
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={`${styles.textContent} animate-fade-in animate-delay-2`}>
          <h2>{t('about.storyTitle')}</h2>
          <p>{t('about.storyP1')}</p>
          <p>{t('about.storyP2')}</p>
        </div>
      </section>

      <section className={styles.instructorSection}>
        <h2 className={styles.sectionTitle}>{t('about.instructorsTitle')}</h2>
        <div className={styles.grid}>
          <div className="glass-panel">
            <h3 className={styles.name}>Elena</h3>
            <p className={styles.specialty}>{t('about.elena.specialty')}</p>
            <p className={styles.bio}>{t('about.elena.bio')}</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.name}>Mia</h3>
            <p className={styles.specialty}>{t('about.mia.specialty')}</p>
            <p className={styles.bio}>{t('about.mia.bio')}</p>
          </div>
          <div className="glass-panel">
            <h3 className={styles.name}>Sarah</h3>
            <p className={styles.specialty}>{t('about.sarah.specialty')}</p>
            <p className={styles.bio}>{t('about.sarah.bio')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
