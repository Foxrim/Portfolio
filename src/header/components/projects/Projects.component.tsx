import styles from "./projects.module.css";

import arrow from "../../../assets/Arrow-right.png";
import { NavLink } from "react-router";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <NavLink to="/projets" className={styles.button}>
        <button>Projets</button>
      </NavLink>
      <NavLink to="/projets">
        <figure>
          <img src={arrow} alt="flèche vers la droite" />
        </figure>
      </NavLink>
    </div>
  );
}
