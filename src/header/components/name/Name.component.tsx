import styles from "./name.module.css";
import data from "../../../data/data.json";

export default function Name() {
  return <h1 className={styles.name}>{data.user.firstname} {data.user.lastname}</h1>;
}
