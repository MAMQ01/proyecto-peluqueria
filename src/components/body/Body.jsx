import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import Promotions from '../promotions/Promotions';
import { products } from '../../productsMock';
import backgroundImage from '../img/5503.jpg';
import ButtonImagesPeople from '../buttonImagesPeople/ButtonImagesPeople';

const Body = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <Grid
                container
                direction="column"
                sx={{
                    width: {xs: '80%', md: '70%'},
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    maxWidth: '1536px', // Ajusta según necesites
                    padding: { xs: 2, md: 3 },
                    gap: 2, // Espaciado entre elementos,
                    alignContent: 'center'
                }}
            >
                {/* Sección de Promoción */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            mb: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        POR TIEMPO LIMITADO
                    </Typography>
                    <Promotions products={products} interval={5000} />
                </Grid>

                {/* Sección de Botones */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <ButtonImagesPeople />
                </Grid>
            </Grid>
        </Box>
    );
};


export default Body;