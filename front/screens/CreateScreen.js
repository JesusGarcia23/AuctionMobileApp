import React, { useState, useEffect, useContext, useCallback } from 'react';
import {View, Text, Image, Button} from 'react-native';
import { Context } from '../hookAndContext/context';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateScreen = (props) => {

    const createContext = useContext(Context);

    const { imageProduct } = createContext;

    let preview = imageProduct ? imageProduct.uri : null;

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        getPermissionAsync();
    }, [])

    const getPermissionAsync = async() => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        setHasPermission(status === 'granted')
       
    }

    const goToCamera = () => {
        props.navigation.navigate('Camera');
    }

    const goToGallery = async() => {
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
          <Text>No permission</Text>
        }
    }


return(
    <View>
    <Image style={{width: 150, height: 150}} source={{uri: `${preview}`}}/>
    <Text>Create</Text>
    <Button title='Take a picture' onPress={() => goToCamera()}/>
    <Button title='Choose a picture from gallery' onPress={() => goToGallery()}/>
    <Button title='Continue' onPress={()=> props.navigation.navigate('CreateTwo')}></Button>
    </View>
)
}

export default CreateScreen;