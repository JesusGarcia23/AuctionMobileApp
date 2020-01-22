import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button, TextInput, Switch, Slider, Picker} from 'react-native';
import { Context } from '../hookAndContext/context';

const PickerCategoryScreen = (props) => {

    const createContext = useContext(Context);

    console.log(createContext);

    const { imageProduct } = createContext;
    const [ pickerValue, setPickerValue ] = useState('');

return(
    <View>

    </View>
)
}

export default PickerCategoryScreen;

// <Picker selectedValue={pickerValue}
// style={{height: 50, width: 100}}
// onValueChange={(itemValue, itemIndex) => {
//     setPickerValue(itemValue);
// }}>
// <Picker.Item label="Bonsai" value='Bonsai'/>
// <Picker.Item label="Plane" value='Plane'/>
// <Picker.Item label="Plane" value='Plane'/>
// <Picker.Item label="Plane" value='Plane'/>
// </Picker>