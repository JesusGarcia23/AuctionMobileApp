import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const Signup = (props) => {

    const [ email, setEmail ] = useState("");

    const [ password, setPassword ] = useState("");

    const handleEmailInput = (e) => {
      e.preventDefault();
      setEmail(e.nativeEvent.text);

    }

    const handlePsswrdInput = (e) => {
      e.preventDefault();
      setPassword(e.nativeEvent.text);

    }

    const signupUser = () => {
      api.post('/signup', {email, password})
      .then(newUser => {
        console.log(newUser);
      }).catch(err => {
        console.log(err)
      });

      }
  
    return(
        <View style={styles.container}>

        <Text style={styles.title}>Sign Up</Text>

        <Text>Email</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => handleEmailInput(e)} value={email}/>

        <Text>Password</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => handlePsswrdInput(e)} value={password}/>
        <Button title='Sign up' onPress={signupUser}/>
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