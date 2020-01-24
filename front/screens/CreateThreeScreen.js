import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Button, TextInput, Switch, Slider, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Context } from '../hookAndContext/context';

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
    <View style={{flexDirection:'row', alignItems: 'center' }}>
    <Text>$</Text>
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
    onChangeText={(e) => setStartPrice(e)} value={startPrice} keyboardType='numeric'></TextInput>
    </View>

    <Text>Reserve (optional)</Text>
    <Text>This is the minimal price you want the item to be sold</Text>
    <Switch onValueChange={() => setIsBuyCheck(!isBuyCheck)} value={isBuyCheck}></Switch>
    {isBuyCheck
    && <View style={{flexDirection:'row', alignItems: 'center' }}>
    
    <TextInput style={{height: 40, width: 100, borderWidth: 0.5}} 
    keyboardType='numeric' value={reserve}
    onChangeText={(e) => setReserve(e)}></TextInput>
    </View>}

    <Text>Buy it now</Text>
    <Text>Buyers can purchase immediately at this price.</Text>
    <Switch onValueChange={() => setIsReserve(!isReserve)} value={isReserve}></Switch>
    {isReserve 
    &&  <View style={{flexDirection:'row', alignItems: 'center' }}>
    
        <TextInput style={{height: 40, width: 100, borderWidth: 0.5}}
        keyboardType='numeric' value={buyNow}
        onChangeText={(e) => setBuyNow(e)}></TextInput>
        </View>}

    <Text>Auction Duration</Text>
    <Text>Days</Text>

    <View style={{alignSelf: 'center'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', width:300}}>
    <Text>1</Text><Text>2</Text><Text>3</Text><Text>4</Text><Text>5</Text><Text>6</Text><Text>7</Text>
    </View>
    
    <Slider minimumValue={1} maximumValue={7} value={1} step={1} onValueChange={(e) => setLimitDay(e)}></Slider>
    </View>

    <Button title='STEP 3' onPress={()=> props.navigation.navigate('CreateFour')}></Button>
    </View>
    </TouchableWithoutFeedback>
)
}


const styleText = {
        width: 50
   
}

export default CreateThreeScreen;