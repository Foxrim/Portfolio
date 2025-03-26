import { useState } from "react";
import Popup from "../popup/Popup.component";
import styles from "./Card.module.css";

type CardContain = {
  title: string;
  image: string;
  description: string;
  github: string | null;
  website: string | null;
};

export default function Card({
  title,
  image,
  description,
  github,
  website,
}: CardContain) {
  const [showPopup, setShowPopup] = useState<boolean>(false);

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

  return (
    <>
      <div className={styles.card}>
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
        <Popup showPopup={showPopup}/>
      </div>
    </>
  );
}
