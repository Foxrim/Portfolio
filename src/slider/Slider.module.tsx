import styles from "./Slider.module.css";

import Card from "./components/card/Card.component";
import data from "../data/data.json";

export default function Slider() {
  const projects = data.projects;

  return (
    <section className={styles.sliderContainer}>
      {projects.map((project) => (
        <Card
          title={project.title}
          image={project.image}
          description={project.description}
          github={project.github || null}
          website={project.website || null}
        />
      ))}
      <div className={styles.buttonContainer}>
        <button />
      </div>
    </section>
  );
}
