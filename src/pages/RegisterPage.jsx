import React from "react";
import RegisterInput from "../components/items/Input/RegisterInput";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="input-register">
      <RegisterInput />
      <p>
        <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
