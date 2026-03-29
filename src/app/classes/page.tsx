'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './classes.module.css';

export default function Classes() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 
          className={`${styles.title} animate-fade-in`}
          dangerouslySetInnerHTML={{ __html: t('classes.title') }}
        />
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          {t('classes.subtitle')}
        </p>
      </header>

      <section className={styles.classList}>
        {/* Beginner Class */}
        <div id="beginner" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>{t('classes.beginner.name')}</h2>
            <div className={styles.levelBadge}>{t('classes.beginner.level')}</div>
            <p className={styles.classDesc}>
              {t('classes.beginner.desc')}
            </p>
            <ul className={styles.highlights}>
              <li>✓ {t('classes.beginner.h1')}</li>
              <li>✓ {t('classes.beginner.h2')}</li>
              <li>✓ {t('classes.beginner.h3')}</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">{t('classes.btn')}</Link>
          </div>
        </div>

        {/* Exotic Flow Class */}
        <div id="exotic" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>{t('classes.exotic.name')}</h2>
            <div className={styles.levelBadge}>{t('classes.exotic.level')}</div>
            <p className={styles.classDesc}>
              {t('classes.exotic.desc')}
            </p>
            <ul className={styles.highlights}>
              <li>✓ {t('classes.exotic.h1')}</li>
              <li>✓ {t('classes.exotic.h2')}</li>
              <li>✓ {t('classes.exotic.h3')}</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">{t('classes.btn')}</Link>
          </div>
        </div>

        {/* Flexibility & Conditioning */}
        <div id="flexibility" className={`${styles.classItem} glass-panel`}>
          <div className={styles.classInfo}>
            <h2 className={styles.className}>{t('classes.flexibility.name')}</h2>
            <div className={styles.levelBadge}>{t('classes.flexibility.level')}</div>
            <p className={styles.classDesc}>
              {t('classes.flexibility.desc')}
            </p>
            <ul className={styles.highlights}>
              <li>✓ {t('classes.flexibility.h1')}</li>
              <li>✓ {t('classes.flexibility.h2')}</li>
              <li>✓ {t('classes.flexibility.h3')}</li>
            </ul>
          </div>
          <div className={styles.action}>
            <Link href="/contact" className="btn-primary">{t('classes.btn')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
