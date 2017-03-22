import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CheckInCheckOut from './components/CheckInCheckOutScreen'

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
          key="checkinout"
          component={CheckInCheckOut}
          title="CheckInOut"
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
