import styles from "./name.module.css";
import data from "../../../data/data.json";
import { NavLink } from "react-router-dom";

export default function Name() {
  return (
    <div className={styles.nameTitle}>
      <NavLink to='/'>
        <h1>
          {data.user.firstname} {data.user.lastname}
        </h1>
      </NavLink>
    </div>
  );
}
