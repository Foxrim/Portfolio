import styles from "./Technologie.module.css";

type TechnologyItem = {
  name: string;
};

type TechnologieProps = {
  categoryName: string;
  technologies: TechnologyItem[];
};

export default function Technologie({
  categoryName,
  technologies,
}: TechnologieProps) {
  return (
    <div
      className={`${styles.cardTechnologies} ${
        categoryName === "Front-End" ? styles.frontEnd : ""
      }`}
    >
      <h3>{categoryName}</h3>
      <div className={styles.technologiesContainer}>
        {technologies.map((tech) => (
          <p key={tech.name}>{tech.name}</p>
        ))}
      </div>
    </div>
  );
}
