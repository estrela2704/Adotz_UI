import { useState, useContext } from "react";

import Input from "../../form/Input";
import { Link } from "react-router-dom";
import styles from "../../form/Form.module.css";

import { Context } from "../../../context/UserContext";

function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function HandleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={HandleSubmit}>
        <Input
          text="Nome"
          type="Text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={HandleChange}
        />

        <Input
          text="Telefone"
          type="Text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={HandleChange}
        />

        <Input
          text="Email"
          type="Text"
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

        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha"
          handleOnChange={HandleChange}
        />

        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  );
}

export default Register;
