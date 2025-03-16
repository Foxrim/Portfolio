import styles from "./projects.module.css";

import arrow from '../../../assets/Arrow-right.png';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <button>Projets</button>
      <figure>
        <img src={arrow} alt="flèche vers la droite" />
      </figure>
    </div>
  );
}
