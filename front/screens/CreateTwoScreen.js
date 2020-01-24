import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button, TextInput, Switch, Slider, Picker} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Context } from '../hookAndContext/context';

const CreateTwoScreen = (props) => {

    const createContext = useContext(Context);

    const [isCheck, setCheck] = useState("");

    const { imageProduct, productTitle, setProductTitle, productDescript, setProductDescript } = createContext;


    const checkTheBox = (option) => {
       setCheck(option);
    
    }

    

return(
    <View style={{}}>
    <Image style={{width: 150, height: 150}} source={{uri: `${imageProduct}`}}/>
    <Text>Title</Text>
    <TextInput style={{height: 40, width: 250, borderWidth: 0.5}}
    onChangeText={(e) => setProductTitle(e)} value={productTitle}></TextInput>
    <Text>Condition</Text>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'space-around'}}>

    <View style={{alignItems: 'center', width: 110}}>
    <Text>Does not apply</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'transparent', width: 40}}
    checked={isCheck === 'Does not apply'}
    onPress={() => checkTheBox('Does not apply')}/>
    </View>

    <View style={{alignItems: 'center', width:110}}>
    <Text>Used</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'transparent', width: 80}}
    checked={isCheck === 'Used'}
    onPress={() => checkTheBox('Used')}/>
    </View>

    <View style={{alignItems: 'center', width: 110}}>
    <Text>New</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'transparent', width: 80}}
    checked={isCheck === 'New'}
    onPress={() => checkTheBox('New')}/>
    </View>

    </View>
    <Text>Description</Text>
    <TextInput style={{height: 40, width: 250, borderWidth: 0.5}}
    onChangeText={(e) => setProductDescript(e)} value={productDescript}></TextInput>

    <Button title='Continue' onPress={()=> props.navigation.navigate('CreateThree')}></Button>
    </View>
)
}

export default CreateTwoScreen;

//props.navigation.navigate('CreateThree')