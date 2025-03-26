import styles from "./Fog.module.css";

export default function Fog() {
  return (
    <>
      <hr className={`${styles.fog} ${styles.fogPrev}`} />
      <hr className={`${styles.fog} ${styles.fogNext}`} />
    </>
  );
}
