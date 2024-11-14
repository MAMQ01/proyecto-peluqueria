import { Link } from "react-router-dom"
import "./Item.css"
import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button, } from '@mui/material/';

const Item = ({ element }) => {
    return (
        <Box className="item">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 220 }}
                    image={element.image ? element.image : 'https://via.placeholder.com/220'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {element.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        €{element.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {element.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" component={Link} to={`/itemDetail/${element.category}/${element.id}`}>Learn More</Button>
                    <Button size="small" variant="outlined">Agendar</Button>
                </CardActions>
            </Card>
        </Box >
    )
}

export default Item