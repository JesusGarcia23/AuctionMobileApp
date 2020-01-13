import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import api from '../services/api';

const Login = (props) => {

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

  const loginUser = () => {
    api.post('/login', {email, password}, {withCredentials: true})
    .then(response => {
      console.log(response.data)
      if(response.data.user){
        console.log("USER LOGGED IN!")
        props.navigation.navigate('App')
      }
       
    }).catch(err => {
      console.error(err);
    });
  };


    return(
        <View style={styles.container}>

        <Text style={styles.title}>Login</Text>

        <Text>Email</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => handleEmailInput(e)} value={email} />

        <Text>Password</Text>
        <TextInput style={{height: 40, width: 250, borderWidth: 0.5}} onChange={e => handlePsswrdInput(e)} value={password} secureTextEntry={true}/>
        <Button title='Log in' onPress={loginUser}></Button>
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