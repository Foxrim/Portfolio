import styles from "./Popup.module.css";

type PopupProps = {
    showPopup: boolean;
}

export default function Popup({showPopup} : PopupProps) {

  return (
      <p className={`${styles.popup} ${showPopup ? styles.visible : ""}`}>Ce lien n'est actuellement pas disponible.</p>
    )
}
