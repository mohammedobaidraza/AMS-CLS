import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', data.token); // Store the token in localStorage
      navigate('/admin'); // Redirect to admin dashboard on successful login
    } catch (error) {
      alert('Failed to login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label><br></br>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
