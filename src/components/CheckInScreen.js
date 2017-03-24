import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { checkInEidChanged, checkInUser } from '../actions';


export class MyComponent extends Component {

  onEidChange(text) {
    this.props.checkInEidChanged(text);
  }

  onButtonPress() {
    const { eidCheckIn } = this.props;
    Keyboard.dismiss();
    console.log("onButtonPress:  "+eidCheckIn);
    this.props.checkInUser({ eidCheckIn });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Check In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Employee ID'
            placeholder='0000'
            keyboardType='numeric'
            maxLength={4}
            value={this.props.eidCheckIn}
            onChangeText={this.onEidChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ checkin }) => {
  const { eidCheckIn, loading } = checkin;
  console.log(checkin);
  return { eidCheckIn, loading };
};

export default connect(mapStateToProps, {
  checkInEidChanged, checkInUser
})(MyComponent);
