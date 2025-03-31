import data from "../../data/data.json";
import Card from "../../slider/components/card/Card.component";
import styles from "./Projets.module.css";

export default function Projets() {
  const projects = data.projects;

  return (
    <section className={styles.projets}>
      <h3>Projets</h3>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <Card
            key={index}
            index={index}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github || null}
            website={project.website || null}
          />
        ))}
      </div>
      <span className={styles.circle} />
      <footer>©flavien-rousseau</footer>
    </section>
  );
}
