import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: (10, 14),
    gap: 8,
    width: 115.07,
    height: 30,
  },
  buttonText: {
    color: 'white',
    width: 80,
    height: 16,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 12,

    // display: flex,
    // alignItems: flex-end,
  }
});

export default MainButton;