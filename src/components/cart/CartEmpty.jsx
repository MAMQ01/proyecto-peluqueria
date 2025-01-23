// CartEmpty.jsx
import { Box, Button, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        py: 8
      }}
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
      <Typography variant="h5" color="text.secondary">
        Tu carrito está vacío
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        ¿No sabes qué elegir? Descubre nuestros servicios más populares
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        size="large"
      >
        Ver Servicios
      </Button>
    </Box>
  );
};

export default CartEmpty