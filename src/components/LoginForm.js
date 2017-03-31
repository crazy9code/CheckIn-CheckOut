import React, { Component } from 'react';
import { Text, Image, Keyboard, ScrollView, View, AsyncStorage, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, TextInputLayout } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
    this.getToken();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
  }

  async getToken() {
    try {
      const value = await AsyncStorage.getItem('@KulizaAttendance:access_token');
      console.log(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
        Actions.main({ type: 'reset' });
      } else {
        this.setState({ loggedIn: false });
      }
    } catch (error) {
      this.setState({ loggedIn: false });
      // Error retrieving data
    }
  }


  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        style={styles.buttonStyle}
        onPress={this.onButtonPress.bind(this)}
        source={require('../images/front2.png')}
        buttonTextStyle={styles.buttonTextStyle}
        >
        LOGIN
      </Button>
    );
  }

  renderContent() {
    if (this.state.loggedIn === null) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner size="large" />
        </View>
      );
    }
    return (
      <ScrollView>

        <Image style={styles.kulizaLogoStyle} source={require('../images/kuliza_logo.png')} />

        <Text style={[styles.appTitleTextStyle, { fontSize: 24, marginTop: 55, fontWeight: '500' }]}>IN - OUT</Text>
        <Text style={[styles.appTitleTextStyle]}>Register</Text>

        <View style={{ alignSelf: 'center', height: 5, width: 25, marginTop: 10, backgroundColor: '#F6AF32' }}/>

        <Card style={{ marginTop: 15 }}>
          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}
            >
              <TextInput
                  style={styles.textInput}
                  value={this.props.email}
                  placeholder={'ID'}
                  keyboardType="numeric"
                  onChangeText={this.onEmailChange.bind(this)}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 5 }}>
            <TextInputLayout
              style={styles.inputLayout}
            >
              <TextInput
                  style={styles.textInput}
                  value={this.props.password}
                  placeholder={'Password'}
                  secureTextEntry
                  onChangeText={this.onPasswordChange.bind(this)}
              />
            </TextInputLayout>

          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection style={{ marginTop: 40 }}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </ScrollView>
      );
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    color: '#EB262C'
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kulizaLogoStyle: {
    flex: 1,
    width: null,
    height: 55,
    marginTop: 45,
    padding: 10,
    resizeMode: 'contain',
    // marginTop: 15
  },
  appTitleTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2e2a26',
    marginTop: 0,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    height: 40,
  },
  inputLayout: {
    flex: 1,
      // marginTop: 16,
      // marginHorizontal: 36
  },
  buttonStyle: {
    justifyContent: 'center',
    borderColor: '#F8B018',
  },
  buttonTextStyle: {
    textAlign: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
