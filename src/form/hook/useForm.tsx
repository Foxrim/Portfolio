import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";

type FormValues = {
  lastname: string | "";
  firstname: string | "";
  email: string | "";
  subject: string | "";
  message: string | "";
  name: string | "";
};

const useForm = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    lastname: "",
    firstname: "",
    email: "",
    subject: "",
    message: "",
    name: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [timer, setTimer] = useState<number>(4000);

  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    emailjs.init({
      publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
    });
  }, []);

  const closeModal = () => {
    setTimer(4000);
    setSuccessMessage("");
    setErrorMessage("");
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const sanitisedValue = DOMPurify.sanitize(value);
    setFormValue({ ...formValue, [name]: sanitisedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const sanitisedLastname = DOMPurify.sanitize(formValue.lastname);
    const sanitisedFirstname = DOMPurify.sanitize(formValue.firstname);
    const sanitisedEmail = DOMPurify.sanitize(formValue.email);
    const sanitisedSubject = DOMPurify.sanitize(formValue.subject);
    const sanitisedMessage = DOMPurify.sanitize(formValue.message);

    if (!isValidEmail(sanitisedEmail)) {
      console.error("Veuillez entrez un email valide");
      setErrorMessage("Veuillez entrer un email valide");
      clearTimeout(timerIdRef.current || undefined);
      timerIdRef.current = setTimeout(() => {
        setErrorMessage("");
      }, timer);
      return;
    }

    if (
      sanitisedLastname === "" ||
      sanitisedFirstname === "" ||
      sanitisedEmail === "" ||
      sanitisedSubject === "" ||
      sanitisedMessage === ""
    ) {
      setErrorMessage("Merci de remplir tous les champs requis !");
      clearTimeout(timerIdRef.current || undefined);
      timerIdRef.current = setTimeout(() => {
        setErrorMessage("");
      }, timer);
      return;
    }

    if (
      sanitisedLastname.length < 2 ||
      sanitisedFirstname.length < 2 ||
      sanitisedEmail.length < 2 ||
      sanitisedSubject.length < 2 ||
      sanitisedMessage.length < 10
    ) {
      console.log(sanitisedMessage.length)
      console.error("Bon... Faut arrêter de toucher à tous aussi !");
      setErrorMessage("Bon... Faut arrêter de toucher à tous aussi !");
      clearTimeout(timerIdRef.current || undefined);
      timerIdRef.current = setTimeout(() => {
        setErrorMessage("");
      }, timer);
      return;
    }

    try {
      const templateParams = {
        lastname: sanitisedLastname,
        firstname: sanitisedFirstname,
        name: sanitisedFirstname + " " + sanitisedLastname,
        email: sanitisedEmail,
        subject: sanitisedSubject,
        message: sanitisedMessage,
      };

      emailjs
        .send(
          `${import.meta.env.VITE_SERVICE_ID}`,
          `${import.meta.env.VITE_MODELE_ID}`,
          templateParams
        )
        .then((response) => {
          console.error("yes", response.status, response.text);
          setSuccessMessage("Email envoyé avec succès !");
          clearTimeout(timerIdRef.current || undefined);
          timerIdRef.current = setTimeout(() => {
            setSuccessMessage("");
          }, timer);
          setFormValue({
            lastname: "",
            firstname: "",
            email: "",
            subject: "",
            message: "",
            name: "",
          });
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de l'email :", error);
          setErrorMessage(
            "Une erreur s'est produite lors de l'envoi de l'email. Veuillez réessayer plus tard."
          );
          clearTimeout(timerIdRef.current || undefined);
          timerIdRef.current = setTimeout(() => {
            setErrorMessage("");
          }, timer);
        });
    } catch (err) {
      console.error("Une erreur est survenue durant le processus :", err);
      setErrorMessage(
        "Une erreur est survenue lors du traitement du formulaire. Veuillez réessayer plus tard."
      );
      clearTimeout(timerIdRef.current || undefined);
      timerIdRef.current = setTimeout(() => {
        setErrorMessage("");
      }, timer);
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    handleChange,
    handleSubmit,
    successMessage,
    errorMessage,
    closeModal,
    formValue
  };
};

export default useForm;
