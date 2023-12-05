import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
  const {
    email,
    name,
    password,
    passwordRepeat,
    formData,
    onChange,
    resetFormData,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          value={passwordRepeat}
          name="passwordRepeat"
          onChange={onChange}
        />
        {passwordRepeat.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {passwordRepeat.trim().length > 0 && password === passwordRepeat && (
          <span>Las contraseñas deben de ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetFormData}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
