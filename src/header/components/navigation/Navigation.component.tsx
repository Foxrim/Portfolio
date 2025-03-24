import { NavLink } from "react-router";
import styles from "./naviagation.module.css";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <NavLink to="/home">
        <p>{t("about")}</p>
      </NavLink>
      <NavLink to="/projets">
        <p>{t("projects")}</p>
      </NavLink>
      <NavLink to="/contacts">
        <p>{t("contacts")}</p>
      </NavLink>
    </nav>
  );
}
