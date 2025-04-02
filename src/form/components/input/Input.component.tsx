import styles from "./Input.module.css";

type InputProps = {
  legend: string;
  type: string;
  placeholder: string;
  name: string;
  id: string | "";
  minLenght: number;
  maxLenght: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  formValue: { [key: string]: string };
};

export default function Input({ legend, type, placeholder, name, id, minLenght, maxLenght, onChange, formValue }: InputProps) {
  return (
    <>
      <fieldset className={styles.input} id={id}>
        <legend>{legend}</legend>
          <input type={type} placeholder={placeholder} name={name} minLength={minLenght} maxLength={maxLenght} onChange={onChange} value={formValue[name]} required />
      </fieldset>
    </>
  );
}
