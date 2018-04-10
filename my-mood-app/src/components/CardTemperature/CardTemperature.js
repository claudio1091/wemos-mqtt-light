import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class CardTemperature extends Component {
  render() {

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Room Temperature
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

