import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button, TextInput, Switch, Slider, Picker, TouchableWithoutFeedback} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Context } from '../hookAndContext/context';
import { Keyboard } from 'react-native';

const CreateThreeScreen = (props) => {

    const createContext = useContext(Context);

    const [isCheck, setCheck] = useState("");

    const { imageProduct, productTitle, setProductTitle, productDescript, setProductDescript } = createContext;


return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{}}>

    <Text>Starting Price</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
    onChangeText={(e) => setProductTitle(e)} value={productTitle} keyboardType='numeric'></TextInput>

    <Text>Reserve (optional)</Text>
    <Text>This is the minimal price you want the item to be sold</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}} keyboardType='numeric'></TextInput>

    <Text>Buy it now</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
    onChangeText={(e) => setProductTitle(e)} value={productTitle} keyboardType='numeric'></TextInput>

    <Button title='STEP 3' onPress={()=> props.navigation.navigate('CreateFour')}></Button>
    </View>
    </TouchableWithoutFeedback>
)
}

export default CreateThreeScreen;