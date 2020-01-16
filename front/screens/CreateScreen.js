import React, { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native';

const CreateScreen = (props) => {

    const askPermission = () => {
        props.navigation.navigate('Camera');
    }


return(
    <View>
    <Text>Create</Text>
    <Button title='Take a picture' onPress={() => askPermission()}/>
    <Button title='Choose a picture from gallery' onPress={() => console.log("CHOOSE PICTURE")}/>
    </View>
)
}

export default CreateScreen;