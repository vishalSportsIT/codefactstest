import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StudioCard = ({ studio }) => {
 
  const {
    name,
    location,
    description,
    pricing,
    startTime,
    endTime,
    image,
    category
  } = studio;

  

  return (
    <div className='studio-bar mx-2 my-2'>
      <Card sx={{ display: 'flex' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          
          <CardMedia
            component="img"
            height="140"
            image={image ? `${process.env.NEXT_PUBLIC_BASE_URL}${image}` : "/static/images/cards/contemplative-reptile.jpg"}
            alt={name}
            sx={{ width: '40%', height: '100%', objectFit: 'cover' }}
          />

         
          <CardContent sx={{ flex: '1' }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {description}
            </Typography>

            
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="body2" color="text.secondary">
                Location: {location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {category}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={1}>
              Availability: {startTime} - {endTime}
            </Typography>

          
            <Typography variant="body2" color="text.secondary" mb={1}>
              Pricing: {pricing}
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary">
                View Portfolio
              </Button>
              <Button variant="outlined" color="secondary">
                {pricing}
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StudioCard;
