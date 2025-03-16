import styles from './naviagation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <p>À propos</p>
      <p>Projets</p>
      <p>Contacts</p>
    </nav>
  );
}
