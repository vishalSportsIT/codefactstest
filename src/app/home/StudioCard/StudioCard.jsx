import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StudioCard = () => {
  return (
    <div className='studio-bar mx-2 my-2'>
       <Card sx={{ display: 'flex' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        {/* Left Side - Image */}
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          sx={{ width: '40%', height: '100%', objectFit: 'cover' }}
        />

        {/* Right Side - Content */}
        <CardContent sx={{ flex: '1' }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
          
          {/* Location and Rating in the same row */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="body2" color="text.secondary">
              Location: New York
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: ★★★★☆
            </Typography>
          </Box>

          {/* Tools and Cost */}
          <Typography variant="body2" color="text.secondary" mb={1}>
            Tools: Camera, Tripod, Lights
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Cost: $200
          </Typography>

          {/* Buttons in the same row */}
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary">
              View PortFolio
            </Button>
            <Button variant="outlined" color="secondary">
              999/hr
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default StudioCard