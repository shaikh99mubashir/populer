import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/aboutbanner2.png'

export default function MediaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Gill Sans" }}>
          blogs
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Gill Sans" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ fontFamily: "Gill Sans" }}>Share</Button>
        <Button size="small" sx={{ fontFamily: "Gill Sans" }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}