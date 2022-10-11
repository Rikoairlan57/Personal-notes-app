import React from "react";
import LoginInput from "../components/items/Input/LoginInput";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="login-page">
      <LoginInput />
      <p>
        <Link to="/register">register</Link>
      </p>
    </section>
  );
};
export default LoginPage;
