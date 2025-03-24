import { useEffect, useState } from "react";
import styles from "./language.module.css";
import { useTranslation } from "react-i18next";

export default function Language() {
  const [isActif, setIsActif] = useState<boolean>();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const storedLanguage = localStorage.getItem('i18nextLng');
    setIsActif(storedLanguage !== "en");
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    setIsActif(storedLanguage !== "en");
  }, []);

  return (
    <div className={styles.language}>
      <p
        className={`${styles.fr} ${isActif && styles.actif}`}
        onClick={() => changeLanguage('fr')}
      >
        Fr
      </p>
      <p
        className={`${!isActif && styles.actif}`}
        onClick={() => changeLanguage('en')}
      >
        En
      </p>
    </div>
  );
}
