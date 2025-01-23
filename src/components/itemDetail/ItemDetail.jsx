import React, { useContext, useState } from 'react';
import { ContextCart } from '../context/ContextCart';
import {
  Box, Card, CardContent, CardMedia, Divider, Typography,
  Tabs, Tab, Rating, IconButton, Tooltip
} from '@mui/material';
import Grid from "@mui/material/Grid2";
import Promotions from '../promotions/Promotions';
import { products } from '../../productsMock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CounterItemsContainer from "../counterItems/CounterItemsCountainer"
import NotFound from '../notFound/NotFound';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(ContextCart);
  const [tabValue, setTabValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return <NotFound />;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Aquí podrías implementar la lógica para guardar en favoritos
  };

  const handleShare = () => {
    // Implementar lógica para compartir
    console.log('Compartir producto');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      padding: { xs: 2, sm: 3, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Card sx={{
        maxWidth: 1200,
        width: '100%',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden'
      }}>
        <Grid container>
          {/* Imagen del producto */}
          <Grid size={{ xs: 12, md: 6 }} >
            <CardMedia
              component="img"
              height="100%"
              image={product.image || 'https://via.placeholder.com/600'}
              alt={product.name}
              sx={{ objectFit: 'cover', height: '100%' }}
            />
          </Grid>

          {/* Detalles del producto */}
          <Grid size={{ xs: 12, md: 6 }} >
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                  {product.name}
                </Typography>
                <Box>
                  <Tooltip title="Añadir a favoritos">
                    <IconButton onClick={handleToggleFavorite} color={isFavorite ? "secondary" : "default"}>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Compartir">
                    <IconButton onClick={handleShare}>
                      <ShareIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              <Typography variant="h5" color="secondary" gutterBottom>
                ${product.price.toFixed(2)} por servicio
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={4.5} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>(150 reseñas)</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body1" paragraph>
                {product.description || 'Descubre una experiencia única que resaltará tu estilo y confianza.'}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  Duración: {product.duration
                    ? product.duration > 59
                      ? `${Math.floor(product.duration / 60)} horas ${product.duration % 60} minutos`
                      : `${product.duration} minutos`
                    : 'No especificada'}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalOfferIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">Oferta especial: 15% de descuento en tu primera sesión</Typography>
              </Box>

              <Box sx={{ flexGrow: 1 }} /> {/* Espaciador flexible */}

              {/* <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleAddToCart}
                sx={{ mt: 2 }}
              >
                Reservar Ahora
              </Button> */}
              <CounterItemsContainer initialStock={product.stock} addToCart={addToCart} product={product} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Tabs de información adicional */}
      <Card sx={{ maxWidth: 1200, width: '100%', mt: 4, boxShadow: 3, borderRadius: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Detalles" />
          <Tab label="Reseñas" />
          <Tab label="Políticas" />
        </Tabs>
        <CardContent>
          {tabValue === 0 && (
            <Typography>
              Información detallada sobre el servicio, técnicas utilizadas, beneficios, etc.
            </Typography>
          )}
          {tabValue === 1 && (
            <Typography>
              Reseñas de clientes y calificaciones detalladas.
            </Typography>
          )}
          {tabValue === 2 && (
            <Typography>
              Políticas de cancelación, reembolso y otras condiciones importantes.
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Productos relacionados */}
      <Box sx={{ mt: 6, width: '100%', maxWidth: 1200 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          También te podría interesar
        </Typography>
        <Promotions products={products} interval={5000} />
      </Box>
    </Box>
  );
};

export default ItemDetail;
