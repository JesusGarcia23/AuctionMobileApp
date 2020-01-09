import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles}>
        <Text>Welcome to HomePage!</Text>
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

export default HomeScreen;