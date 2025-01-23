// CartSummary.jsx
import { useContext } from 'react';
import { Box, Button, Paper, Typography, Divider } from '@mui/material';
import { ContextCart } from '../context/ContextCart';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { clearCart, getSubTotalCart, getIvaCart, getTotalCart } = useContext(ContextCart);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Resumen de Compra
      </Typography>
      <Box sx={{ my: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography>${getSubTotalCart().toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>IVA</Typography>
          <Typography>${getIvaCart().toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">${getTotalCart().toFixed(2)}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        component={Link}
        to="/checkout"
        sx={{ mb: 2 }}
      >
        Proceder al Pago
      </Button>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        onClick={() => clearCart()}
      >
        Vaciar Carrito
      </Button>
    </Paper>
  );
};

export default CartSummary