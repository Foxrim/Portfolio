import { NavLink } from "react-router";
import styles from "./naviagation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/home">
        <p>À propos</p>
      </NavLink>
      <NavLink to="/projets">
        <p>Projets</p>
      </NavLink>
      <NavLink to="/contacts">
        <p>Contacts</p>
      </NavLink>
    </nav>
  );
}
