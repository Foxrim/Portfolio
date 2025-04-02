import data from "../data/data.json";
import Input from "./components/input/Input.component";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import useForm from "./hook/useForm";
import Message from "./components/message/Message.component";

export default function Form() {
  const [isFrench, setIsFrench] = useState<boolean>();
  const inputsEn = data["inputs-en"];
  const inputsFr = data["inputs-fr"];
  const { t } = useTranslation();

  const { handleChange, handleSubmit, successMessage, errorMessage, closeModal, formValue } = useForm();

  useEffect(() => {
    setIsFrench(t("button") === "Envoyer");
  }, [t]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isFrench
        ? inputsFr.map((input, index) => (
            <Input
              key={index}
              id={input.name}
              name={input.name}
              legend={input.legend}
              placeholder={input.placeholder}
              type={input.type}
              minLenght={input.minLength}
              maxLenght={input.maxLenght}
              onChange={handleChange}
              formValue={formValue}
            />
          ))
        : inputsEn.map((input, index) => (
            <Input
              key={index}
              id={input.name}
              name={input.name}
              legend={input.legend}
              placeholder={input.placeholder}
              type={input.type}
              minLenght={input.minLength}
              maxLenght={input.maxLenght}
              onChange={handleChange}
              formValue={formValue}
            />
          ))}
      <fieldset className={styles.message}>
        <legend>{t("legend-message")}</legend>
        <textarea
          id="message"
          name="message"
          placeholder={t("placeholder-message")}
          maxLength={250}
          minLength={10}
          value={formValue.message}
          onChange={handleChange}
          required
        ></textarea>
      </fieldset>
      <button className={styles.sendButton}>{t("button")}</button>
          {(successMessage || errorMessage) && (
            <Message successMessage={successMessage} errorMessage={errorMessage} closeModal={closeModal} />
          )}
    </form>
  );
}
