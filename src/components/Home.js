import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';


export default class MyComponent extends Component {

  onCheckInButtonPressed() {
    Actions.checkin();
  }
  onCheckOutButtonPressed() {
    Actions.checkout();
  }
  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Button onPress={this.onCheckInButtonPressed.bind(this)}>CheckIn</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onCheckOutButtonPressed.bind(this)}>CheckOut</Button>
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
