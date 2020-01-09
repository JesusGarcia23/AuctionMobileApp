import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Login = (props) => {

  const [ email, setEmail ] = useState("");

  const [ password, setPassword ] = useState("");

  const sayInfo = () => {
    setEmail("");
    setPassword("");
    props.navigation.navigate('App')
  }


    return(
        <View style={styles.container}>

        <Text style={styles.title}>Login</Text>

        <Text>Email</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => setEmail(e.nativeEvent.text)} value={email}/>

        <Text>Password</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => setPassword(e.nativeEvent.text)} value={password}/>
        <Button title='Log in' onPress={sayInfo}></Button>
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
    title: {
      fontSize: 30,
    }
  });

export default Login