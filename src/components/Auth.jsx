import { useState } from 'react';
import { Button, TextInput, Paper, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAuth(true);
      navigate('/companies');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Paper className='paper' >
      <Title align="center">Login</Title>
      <TextInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput className='password'
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className='button' onClick={handleLogin} fullWidth mt="md">Login</Button>
    </Paper>
  );
};

export default Auth;
