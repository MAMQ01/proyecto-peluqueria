import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <Tooltip title="Agenda con nosotros" placement="left">
      <Fab
        color="primary"
        aria-label="whatsapp"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          backgroundColor: '#25D366'
        }}
        onClick={handleClick}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
    
  );
}

export default WhatsAppButton;

/* import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <div>
      Tu contenido existente
      <FloatingWhatsApp
        phoneNumber="1234567890"
        accountName="Mi Empresa"
        allowClickAway={true}
        avatar="./path/to/your/avatar.png"
        statusMessage="Normalmente responde en 1 hora"
        chatMessage="¡Hola! ¿En qué puedo ayudarte?"
      />
    </div>
  );
}

export default App; */