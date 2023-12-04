import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const { email, name, password, passwordRepeat } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);
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
