import { useState } from "react";
import DOMPurify from "dompurify";

type FormValues = {
  lastname: string | "";
  firstname: string | "";
  email: string | "";
  subject: string | "";
  message: string | "";
};

const useForm = () => {
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [formValue, setFormValue] = useState<FormValues>({
    lastname: "",
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

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

    const sanitisedLastname = DOMPurify.sanitize(formValue.lastname);
    const sanitisedFirstname = DOMPurify.sanitize(formValue.firstname);
    const sanitisedEmail = DOMPurify.sanitize(formValue.email);
    const sanitisedSubject = DOMPurify.sanitize(formValue.subject);
    const sanitisedMessage = DOMPurify.sanitize(formValue.message);

    if (!isValidEmail(sanitisedEmail)) {
      console.error("Veuillez entrez un email valide");

      setEmailValid(false);
      setTimeout(() => {
        setEmailValid(true);
      }, 2000);

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
      return;
    };

    if (
      sanitisedLastname.length < 2 ||
      sanitisedFirstname.length < 2 ||
      sanitisedEmail.length < 9 ||
      sanitisedSubject.length < 3 ||
      sanitisedMessage.length < 15
    ) {
      console.error('Bon... Faut arrêter de toucher à tous aussi !')
      return;
    }

    try {
      setFormValue({
        lastname: sanitisedLastname,
        firstname: sanitisedFirstname,
        email: sanitisedEmail,
        subject: sanitisedSubject,
        message: sanitisedMessage,
      });
      
      console.log("message", sanitisedLastname);
      console.log("message", sanitisedFirstname);
      console.log("message", sanitisedEmail);
      console.log("message", sanitisedSubject);
      console.log("message", sanitisedMessage);
    } catch (err) {
      console.error(err, "Une erreur est survenu durant le processus.");
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return {
    handleChange,
    handleSubmit,
    emailValid
  };
};

export default useForm;
