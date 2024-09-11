import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import Auth from './components/Auth';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/companyDetails';
import CompanyForm from './components/companyForm';
import './App.css';
import Logout from './components/Logout';

function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth setAuth={setAuth} />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/new" element={<CompanyForm />} />
        <Route path="/companies/:id" element={<CompanyDetails />} />
        <Route path="/companies/:id/edit" element={<CompanyForm />} />
        <Route path="/logout" element={<Logout />} />

        
      </Routes>
    </div>
  );
}

export default App;
