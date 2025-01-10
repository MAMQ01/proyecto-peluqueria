import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import ContentCutIcon from '@mui/icons-material/ContentCut';


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
                        }}>LOGO</Typography>
                </Grid>
                <Grid size={6}
                    sx={{
                        display: 'flex',
                        gap: { xs: 1, md: 2 },
                        justifyContent: { xs: 'flex-end', md: 'center' },
                        pr: { xs: 1.5, md: 'none' }
                    }}>
                    <FacebookIcon sx={{ fontSize: { md: '30px' } }} />
                    <InstagramIcon sx={{ fontSize: { md: '30px' } }} />
                    <WhatsAppIcon sx={{ fontSize: { md: '30px' } }} />
                    <YouTubeIcon sx={{ fontSize: { md: '30px' } }} />
                    <XIcon sx={{ fontSize: { md: '30px' } }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer