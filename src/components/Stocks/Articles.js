import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

export const Articles = (props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt = "no image found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className = "card-desc">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className = "card">
              {props.desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href={props.article}>Read full article here</a>
            </Typography>
          </CardContent>
        </Card>
      );
    
}