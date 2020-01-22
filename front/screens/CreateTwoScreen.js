import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button, TextInput, Switch, Slider, Picker} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Context } from '../hookAndContext/context';

const CreateTwoScreen = (props) => {

    const createContext = useContext(Context);

    const [isCheck, setCheck] = useState("");

    console.log(createContext);

    const { imageProduct } = createContext;

    const checkTheBox = (event, option) => {
       setCheck(option);
    
    }

return(
    <View style={{}}>
    <Image style={{width: 150, height: 150}} source={{uri: `${imageProduct}`}}/>
    <Text>Title</Text>
    <TextInput style={{height: 40, width: 250, borderWidth: 0.5}}></TextInput>
    <Text>Condition</Text>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'space-around'}}>

    <View style={{alignItems: 'center', width: 40}}>
    <Text>Other</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'none', width: 40}}
    checked={isCheck === 'Other'}
    onPress={() => checkTheBox('Other')}/>
    </View>

    <View style={{alignItems: 'center', width: 60}}>
    <Text>Used</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'none', width: 80}}
    checked={isCheck === 'Used'}
    onPress={() => checkTheBox('Used')}/>
    </View>

    <View style={{alignItems: 'center', width: 80}}>
    <Text>Open Box</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'none', width: 80}}
    checked={isCheck === 'Open Box'}
    onPress={() => checkTheBox('Open Box')}/>
    </View>

    <View style={{alignItems: 'center', width: 100}}>
    <Text>Refurbished</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'none', width: 80}}
    checked={isCheck === 'Refurbished'}
    onPress={() => checkTheBox('Refurbished')}/>
    </View>

    <View style={{alignItems: 'center', width: 60}}>
    <Text>New</Text>
    <CheckBox size={20} center={true} containerStyle={{backgroundColor: 'none', width: 80}}
    checked={isCheck === 'New'}
    onPress={() => checkTheBox('New')}/>
    </View>

    </View>
    <Text>Description</Text>
    <TextInput style={{height: 40, width: 250, borderWidth: 0.5}}></TextInput>

    <Button title='STEP 3' onPress={()=> props.navigation.navigate('CreateThree')}></Button>
    </View>
)
}

export default CreateTwoScreen;