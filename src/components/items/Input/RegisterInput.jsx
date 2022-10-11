import React from "react";

const RegisterInput = () => {
  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input type="password" id="confirmPassword" />
      <button type="button">Register</button>
    </div>
  );
};

export default RegisterInput;
