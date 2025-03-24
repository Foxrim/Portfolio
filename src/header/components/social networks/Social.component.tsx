import styles from "./social.module.css";

import github from "../../../assets/Github.png";
import linkedin from "../../../assets/Linkedin.png";
import mail from "../../../assets/Mail.png";
import { NavLink } from "react-router";

import data from "../../../data/data.json";

export default function Social() {
  return (
    <nav className={styles.social}>
      <a href={data.contacts[0].link}>
        <figure>
          <img src={github} alt="Logo github" />
        </figure>
        <p>{data.contacts[0].name}</p>
      </a>
      <a href={data.contacts[1].link}>
        <figure>
          <img src={linkedin} alt="Logo Linkedin" />
        </figure>
        <p>{data.contacts[1].name}</p>
      </a>
      <NavLink to="/contacts">
        <figure>
          <img src={mail} alt="Logo mail" />
        </figure>
        <p>Mail</p>
      </NavLink>
    </nav>
  );
}
