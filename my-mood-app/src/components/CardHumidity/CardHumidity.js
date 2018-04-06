import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class CardHumidity extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Room Humidity
          </Typography>
        </CardContent>
      </Card>
    )
  }
};
