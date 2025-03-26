import styles from "./ButtonSlider.module.css";
import arrow from "../../../assets/Arrow-right-white.png";

type ButtonSliderProps = {
    handlePrev: () => void;
    handleNext: () => void;
}

export default function ButtonSlider({handleNext, handlePrev} : ButtonSliderProps) {
  return (
    <>
      <button
        type="button"
        onClick={handlePrev}
        className={`material-symbols-outlined ${styles.buttonSlider} ${styles.buttonPrev}`}
      >
        <figure>
          <img src={arrow} alt="flèche directionnel" />
        </figure>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className={`material-symbols-outlined ${styles.buttonSlider} ${styles.buttonNext}`}
      >
        <figure>
          <img src={arrow} alt="flèche directionnel" />
        </figure>
      </button>
    </>
  );
}
