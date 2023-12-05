import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
  const { email, name, password, passwordRepeat, formData, onChange } = useForm(
    {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
    }
  );

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
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={passwordRepeat}
          name="passwordRepeat"
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;
