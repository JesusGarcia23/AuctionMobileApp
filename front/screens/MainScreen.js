import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from '../hookAndContext/context';


const MainScreen = (props) => {

  const mainContext = useContext(Context);

  const { currentUser } = mainContext;

  if(currentUser !== null){
      props.navigation.navigate('App');
  }else{
      props.navigation.navigate('Welcome');     
  }

    return(
        <View style={styles.container}>
        <Button title='Log In' onPress={() => props.navigation.navigate('Login')}/>
        <Button title='Sign Up' onPress={() => props.navigation.navigate('Signup')}/>
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

export default MainScreen;