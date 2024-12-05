import { useState } from "react";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";

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
          className={`${"material-symbols-outlined"} ${styles.menu}`}
        >
          menu
        </span>
        <span className={`${"material-symbols-outlined"} ${styles.theme}`}>
          sunny
        </span>
      </header>
      {modal && <Menu handleClick={handleClick} />}
    </>
  );
}
