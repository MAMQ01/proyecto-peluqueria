import { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const AppointmentBooking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log({
            name,
            email,
            date: selectedDate,
            time: selectedTime
        });
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 3,
            height: '600px' // Altura fija que coincida con el componente Promotions
        }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    maxWidth: 800,
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
                    Reserva tu Cita
                </Typography>

                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <TextField
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            sx={{ flex: 1, minWidth: '250px' }}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            sx={{ flex: 1, minWidth: '250px' }}
                        />
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Box sx={{ flex: 1, minWidth: '250px' }}>
                                <DateCalendar
                                    value={selectedDate}
                                    onChange={setSelectedDate}
                                    disablePast
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                            <Box sx={{ flex: 1, minWidth: '250px' }}>
                                <TimePicker
                                    label="Hora"
                                    value={selectedTime}
                                    onChange={setSelectedTime}
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                        </Box>
                    </LocalizationProvider>

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        size="large"
                        sx={{
                            mt: 2,
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark'
                            }
                        }}
                    >
                        Confirmar Reserva
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default AppointmentBooking;
