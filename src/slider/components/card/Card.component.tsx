import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <figure>
        <img src="" alt="" />
      </figure>
      <div>
        <h3>title</h3>
        <p>description</p>
        <nav>
          <a href="">Github</a>
          <a href="">Site</a>
        </nav>
      </div>
    </div>
  );
}
