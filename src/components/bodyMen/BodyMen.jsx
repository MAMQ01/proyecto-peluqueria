import { Box, styled, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const BodyMen = () => {
    const ServiceCard = styled(Card)(({ theme }) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[4]
        }
    }));

    const ServiceInfo = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px'
    });

    const services = [
        {
            title: "Corte Clásico",
            description: "Corte tradicional con tijera y máquina",
            image: 'https://via.placeholder.com/220',
            price: 25,
            duration: 30,
            size: 12
        },
        {
            title: "Barba Completa",
            description: "Perfilado y arreglo de barba",
            image: 'https://via.placeholder.com/220',
            price: 15,
            duration: 20,
            size: 12
        },
        {
            title: "Tintura",
            description: "Coloración completa",
            image: 'https://via.placeholder.com/220',
            price: 45,
            duration: 90,
            size: 12
        },
        {
            title: "Peinado",
            description: "Lavado y peinado profesional",
            image: 'https://via.placeholder.com/220',
            price: 20,
            duration: 25,
            size: 12
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid key={index} size={service.size}>
                        <ServiceCard>
                            <CardContent>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    image={service.image ? service.image : 'https://via.placeholder.com/220'}
                                /><CardMedia />
                                <Typography variant="h6" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {service.description}
                                </Typography>
                                <ServiceInfo>
                                    <AttachMoneyIcon color="primary" />
                                    <Typography variant="body1">
                                        ${service.price}
                                    </Typography>
                                </ServiceInfo>
                                <ServiceInfo>
                                    <AccessTimeIcon color="primary" />
                                    <Typography variant="body2">
                                        {service.duration} minutos
                                    </Typography>
                                </ServiceInfo>
                            </CardContent>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BodyMen;
