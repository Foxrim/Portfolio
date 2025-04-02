import styles from "./social.module.css";

import { NavLink } from "react-router";

import data from "../../../data/data.json";

export default function Social() {
  return (
    <nav className={styles.social}>
      <a href={data.contacts[0].link} target="_blank">
        <i className="fa-brands fa-github"></i>
        <p>{data.contacts[0].name}</p>
      </a>
      <a href={data.contacts[1].link} target="_blank">
        <i className="fa-brands fa-linkedin-in"></i>
        <p>{data.contacts[1].name}</p>
      </a>
      <NavLink to="/contacts">
        <i className="fa-regular fa-envelope"></i>
        <p>Mail</p>
      </NavLink>
    </nav>
  );
}
