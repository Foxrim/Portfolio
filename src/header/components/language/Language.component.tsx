import { useState } from "react";
import styles from "./language.module.css";

export default function Language() {
  const [isActif, setIsActif] = useState<boolean>();

  const handleFr = () => {
    setIsActif(true);
  };

  const handleEn = () => {
    setIsActif(false);
  };

  return (
    <div className={styles.language}>
      <p
        className={`${styles.fr} ${isActif && styles.actif}`}
        onClick={handleFr}
        onKeyDown={handleFr}
      >
        Fr
      </p>
      <p
        className={`${!isActif && styles.actif}`}
        onClick={handleEn}
        onKeyDown={handleEn}
      >
        En
      </p>
    </div>
  );
}
