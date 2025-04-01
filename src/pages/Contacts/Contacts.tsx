import { useTranslation } from "react-i18next";
import Form from "../../form/Form.component";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const {t} = useTranslation();
  
  return (
    <section className={styles.contacts}>
      <h3>{t('contacts')}</h3>
      <Form />
      <footer>©flavien-rousseau</footer>
    </section>
  );
}
