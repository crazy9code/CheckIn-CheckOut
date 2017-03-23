import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { checkInEidChanged, checkInUser } from '../actions';


export class MyComponent extends Component {

  onEidChange(text) {
    this.props.checkInEidChanged(text);
  }

  onButtonPress() {
    const { eid } = this.props;

    this.props.checkInUser({ eid });
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
            placeholder='000'
            keyboardType='numeric'
            maxLength={3}
            value={this.props.eid}
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
  const { eid, loading } = checkin;
  console.log(checkin);
  return { eid, loading };
};

export default connect(mapStateToProps, {
  checkInEidChanged, checkInUser
})(MyComponent);
