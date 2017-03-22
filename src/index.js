import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Router from './Router';
import reducers from './reducers';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import CheckInCheckOut from './components/CheckInCheckOutScreen'
import Home from './components/Home'

class RootComponent extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
      
    );
  }
}
// ../../images/logout.png
export default RootComponent;
