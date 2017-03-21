'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        elevation: 8,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },

    displayText: {
        color: '#000000',
        fontSize: 58,
        fontWeight: 'normal',
        textAlign: 'right',
        padding: 10
    },

    displayTextResult: {
        color: '#6d6d6d',
        fontSize: 38,
        fontWeight: 'normal',
        textAlign: 'right',
        padding: 10
    },

    inputContainer: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: '#434343'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },


    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    containerMiddleTwo: {
      flex: 4,
      backgroundColor: '#636363',
    },
    containerMiddleThree: {
      flex: 1,
      backgroundColor: '#1DE9B6',
    },
    containerMiddleOne: {
      flex: 12,
      backgroundColor: '#434343',
    },
});

export default Style;
