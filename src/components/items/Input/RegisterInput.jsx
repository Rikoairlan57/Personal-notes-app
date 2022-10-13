import React from "react";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types";

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="button" onClick={onSubmitHandler}>
        Register
      </button>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterInput;
