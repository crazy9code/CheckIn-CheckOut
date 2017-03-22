import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

export default class MyComponent extends Component {
  state={
    eid: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Employee ID'
            placeholder='000'
            keyboardType='numeric'
            maxLength={3}
            value={this.state.eid}
            onChangeText={eid => this.setState({ eid })}
            />
        </CardSection>
        <CardSection>
          <Button >
            Check Out
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
