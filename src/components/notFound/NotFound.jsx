// NotFound.jsx
import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: 3
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
      <Typography variant="h4" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        size="large"
      >
        Volver al Inicio
      </Button>
    </Box>
  );
};

export default NotFound