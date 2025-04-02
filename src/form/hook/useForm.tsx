import { useEffect, useState } from "react";
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

  useEffect(() => {
    emailjs.init({
      publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
    });
  }, []);

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
      return;
    }

    if (
      sanitisedLastname === "" ||
      sanitisedFirstname === "" ||
      sanitisedEmail === "" ||
      sanitisedSubject === "" ||
      sanitisedMessage === ""
    ) {
      console.error("Merci de remplir tous les champs requis !");
      setErrorMessage("Merci de remplir tous les champs requis !");
      return;
    }

    if (
      sanitisedLastname.length < 2 ||
      sanitisedFirstname.length < 2 ||
      sanitisedEmail.length < 9 ||
      sanitisedSubject.length < 3 ||
      sanitisedMessage.length < 15
    ) {
      console.error("Bon... Faut arrêter de toucher à tous aussi !");
      setErrorMessage("Bon... Faut arrêter de toucher à tous aussi !");
      return;
    }

    try {
      const templateParams = {
        lastname: sanitisedLastname,
        firstname: sanitisedFirstname,
        name: sanitisedFirstname + sanitisedLastname,
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
          setErrorMessage("Une erreur s'est produite lors de l'envoi de l'email. Veuillez réessayer plus tard.");
        });

    } catch (err) {
      console.error("Une erreur est survenue durant le processus :", err);
      setErrorMessage("Une erreur est survenue lors du traitement du formulaire. Veuillez réessayer plus tard.");
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
    errorMessage
  };
};

export default useForm;
