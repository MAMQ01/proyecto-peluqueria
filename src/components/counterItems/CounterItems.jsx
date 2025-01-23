import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CounterItems = ({ stock, counter, handleDecrease, handleIncrease, handleAddToCart }) => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', border: 1, borderRadius: 2, borderColor: 'grey.300' }}>
      {/* <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Stock disponible: {stock}
      </Typography> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDecrease}
          disabled={stock === 0}
        >
          -
        </Button>
        <Typography variant="h6">{counter}</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleIncrease}
          disabled={stock === 0}
        >
          +
        </Button>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        disabled={stock === 0}
        fullWidth
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default CounterItems;
