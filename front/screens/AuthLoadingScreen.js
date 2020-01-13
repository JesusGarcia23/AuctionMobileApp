import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { Context } from '../hookAndContext/context';

const AuthLoadingScreen = (props) => {

    const mainContext = useContext(Context);

    const { user } = mainContext;

    if(user !== null){
        props.navigation.navigate('App');
    }

    //  checkUser()
    
    return(
        <View>
        <Text>Loading...</Text>
        </View>
    )

}

export default AuthLoadingScreen;