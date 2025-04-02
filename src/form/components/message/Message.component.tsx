import styles from "./Message.module.css";

type MessageProps = {
  successMessage: string;
  errorMessage: string;
  closeModal: () => void;
};

export default function Message0({
  successMessage,
  errorMessage,
  closeModal
}: MessageProps) {

  return (
    <div className={styles.messageContainer} onClick={closeModal}>
      <div className={styles.message}>
        {successMessage && (
          <>
            <i className={`fa-solid fa-check ${styles.iValid}`}></i>
            <p>{successMessage}</p>
          </>
        )}
        {errorMessage && (
          <>
            <i
              className={`fa-solid fa-circle-exclamation ${styles.iError}`}
            ></i>
            <p>{errorMessage}</p>
          </>
        )}
        <span />
      </div>
    </div>
  );
}
