import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import CheckoutForm from './CheckoutForm';
import CartSummary from './CartSummary';

const FormCheckOut = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
      <Paper sx={{ p: 3, width: '60%' }}>
        <Typography variant="h5" gutterBottom>
          Información de Contacto
        </Typography>
        <CheckoutForm />
      </Paper>
      <Box sx={{ width: '35%' }}>
        <CartSummary />
      </Box>
    </Box>
  );
};

export default FormCheckOut;
