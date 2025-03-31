import { useEffect, useState } from "react";
import Popup from "../popup/Popup.component";
import styles from "./Card.module.css";
import data from "../../../data/data.json";
import { useLocation } from "react-router-dom";

type CardContain = {
  title: string;
  image: string;
  description: string;
  github: string | null;
  website: string | null;
  index: number;
};

export default function Card({
  title,
  image,
  description,
  github,
  website,
  index,
}: CardContain) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>();
  const projects = data.projects;
  const location = useLocation();
  const path = location.pathname;

  const handleClick =
    (url: string | null) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!url) {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      } else {
        setShowPopup(false);
      }
    };

  useEffect(() => {
    if (path === "/projets") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [path]);

  return (
    <>
      <div
        className={`${styles.card} 
      ${(projects.length % index) - 1 && isHome ? styles.actif : ""} 
      ${!isHome ? styles.projetPage : ""}`}
      >
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <nav>
            <a href={github || ""} onClick={handleClick(github)}>
              Github
            </a>
            <a href={website || ""} onClick={handleClick(website)}>
              Site
            </a>
          </nav>
        </div>
        <Popup showPopup={showPopup} />
      </div>
      {!isHome && (
        <>
          <div className={styles.nav}>
            <a href={github || ""} onClick={handleClick(github)}>
              <p>Github</p>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={website || ""} onClick={handleClick(website)}>
              <p>Site</p>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </>
      )}
    </>
  );
}
