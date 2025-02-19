import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import hombreImg from '../../img/hombre.jpg';
import mujerImg from '../../img/mujer.jpg';
import { Link } from 'react-router-dom';

const images = [
  {
    url: hombreImg,
    title: 'Hombre',
    width: '50%',
  },
  {
    url: mujerImg,
    title: 'Mujer',
    width: '50%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  // Tamaño base (móvil)
  height: 200,
  width: '100%',

  // Tablet (sm)
  [theme.breakpoints.up('sm')]: {
    height: 250,
    width: '50%',
  },

  // Desktop (md)
  [theme.breakpoints.up('md')]: {
    height: 330,
    width: '50%',
  },

  // Large Desktop (lg)
  [theme.breakpoints.up('lg')]: {
    height: 395,
    width: '50%',
  },

  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  }
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonImagesPeople() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 255, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
        focusRipple
        key={image.title}
        style={{
          width: image.width,
        }}
        component={Link}
        to={`/${image.title.toLowerCase()}`}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}