import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

class CameraScreen extends React.Component{

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount(){
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({hasPermission: status === 'granted'})
    }

   async takePicture() {
        if(this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo);
            this.props.navigation.navigate('Create');
        }
    }


    render(){
        const { hasPermission, type, camera } = this.state;

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
                        this.setState({
                        type: type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    });
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={() => {this.takePicture()}}>
    
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
                </Camera>
            </View>
            );

        }
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
