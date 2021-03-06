import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Input, Spinner, TextInputLayout } from './common';
import { checkInEidChanged, checkInUser, getEmployeeCount } from '../actions';


export class MyComponent extends Component {

  onEidChange(text) {
    this.props.checkInEidChanged(text);
  }

  onButtonPress() {
    const { eidCheckIn } = this.props;
    Keyboard.dismiss();
    console.log("onButtonPress:  "+eidCheckIn);
    this.props.checkInUser({ eidCheckIn });
    this.props.getEmployeeCount();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button style={styles.buttonStyle}
        onPress={this.onButtonPress.bind(this)}
        buttonTextStyle={styles.buttonTextStyle}>
        CHECK IN
      </Button>
    );
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps='always'
        >

        <View style={styles.appBarContainer}>
          <TouchableWithoutFeedback onPress={() => Actions.pop()}>
            <Image style={styles.backButtonStyle} source={require('../images/Back.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.appTitleTextStyle}>Employee Check-In</Text>
        </View>
        <View style={{ alignSelf: 'center', height: 5, width: 25, marginBottom: 25, backgroundColor: '#F6AF32' }}/>

        <Card style={{ marginTop: 90 }}>
          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}
            >
              <TextInput
                  autoFocus
                  style={styles.textInput}
                  value={this.props.eidCheckIn}
                  placeholder={'Employee ID'}
                  keyboardType="numeric"
                  maxLength={4}
                  onChangeText={this.onEidChange.bind(this)}
                  onSubmitEditing={this.onButtonPress.bind(this)}
              />
            </TextInputLayout>
          </CardSection>
          <CardSection style={{ marginTop: 30 }}>
            {this.renderButton()}
          </CardSection>
        </Card>

        <Image style={styles.kulizaLogoStyle} source={require('../images/kuliza_logo.png')} />

      </ScrollView>
    );
  }
}

// <Input
//   label='Employee ID'
//   placeholder='0000'
//   keyboardType='numeric'
//   maxLength={4}
//   value={this.props.eidCheckIn}
//   onChangeText={this.onEidChange.bind(this)}
// />

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitleTextStyle: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 24,
    marginRight: 45,
    // lineHeight: 50,
    // alignItems: 'center',
    // alignSelf: 'center',
    textAlign: 'center',
    // textAlignVertical: 'center',
    color: '#2e2a26',
    fontWeight: '500'
  },
  kulizaLogoStyle: {
    flex: 1,
    marginTop: 150,
    width: null,
    height: 30,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
  inputLayout: {
    flex: 1,
      // marginTop: 16,
      // marginHorizontal: 36
  },
  backButtonStyle: {
    height: 25,
    width: 25,
    marginLeft: 20,
    resizeMode: 'contain'
  },
  appBarContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    justifyContent: 'center',
    borderColor: '#F8B018'
  },
  buttonTextStyle: {
    textAlign: 'center',
  }
});

const mapStateToProps = ({ checkin }) => {
  const { eidCheckIn, loading } = checkin;
  // console.log(checkin);
  return { eidCheckIn, loading };
};

export default connect(mapStateToProps, {
  checkInEidChanged, checkInUser, getEmployeeCount
})(MyComponent);
