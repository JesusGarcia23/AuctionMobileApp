import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button} from 'react-native';
import { Context } from '../hookAndContext/context';

const CreateScreen = (props) => {

    const createContext = useContext(Context);

    console.log(createContext);

    const { imageProduct } = createContext;

    const askPermission = () => {
        props.navigation.navigate('Camera');
    }


return(
    <View>
    <Image style={{width: 50, height: 50}} source={{uri: `${imageProduct}`}}/>
    <Text>Create</Text>
    <Button title='Take a picture' onPress={() => askPermission()}/>
    <Button title='Choose a picture from gallery' onPress={() => console.log("CHOOSE PICTURE")}/>
    </View>
)
}

export default CreateScreen;