import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';


export default class MyComponent extends Component {

  onButtonPressed() {
    Actions.checkinout();
  }
  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)}>CheckIn</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)}>CheckOut</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
