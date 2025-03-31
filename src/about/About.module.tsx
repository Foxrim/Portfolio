import Presentation from "./components/presentation/Presentation.component";
import Technologie from "./components/technologie/Technologie.component";
import data from "../data/data.json";
import styles from "./About.module.css";
import Profile from "./components/profile/Profile.component";

export default function About() {
  const technologies = data.technologies.types;

  return (
    <section className={styles.about}>
      <Presentation />
      <div className={styles.techContainer}>
        {Object.entries(technologies).map(([categoryName, technologyList]) => (
          <Technologie
            key={categoryName}
            categoryName={categoryName}
            technologies={technologyList}
          />
        ))}
      </div>
      <Profile />
      <span className={styles.circle} />
      <footer>©flavien-rousseau</footer>
    </section>
  );
}
