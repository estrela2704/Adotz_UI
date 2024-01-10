import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";

import styles from "../../form/Form.module.css";

import { Context } from "../../../context/UserContext";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function HandleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}>
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          handleOnChange={HandleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={HandleChange}
        />
        <input type="submit" value="Logar" />
      </form>
      <p>
        Não tem conta? <Link to="/register">Clique aqui</Link>
      </p>
    </section>
  );
}

export default Login;
