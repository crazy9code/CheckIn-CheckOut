import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import codePush from 'react-native-code-push';

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
