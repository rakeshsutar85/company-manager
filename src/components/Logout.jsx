import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


const Logout = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  if (isAuthenticated) {
    handleLogout();
  }

    return (
        <div>
            <h2>You are logged out</h2>
            <h3><a href="/">login</a></h3>
        </div>
    );
}

export default Logout