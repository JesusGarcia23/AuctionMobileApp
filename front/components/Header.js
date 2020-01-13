import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';

const Header = (props) => {

    return(
    <View style={haderStyle}>
    <Text style={{color: 'red'}}>Hello Header</Text>
    <TextInput style={{height: 40, width: 250, borderWidth: 0.5}}></TextInput>
    </View>
    )
}


//HEADER STYLESHEET
const haderStyle = {
    flex: 1, 
    flexDirection: 'row', 
    width: Dimensions.get('window').width, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    backgroundColor: 'blue',
    top: 0, 
    left: 0, 
    height: 120, 
    marginTop: 0,
  };

export default Header;