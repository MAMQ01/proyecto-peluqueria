import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'inherit',
                width: '100%'
            }}
        >
            <Grid container
                sx={{
                    padding: { xs: '1.5rem 0 1.5rem 0', md: '2.5rem 0 2.5rem 0' }
                }}>
                <Grid size={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: { xs: 'start', md: 'center' },
                        pl: { xs: 1.5, md: 'none' }
                    }}>
                    <ContentCutIcon
                        sx={{
                            fontSize: { md: '30px' }
                        }} />
                    <Typography
                        sx={{
                            pl: { xs: 1, md: 'none' },
                            fontSize: { md: '20px' }
                        }}>JOHANAIL'S</Typography>
                </Grid>
                <Grid size={6}
                    sx={{
                        display: 'flex',
                        gap: { xs: 1, md: 2 },
                        justifyContent: { xs: 'flex-end', md: 'center' },
                        pr: { xs: 1.5, md: 'none' }
                    }}>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                            alignItems: 'center',
                        }}
                    >
                        <FacebookIcon sx={{ fontSize: { md: '30px' } }} />
                    </Box>
                    <Box
                        component={Link}
                        to="https://www.instagram.com/JohaNails"
                        sx={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                            alignItems: 'center',
                        }}
                    >
                        <InstagramIcon sx={{ fontSize: { md: '30px' } }} />
                    </Box>
                    <Box
                        component={Link}
                        to="https://wa.me/1234567890"
                        sx={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                            alignItems: 'center',
                        }}
                    >
                        <WhatsAppIcon sx={{ fontSize: { md: '30px' } }} />
                    </Box>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                            alignItems: 'center',
                        }}
                    >
                        <YouTubeIcon sx={{ fontSize: { md: '30px' } }} />
                    </Box>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                            alignItems: 'center',
                        }}
                    >
                        <XIcon sx={{ fontSize: { md: '30px' } }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer