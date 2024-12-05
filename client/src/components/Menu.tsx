import { Link } from "react-router-dom";
import styles from "../styles/Menu.module.css";

interface HeaderProps {
  handleClick: () => void;
}

export default function Menu({ handleClick }: HeaderProps) {
  return (
    <section className={styles.menuBackground}>
      <div className={styles.menu}>
        <div className={styles.menuTop}>
          <h2>Menu</h2>
          <span
            className="material-symbols-outlined"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            close
          </span>
        </div>
        <div className={styles.menuLink}>
          <Link to="/apropos">
            <h3>À propos</h3>
          </Link>
          <Link to="/projets">
            <h3>Projets</h3>
          </Link>
          <Link to="/contacts">
            <h3>Contacts</h3>
          </Link>
        </div>
        <div className={styles.networks}>
          <h2>Réseaux</h2>
        </div>
        <div className={styles.networksLink}>
          <a href="https://github.com/Foxrim">Github</a>
          <a href="https://www.linkedin.com/in/flavien-rousseau-444bbb199/">
            Linkedin
          </a>
          <a href="https://x.com/TheFoxrim">Twitter</a>
        </div>
      </div>
    </section>
  );
}
