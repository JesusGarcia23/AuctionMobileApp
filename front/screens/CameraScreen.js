import React, { useContext, useState, useEffect } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Context } from '../hookAndContext/context';

const CameraScreen = (props) => {

    const cameraContext = useContext(Context);

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    takePicture = async () => {
        if(this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(cameraContext);
            const { updatePicture } = cameraContext;

            updatePicture(photo, props);
        }
    }

        // const { hasPermission, type } = this.state;

        if(hasPermission === null) {
            return <View />
        }
        if(hasPermission === false) {
            return <Text>No access to camera</Text>
        }

        return (
            <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={type} ref={(ref) => { this.camera = ref }}>
                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                    style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                          );
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => {takePicture()}}>
    
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
                </Camera>
            </View>
            );

    }
 export default CameraScreen;

 
    //FUNCTIONAL 
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

     // useEffect(() => {
     //     (async () => {
     //         const { status } = await Camera.requestPermissionsAsync();
     //         setHasPermission(status === 'granted');
     //       })();
     // }, []);

     // const takePicture = async () => {
     //     await Camera.takePictureAsync();
     // } 

       
//     if(hasPermission === null) {
//         return <View />
//     }
//     if(hasPermission === false) {
//         return <Text>No access to camera</Text>
//     }

//     return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   setType(
//                     type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back
//                   );
//                 }}>
//                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={takePicture}>

//               <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
// }
