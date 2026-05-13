import { ReactNode } from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  description: string | ReactNode;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
