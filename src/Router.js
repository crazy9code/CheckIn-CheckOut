import React from 'react';
import { AsyncStorage } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CheckInScreen from './components/CheckInScreen';
import CheckOutScreen from './components/CheckOutScreen';

const RouterComponent = () => {
  const logout = async() => {
    Actions.auth({ type: 'reset' });
    await AsyncStorage.clear();
  };

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Kuliza Check io" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => { logout(); }}
          rightTitle="Logout"
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
export default RouterComponent;
