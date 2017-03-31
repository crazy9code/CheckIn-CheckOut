import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const Button = ({ onPress, children, style, source, buttonTextStyle }) => {
  const { buttonStyle, textStyle } = styles;

  const renderRightButton = function () {
    if (source) {
      console.log('ocsoncs');
      return (
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle} source={source} />
        </View>
      );
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, buttonTextStyle]}>
        {children}
      </Text>
      {renderRightButton()}
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'auto',
    color: '#2e2a26',
    fontSize: 18,
    fontWeight: '500',
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  iconContainer: {
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  iconStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    padding: 20,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#90918F',
    justifyContent: 'flex-start',
    alignItems: 'center'
    // marginLeft: 5,
    // marginRight: 5
  }
};

export { Button };
