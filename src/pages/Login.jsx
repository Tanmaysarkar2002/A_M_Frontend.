import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(`Login successful! Welcome, ${data.user.name}`);
        setError('');
        // Optionally, handle authentication token here
      } else {
        setError(data.message || 'Login failed');
        setResponseMessage('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setResponseMessage('');
    }
  };

  return (
    <div className="login-container">
      <div className="image-side">
        {/* Replace with your image or GIF */}
        <img src="https://via.placeholder.com/500" alt="Login Illustration" />
      </div>
      <div className="form-side">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {responseMessage && <p className="success">{responseMessage}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
