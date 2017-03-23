import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';


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
        <CardSection >
          <Button style={{ height: 90 }} onPress={this.onCheckInButtonPressed.bind(this)}>CheckIn</Button>
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
