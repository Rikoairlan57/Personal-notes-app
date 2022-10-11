import React from "react";

const LoginInput = () => {
  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
      <button type="button">Login</button>
    </div>
  );
};

export default LoginInput;
