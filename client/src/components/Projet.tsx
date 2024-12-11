import { useState } from "react";
import data from "../data/data.json";
import styles from "../styles/Projet.module.css";
import Gallery from "./Gallery";

export default function Projet() {
  const [selectedById, setSelectedById] = useState<number | null>(null);

  const handleProjectSelect = (projectId: number | null) => {
    setSelectedById(projectId);
  };

  const selectedProject = data.projets.find(
    (project) => project.id === selectedById,
  );
  const backgroundImageUrl = selectedProject
    ? `url(${selectedProject.image})`
    : "none";

  return (
    <main
      className={styles.projetPage}
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundColor: !selectedProject
          ? "var(--main-brown-background)"
          : "transparent",
      }}
    >
      <hr className={styles.degradeTop} />
      <div className={styles.galleryContainer}>
        <Gallery onProjectSelect={handleProjectSelect} />
      </div>
      <hr className={styles.degradeBottom} />
    </main>
  );
}
