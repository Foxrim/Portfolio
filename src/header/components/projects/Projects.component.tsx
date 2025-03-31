import styles from "./projects.module.css";

import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className={styles.projects}>
      <NavLink to="/projets" className={styles.button}>
        <button>{t("projects")}</button>
      </NavLink>
      <NavLink to="/projets">
        <i className="fa-solid fa-arrow-right"></i>
      </NavLink>
    </div>
  );
}
