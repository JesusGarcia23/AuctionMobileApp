import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button} from 'react-native';
import { Context } from '../hookAndContext/context';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateScreen = (props) => {

    const createContext = useContext(Context);

    console.log(createContext);

    const { imageProduct } = createContext;
    const [hasPermission, setHasPermission] = useState(null);

    const getPermissionAsync = async() => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        setHasPermission(status === 'granted')
       
    }

    const goToCamera = () => {
        props.navigation.navigate('Camera');
    }

    const goToGallery = async() => {
        getPermissionAsync();
        if(hasPermission) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
            });

            const { updatePicture } = createContext;

            updatePicture(result, props);
        }else {
          getPermissionAsync();
        }
    }


return(
    <View>
    <Image style={{width: 150, height: 150}} source={{uri: `${imageProduct}`}}/>
    <Text>Create</Text>
    <Button title='Take a picture' onPress={() => goToCamera()}/>
    <Button title='Choose a picture from gallery' onPress={() => goToGallery()}/>
    </View>
)
}

export default CreateScreen;