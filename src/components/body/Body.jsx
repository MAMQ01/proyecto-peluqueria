import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import Promotions from '../promotions/Promotions';
import { products } from '../../productsMock';
/* import backgroundImage from '../../img/5503.jpg'; */
import ButtonImagesPeople from '../buttonImagesPeople/ButtonImagesPeople';
import QuiltedImageList from '../quiltedImageList/QuiltedImageList';

const Body = () => {
    return (
        <Box
            component={"main"}
            sx={{
                flexGrow: 1,
                /* backgroundImage: `url(${backgroundImage})`    'background.default', */
                backgroundColor: 'white',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            <Box
                sx={{
                    width: '100%',
                    margin: '0 auto', // Centra horizontalmente la caja
                    maxWidth: { md: '1536px' }, //Por revisar si los botones deben ocupar todo el ancho o no.
                    /* backgroundColor: 'rgba(0 , 0, 0, 0.4)' */
                    padding: { xs: 0, md: 2 }, // Espaciado interno opcional
                }}>
                <Grid
                    container
                    flexDirection={'column'}
                    sx={{
                        width: '100%',
                        gap: 2,
                        display: 'flex',
                        alignContent: 'center'
                    }}
                >
                    <Grid
                        container
                        size={12}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <Grid size={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'primary.main',
                                    textAlign: 'center',
                                    padding: 2,
                                    fontWeight: 'bold',
                                    backgroundColor: '#F2F1F3'
                                }}
                            >
                                POR TIEMPO LIMITADO
                            </Typography>
                            <Promotions products={products} interval={5000} />
                        </Grid>
                        <Grid size={12}>
                            <ButtonImagesPeople />
                        </Grid>
                        <Grid
                            size={12}
                            sx={{
                                width: '100%', // Asegura que ocupe el ancho completo
                                display: 'flex',
                                justifyContent: 'center', // Centra el contenido horizontalmente si es necesario
                                alignItems: 'center', // Centra verticalmente si es necesario
                                padding: { xs: 0, md: 2 }, // Espaciado opcional
                            }}
                        >
                            <QuiltedImageList
                                sx={{
                                    width: '100%', // Asegura que se ajuste al contenedor padre
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Grid
                        container
                        size={12}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                    </Grid>
                </Grid>
                <Grid size={6}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}>
                    <ButtonImagesPeople />
                </Grid>
                <Grid size={12}
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}>
                    <QuiltedImageList />
                </Grid>
            </Box>
        </Box>
    );
};


export default Body;