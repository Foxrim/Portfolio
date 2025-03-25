import styles from "./Slider.module.css";

import Card from "./components/card/Card.component";

export default function Slider() {
  return (
    <section className={styles.sliderContainer}>
      <Card />
      <div className={styles.buttonContainer}>
        <button />
      </div>
    </section>
  );
}
