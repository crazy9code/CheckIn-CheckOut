import React from 'react';
import { AsyncStorage, Image, Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CheckInScreen from './components/CheckInScreen';
import CheckOutScreen from './components/CheckOutScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.sceneStyle} hideNavBar>
      <Scene key="auth" >
        <Scene key="login" sceneStyle={{ paddingTop: 10 }} component={LoginForm} title="Kuliza Check io" />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="logout"
          key="Kuliza"
          component={Home}
          title="Kuliza Check io"
          initial
        />
        <Scene
          key="checkin"
          component={CheckInScreen}
          title="Employee Check In"
        />
        <Scene
          key="checkout"
          component={CheckOutScreen}
          title="Employee Check Out"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: '#ed9a15'
  },
  sceneStyle: {
    paddingTop: 50,
    // backgroundColor: '#DDDDDD'
  },
}

export default RouterComponent;
