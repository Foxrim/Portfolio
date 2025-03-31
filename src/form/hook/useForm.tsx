import { useState } from "react";

type FormValues = {
  lastname: string | "";
  firstname: string | "";
  email: string | "";
  subject: string | "";
  message: string | "";
};

const useForm = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    lastname: "",
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSafe, setIsSafe] = useState<boolean>();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue.lastname);
  };

  const verifyChactere = (text: string): boolean => {
    const safe = !(text.includes("<") || text.includes(">"));
    setIsSafe(safe);
    return safe;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formValue.message && verifyChactere(formValue.message)) {
      console.log(isSafe, "ok");
      console.log("lastname:", formValue.lastname);
      console.log("firstname:", formValue.firstname);
      console.log("email:", formValue.email);
      console.log("subject:", formValue.subject);
      console.log("message:", formValue.message);
    } else {
      console.log("not safe");
      return;
    }
    setFormValue({
      lastname: formValue.lastname,
      firstname: formValue.firstname,
      email: formValue.email,
      subject: formValue.subject,
      message: formValue.message,
    });
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useForm;
