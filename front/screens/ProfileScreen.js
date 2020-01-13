import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const ProfileScreen = (props) => {

    console.log(props);

    logOut = () => {
        api.delete('/logout', {withCredentials: true})
        .then(response => {
            props.navigation.navigate('Welcome');
        }).catch(err => {
            console.error(err)
        })
    }

    return(
        <View>
        <Text>Profile Screen</Text>
        <Button title='logout' onPress={logOut}></Button>
        </View>
    )
}

export default ProfileScreen