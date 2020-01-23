import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button, TextInput, Switch, Slider, Picker, TouchableWithoutFeedback} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Context } from '../hookAndContext/context';
import { Keyboard } from 'react-native';

const CreateThreeScreen = (props) => {

    const createContext = useContext(Context);

    const { startPrice,
        setStartPrice,
        reserve,
        setReserve,
        limitDay,
        setLimitDay,
        buyNow,
        setBuyNow,
        isBuyCheck,
        setIsBuyCheck,
        isReserve,
        setIsReserve } = createContext;


return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{}}>

    <Text>Starting Price</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
    onChangeText={(e) => setStartPrice(e)} value={startPrice} keyboardType='numeric'></TextInput>

    <Text>Reserve (optional)</Text>
    <Text>This is the minimal price you want the item to be sold</Text>
    <Switch onValueChange={() => setIsBuyCheck(!isBuyCheck)} value={isBuyCheck}></Switch>
    {isBuyCheck
    && <TextInput style={{height: 40, width: 100, borderWidth: 0.5}} 
    keyboardType='numeric' value={reserve}
    onChangeText={(e) => setReserve(e)}></TextInput>}

    <Text>Buy it now</Text>
    <Text>Buyers can purchase immediately at this price.</Text>
    <Switch onValueChange={() => setIsReserve(!isReserve)} value={isReserve}></Switch>
    {isReserve 
    &&  <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
        keyboardType='numeric' value={buyNow}
        onChangeText={(e) => setBuyNow(e)}></TextInput>}

    <Text>Auction Duration</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}} keyboardType='numeric' value={buyNow}
    onChangeText={(e) => setBuyNow(e)}></TextInput>

    <Button title='STEP 3' onPress={()=> props.navigation.navigate('CreateFour')}></Button>
    </View>
    </TouchableWithoutFeedback>
)
}

export default CreateThreeScreen;