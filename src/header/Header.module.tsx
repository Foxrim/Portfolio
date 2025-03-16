import Language from "./components/language/Language.component";
import Name from "./components/name/Name.component";
import Navigation from "./components/navigation/Navigation.component";
import Occupation from "./components/occupation/Occupation.component";
import Projects from "./components/projects/Projects.component";
import Social from "./components/social networks/Social.component";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Name />
      <Language />
      <Navigation />
      <Occupation />
      <Projects />
      <Social />
    </header>
  );
}
