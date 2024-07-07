import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Email: ${email}, Password: ${password}`);
  };

  const handleSignUp = () => {
    alert('Sign Up button clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-placeholder">Logo</div>
        <h2>Sign In</h2>
        <form id="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email or mobile phone number</label>
            <input type="text" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="terms">
          By continuing, you agree to our <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>
        <a href="#" className="help-link">Need help?</a>
        <hr />
        <p className="new-to">New to our site?</p>
        <button className="signup-button" onClick={handleSignUp}>Create your account</button>
      </div>
    </div>
  );
};

export default LoginPage;
