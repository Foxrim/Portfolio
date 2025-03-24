import { useTranslation } from 'react-i18next';
import styles from './occupation.module.css';

export default function Occupation() {
  const {t} = useTranslation();
  return (
    <section className={styles.occupation}>
      <h2>{t('title')}</h2>
      <p>Je n'ai aucune inspiration</p>
    </section>
  );
}
