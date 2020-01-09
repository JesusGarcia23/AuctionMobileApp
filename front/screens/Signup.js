import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Signup = () => {

    const [ email, setEmail ] = useState("");

    const [ password, setPassword ] = useState("");

    const sayInfo = () => {
        alert(password);
        setEmail("");
        setPassword("");
      }
  
    return(
        <View style={styles.container}>

        <Text style={styles.title}>Sign Up</Text>

        <Text>Email</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => setEmail(e.nativeEvent.text)} value={email}/>

        <Text>Password</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => setPassword(e.nativeEvent.text)} value={password}/>
        <Button title='Sign up' onPress={sayInfo}/>
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


export default Signup