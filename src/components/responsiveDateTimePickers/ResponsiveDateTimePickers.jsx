import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { Box, Button } from '@mui/material';

export default function SistemaReservas() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [reservas] = React.useState([
    '2024-12-13T10:00',
    '2024-12-13T11:00',
    '2024-12-14T15:00'
  ]);

  const esFechaDisponible = (date) => {
    // Deshabilitar fechas pasadas y fines de semana
    if (date.day() === 0 || date.day() === 6) return true;
    if (date.isBefore(dayjs(), 'day')) return true;
    
    // Verificar si la fecha está reservada
    return reservas.some(reserva => 
      dayjs(reserva).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
    );
  };

  const esHoraDisponible = (value, view) => {
    if (view !== 'hours') return false;
    
    // Horario de atención: 9:00 - 18:00
    const hora = value.hour();
    if (hora < 9 || hora > 18) return true;
    
    // Verificar si la hora está reservada
    return reservas.some(reserva => 
      dayjs(reserva).format('YYYY-MM-DDTHH:00') === value.format('YYYY-MM-DDTHH:00')
    );
  };

  return (
    <Box sx={{ maxWidth: 360, margin: 'auto' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          shouldDisableDate={esFechaDisponible}
          shouldDisableTime={esHoraDisponible}
          minutesStep={60}
          ampm={false}
          slotProps={{
            actionBar: {
              actions: ['today', 'accept', 'cancel']
            },
            toolbar: {
              hidden: false
            }
          }}
          sx={{
            '& .MuiPickersDay-daySelected': {
              backgroundColor: '#2196f3'
            }
          }}
        />
      </LocalizationProvider>
      <Button 
        fullWidth 
        variant="contained" 
        disabled={!selectedDate}
        onClick={() => {
          if (selectedDate) {
            alert(`Reserva confirmada para: ${selectedDate.format('DD/MM/YYYY HH:mm')}`);
          }
        }}
        sx={{ mt: 2 }}
      >
        Confirmar Reserva
      </Button>
    </Box>
  );
}
