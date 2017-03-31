import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    padding: 10,
    // paddingRight: 20,
    // paddingLeft: 20,
    // paddingTop: 70,
    // paddingBottom: 70
  }
};

export { Card };
