import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import LoginForm from '../loginForm/LoginForm';
import AdminDashboard from '../adminDashBoard/AdminDashboard'; // Asumiendo que el código del dashboard está en este componente

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay una sesión guardada
    const savedSession = localStorage.getItem('adminSession');
    if (savedSession) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    // Aquí deberías hacer una llamada a tu API para verificar las credenciales
    // Por ahora, usaremos valores hardcodeados para demostración
    const correctUsername = process.env.REACT_APP_ADMIN_USERNAME;
    const correctPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('adminSession', 'true');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminSession');
  };

  return (
    <Box>
      {isAuthenticated ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </Box>
  );
};

export default Login;
