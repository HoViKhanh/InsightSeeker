import React from 'react';

const Login: React.FC = () => (
  <div>
    <form>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" required />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Login;
