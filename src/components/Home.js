import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, ScrollView, Text, Image, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Card, CardSection, Button } from './common';


export default class Home extends Component {

  onCheckInButtonPressed() {
    Actions.checkin();
  }
  onCheckOutButtonPressed() {
    Actions.checkout();
  }
  async logout() {
    Actions.auth({ type: 'reset' });
    await AsyncStorage.clear();
  }

  render() {
    return (
      <ScrollView>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.appTitleTextStyle}>Home</Text>
          <View style={{ height: 5, width: 25, marginBottom: 40, backgroundColor: '#F6AF32' }}/>
        </View>

        <View style={styles.employeeCountContainer}>
          <Image style={{ height: 50, width: 50, resizeMode: 'contain' }} source={require('../images/Account.png')} />
          <Text style={[styles.normalText, { fontSize: 45 }]}>12</Text>
          <Text style={[styles.normalText, { fontSize: 14, paddingTop: 5 }]}>Employees{'\n'}are checked in</Text>
        </View>

        <Card>
          <CardSection>
            <Button
              style={styles.buttonStyle}
              onPress={this.onCheckInButtonPressed.bind(this)}
              source={require('../images/checkin2.png')}
            >
            CheckIn
            </Button>
          </CardSection>
          <CardSection>
            <Button
              style={styles.buttonStyle}
              onPress={this.onCheckOutButtonPressed.bind(this)}
              source={require('../images/checkout2.png')}
              >
              CheckOut
            </Button>
          </CardSection>
        </Card>

        <TouchableWithoutFeedback onPress={this.logout.bind(this)}>
          <Image style={styles.logoutButtonStyle} source={require('../images/power2.png')} />
        </TouchableWithoutFeedback>
        <Image style={styles.kulizaLogoStyle} source={require('../images/kuliza_logo.png')} />
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  appTitleTextStyle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2e2a26',
    marginBottom: 10,
    fontWeight: '500'
  },
  normalText: {
    color: '#2e2a26',
    margin: 5,
    textAlignVertical: 'top',
  },
  employeeCountContainer: {
    marginBottom: 25,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 55
    // justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#90928F',
    marginTop: 10
  },
  logoutButtonStyle: {
    marginTop: 40,
    alignSelf: 'center',
    height: 50,
    width: 50
  },
  kulizaLogoStyle: {
    flex: 1,
    marginTop: 45,
    width: null,
    height: 30,
    resizeMode: 'contain',
  },
};
