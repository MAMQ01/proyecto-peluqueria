import { Link } from "react-router-dom"
import React from 'react'
import {
    Card, CardContent, CardMedia, Typography, Button, Box, Divider, Stack
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Item = ({ element }) => {
    return (
        <Card
            component={Link}
            to={`/agendar/${element.category}/${element.id}`}
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                transition: 'transform 0.2s',
                borderRadius: 2,
                textDecoration: 'none', // Elimina el subrayado del enlace
                color: 'inherit', // Mantiene el color de texto original
                '&:hover': {
                    transform: 'translateY(-4px)',
                    textDecoration: 'none', // Asegura que no aparezca subrayado al hacer hover
                }
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: { xs: '100%', md: '250px' },
                    height: { xs: '200px', md: '100%' },
                    objectFit: 'cover',
                    flexShrink: 0, // Evita que la imagen se encoja
                }}
                image={element.image ? element.image : 'https://via.placeholder.com/220'}
                alt={element.name}
            />

            <CardContent sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: { md: '100%' }, // Altura fija para pantallas medianas y grandes
                width: '100%', // Asegura que ocupe todo el ancho disponible
            }}>
                <Typography variant="h6" gutterBottom>
                    {element.name}
                </Typography>

                <Stack sx={{
                    width: '200px'
                }} /* spacing={2} */>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {element.description}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: 1 }}>
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                            {element.duration} minutos
                        </Typography>
                    </Box>

                    <Typography variant="h6" color="primary.main">
                        €{element.price}
                    </Typography>
                </Stack>
            </CardContent>

            <Divider />

            <Box sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', // Alinea el botón a la derecha
                width: '100%', // Asegura que ocupe todo el ancho disponible
            }}>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<EventAvailableIcon />}
                    sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        width: { xs: '100%', md: '200px' },
                    }}
                >
                    Agendar Cita
                </Button>
            </Box>
        </Card>
    );
};


export default Item