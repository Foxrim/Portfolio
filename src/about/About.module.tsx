import Presentation from "./components/presentation/Presentation.component";
import Technologie from "./components/technologie/Technologie.component";
import data from "../data/data.json";
import styles from "./About.module.css";

export default function About() {
  const technologies = data.technologies.types;

  return (
    <section className={styles.about}>
      <Presentation />
      {Object.entries(technologies).map(([categoryName, technologyList]) => (
        <Technologie
          key={categoryName}
          categoryName={categoryName}
          technologies={technologyList}
        />
      ))}
      <span className={styles.circle} />
    </section>
  );
}
