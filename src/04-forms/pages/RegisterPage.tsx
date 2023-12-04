import { ChangeEvent, useState } from "react";
import "../styles/styles.css";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "Francisco",
    email: "frankjose00@gmail.com",
    password: "Abc1234!",
    passwordRepeat: "Abc1234!",
  });

  const { email, name, password, passwordRepeat } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={passwordRepeat}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;
