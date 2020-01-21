import React, { useState, useContext, useEffect } from 'react';
import {View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImagePickerScreen = (props) => {

    const [imageToPick, setImageToPick] = useState(null);
    


    useEffect(() => {
        getPermissionAsync();
      }, []);

    const getPermissionAsync = async() => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        setHasPermission(status === 'granted')
       
    }

    const selecPicture = async () => {
        let result;
        if(hasPermission) {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
            });

            
        }else {
          getPermissionAsync();
        }
    }



    return (
        <View>
        <Button title='Click to choose' onPress={() => {selecPicture()}}></Button>
        </View>
    )
}

export default ImagePickerScreen;