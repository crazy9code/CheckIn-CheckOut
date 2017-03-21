import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class RootComponent extends Component {
  render() {
    return (
      <View>
        <Header>Kuliza Attendance</Header>
        <LoginForm />
      </View>
    );
  }
}

export default RootComponent;
