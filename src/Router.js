import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CheckInScreen from './components/CheckInScreen'
import CheckOutScreen from './components/CheckOutScreen'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.auth()}
          rightTitle="Logout"
          key="Kuliza"
          component={Home}
          title="Kuliza"
          initial
        />
        <Scene
          key="checkin"
          component={CheckInScreen}
          title="CheckIn"
        />
        <Scene
          key="checkout"
          component={CheckOutScreen}
          title="CheckOut"
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
