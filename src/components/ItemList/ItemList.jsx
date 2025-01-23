
import React from 'react'
import Item from '../item/Item'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={3}>
        {items.map((service) => (
          <Grid key={service.id} size={12} sm={6} md={4} lg={3}>
            <Item element={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList