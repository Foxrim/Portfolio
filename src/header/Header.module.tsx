import { useEffect, useState } from "react";
import Language from "./components/language/Language.component";
import Name from "./components/name/Name.component";
import Navigation from "./components/navigation/Navigation.component";
import Occupation from "./components/occupation/Occupation.component";
import Projects from "./components/projects/Projects.component";
import Social from "./components/social networks/Social.component";

import styles from "./header.module.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isHome, setIsHome] = useState<boolean>(true);
  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    setIsHome(!(path === "/projets" || path === "/contacts"));
  }, [path]);

  return (
    <header className={styles.header}>
      <Name />
      <Language />
      <Navigation />
      {isHome && (
        <>
          <Occupation />
          <Projects />
        </>
      )}
      <Social />
    </header>
  );
}
