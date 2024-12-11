import React, { useState, useEffect } from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";

const Promotions = ({ products, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, interval);

    return () => clearInterval(timer); // Limpiar el temporizador al desmontar
  }, [products, interval]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '744px',
        aspectRatio: "4 / 3", // Relación de aspecto fija
        overflow: "hidden",
        position: "relative",
        borderRadius: 1,
        boxShadow: 3,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto", // Centrar horizontalmente
      }}
    >
      <CardMedia
        component="img"
        image={products[currentIndex].image}
        alt={products[currentIndex].name}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.40)", // Fondo oscuro semitransparente
          color: "white",
          p: 1,
        }}
      >
        <Typography variant="body1" fontWeight={600}>
          {products[currentIndex].name}
        </Typography>
        <Typography variant="body2" fontWeight="bold" color="secondary">
          ${products[currentIndex].price}
        </Typography>
      </Box>
      <Chip
        label="Oferta"
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          bgcolor: "secondary.main",
          color: "white",
          fontWeight: 600,
        }}
      />
    </Box>
  );
};

export default Promotions;
