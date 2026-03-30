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
          {[
            { id: 'melina', name: 'Melina', img: '/images/melina.jpg' },
          ].map((inst) => (
            <div key={inst.id} className={`${styles.instructorCard} animate-fade-in`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={inst.img} alt={inst.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{inst.name}</h3>
                <p className={styles.specialty}>{t(`about.${inst.id}.specialty`)}</p>
                <p className={styles.bio}>{t(`about.${inst.id}.bio`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
