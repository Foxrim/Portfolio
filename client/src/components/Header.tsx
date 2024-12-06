import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";

import linkedin from "../assets/images/Linkedin-green.png";
import github from "../assets/images/github-green.png";
import twitter from "../assets/images/twitter-green.png";

export default function Header() {
  const [modal, setModal] = useState<boolean>(false);

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <>
      <header className={styles.header}>
        <span
          onClick={handleClick}
          onKeyDown={handleClick}
          className={`${"material-symbols-outlined"} ${styles.menuHeader}`}
        >
          menu
        </span>
        <div className={styles.linkDesktop}>
          <Link to="/a-propos">
            <h3>À propos</h3>
            <hr className={styles.hrGreen} />
            <hr className={styles.hrBrown} />
          </Link>
          <Link to="/projets">
            <h3>Projets</h3>
            <hr className={styles.hrGreen} />
            <hr className={styles.hrBrown} />
          </Link>
          <Link to="/contacts">
            <h3>Contacts</h3>
            <hr className={styles.hrGreen} />
            <hr className={styles.hrBrown} />
          </Link>
        </div>
        <span className={`${"material-symbols-outlined"} ${styles.theme}`}>
          sunny
        </span>
        <div className={styles.networksDesktop}>
          <a href="https://github.com/Foxrim" className={styles.github}>
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/flavien-rousseau-444bbb199/"
            className={styles.linkedin}
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://x.com/TheFoxrim" className={styles.twitter}>
            <img src={twitter} alt="" />
          </a>
          <span
            className={`${"material-symbols-outlined"} ${styles.themeDesktop}`}
          >
            sunny
          </span>
        </div>
      </header>
      {modal && <Menu handleClick={handleClick} />}
    </>
  );
}
