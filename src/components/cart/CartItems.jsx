// CartItems.jsx
import { useContext } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ContextCart } from '../context/ContextCart';

const CartItems = () => {
  const { cart, clearCart, getSubTotalProductById, getIvaProductById } = useContext(ContextCart);

  return (
    <Stack spacing={2}>
      {cart.map((product) => (
        <Card key={product.id} sx={{ display: 'flex', p: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100, objectFit: 'cover' }}
            image={product.image? product.image : 'https://via.placeholder.com/220'}
            alt={product.name}
          />
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Cantidad: {product.quantity}
              </Typography>
              <Typography variant="body2">
                Subtotal: ${getSubTotalProductById(product.id)}
              </Typography>
              <Typography variant="body2">
                IVA: ${getIvaProductById(product.id)}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
              <IconButton onClick={() => clearCart(product.id)} color="error">
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default CartItems