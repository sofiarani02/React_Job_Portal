import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './images/banner.jpg';
import img1 from './images/poster1.png';
import Footer from './Footer';

export default function MediaCard() {
  return (
    <div>
    <Card sx={{ width: 1350, marginLeft:'-33px', paddingTop:'45px'}}>
      <CardMedia style={{height:'250px'}}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Get Hired to the Top Companies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{marginLeft: '300px', marginTop: '20px', height:'580px', width:'800px', paddingBottom:'20px' }}>
        <CardMedia
          component="img"
          image={img1}
          alt="green iguana"
        />
    </Card>
    <Footer />
    </div>
  );
}