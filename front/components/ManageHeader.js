import React, { useState } from 'react';
import {View, Text, TextInput, Button, Dimensions} from 'react-native';

const ManageHeader = (props) => {
    console.log("HEADER");
    console.log(props);

    const [firstBtn, setFirst] = useState(true);

    const [secondBtn, setSecond] = useState(false);

    const [thirdBtn, setThird] = useState(false);

    const changeColorStatus = (data) => {
        switch(data) {
            case 'first': {
                setFirst(true);
                setSecond(false);
                setThird(false);
                break;
            }

            case 'second': {
                setFirst(false);
                setSecond(true);
                setThird(false);
                break; 
            }

            case 'third': {
                setFirst(false);
                setSecond(false);
                setThird(true);
                break;
            }
        }
    }


        return (
    <View style={headerStyle}>
    <Text style={headerTitle}>My Auctions</Text>

    <View style={optionsContainerStyle}>
    <Button color={firstBtn ? 'red': false} title='Buying' onPress={() => changeColorStatus('first')}></Button>
    <Button color={secondBtn ? 'red': false}  title='Selling' onPress={() => changeColorStatus('second')}></Button>
    <Button color={thirdBtn ? 'red': false}  title='Wishlist' onPress={() => changeColorStatus('third')}></Button>
    </View>
    </View>
    )
}


//HEADER STYLESHEET
const headerStyle = {
    flex: 1, 
    flexDirection: 'column', 
    width: Dimensions.get('window').width, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    backgroundColor: 'blue',
    top: 0, 
    left: 0, 
    height: 130, 
    marginTop: 0,
  };

  //HEADER TITLE STYLE
const headerTitle = {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 33,
    top: 15,
    
}

  const optionsContainerStyle = {
    flex: 0,
    flexDirection: 'row',
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 40, 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    backgroundColor: 'white',
  };

export default ManageHeader;