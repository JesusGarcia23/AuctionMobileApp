import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login = () => {
    return(
        <View style={styles.container}>
        <Text>Hello Login</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login