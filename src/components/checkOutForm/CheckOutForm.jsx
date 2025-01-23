import React, { useState, useContext } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    InputAdornment,
    Divider,
    CircularProgress,
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { ContextCart } from '../context/ContextCart';
import CountrySelect from '../countrySelect/CountrySelect';
import { formatCurrency } from '../utils/formatCurrency';
import CartEmpty from '../cart/CartEmpty';

// Configurable constants
const DEFAULT_IVA = 0.21;
const WHATSAPP_NUMBER = '123456789'; // Replace with env variable or props

const CheckoutForm = ({ ivaRate = DEFAULT_IVA, whatsappNumber = WHATSAPP_NUMBER, messages }) => {
    const { cart, getTotalCart, clearCart } = useContext(ContextCart);

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneCode: '+1',
        phoneNumber: '',
    });
    const [loading, setLoading] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateTotalDuration = () => {
        return cart.reduce((total, item) => total + ((item.duration ?? 5) * item.quantity), 0); // Default 5 minutos
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const subtotal = getTotalCart();
        const iva = subtotal * ivaRate;
        const total = subtotal + iva;
        const estimatedTime = calculateTotalDuration();

        const order = {
            ...formData,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                duration: item.duration || 0,
            })),
            subtotal,
            iva,
            total,
            estimatedTime,
            createdAt: new Date(),
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderNumber(docRef.id);
            clearCart();
        } catch (error) {
            console.error('Error al crear la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppTracking = () => {
        const message = `Hola, quiero confirmar el estado de mi orden #${orderNumber}. Gracias!`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (orderNumber) {
        return (
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>{messages?.orderConfirmed || '¡Orden Confirmada!'}</Typography>
                <Typography variant="h6" gutterBottom>{`${messages?.orderNumber || 'Número de Orden:'} ${orderNumber}`}</Typography>
                <Typography paragraph>{messages?.thankYouMessage || 'Gracias por tu compra. Hemos enviado un correo electrónico con los detalles de tu orden.'}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleWhatsAppTracking}
                    sx={{ mt: 2 }}
                >
                    {messages?.trackOrder || 'Seguir Pedido por WhatsApp'}
                </Button>
            </Paper>
        );
    }

    if (cart.length > 0) {
        return (
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>{messages?.contactInfo || 'Información de Contacto'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={messages?.firstName || 'Nombre'}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={messages?.lastName || 'Apellido'}
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={messages?.email || 'Correo Electrónico'}
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CountrySelect
                                value={formData.country}
                                onChange={(country) => setFormData({ ...formData, phoneCode: `+${country.phone}` })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={messages?.phoneNumber || 'Número de Teléfono'}
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {formData.phoneCode}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
    
                    <Divider sx={{ my: 4 }} />
    
                    <Typography variant="h6" gutterBottom>{messages?.orderSummary || 'Resumen del Pedido'}</Typography>
                    {cart.map((item) => (
                        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography>{item.name} x {item.quantity}</Typography>
                            <Typography>{formatCurrency(item.price * item.quantity)}</Typography>
                        </Box>
                    ))}
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>{messages?.subtotal || 'Subtotal'}</Typography>
                        <Typography>{formatCurrency(getTotalCart())}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>{`${messages?.iva || 'IVA'} (${ivaRate * 100}%)`}</Typography>
                        <Typography>{formatCurrency(getTotalCart() * ivaRate)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6">{messages?.total || 'Total'}</Typography>
                        <Typography variant="h6">{formatCurrency(getTotalCart() * (1 + ivaRate))}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography>{messages?.estimatedTime || 'Tiempo Estimado'}</Typography>
                        <Typography>{calculateTotalDuration()} {messages?.minutes || 'minutos'}</Typography>
                    </Box>
    
    
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                        sx={{ mt: 3 }}
                    >
                        {loading ? <CircularProgress size={24} /> : messages?.confirmOrder || 'Confirmar Pedido'}
                    </Button>
                </form>
            </Paper>
        );
    } else {
        return (
            <CartEmpty />
        )
    }
};

export default CheckoutForm;
