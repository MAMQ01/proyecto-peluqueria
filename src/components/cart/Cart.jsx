// Cart.jsx
import { useContext } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { ContextCart } from '../context/ContextCart';
import CartItems from './CartItems';
import EmptyCart from './CartEmpty';
import CartSummary from './CartSummary';

const Cart = () => {
  const { cart } = useContext(ContextCart);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Mi Carrito
      </Typography>
      
      {cart.length > 0 ? (
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <CartItems />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
          <Box sx={{ width: { xs: '100%', md: '380px' } }}>
            <CartSummary />
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;