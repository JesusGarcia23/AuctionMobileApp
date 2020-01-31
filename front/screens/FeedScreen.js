import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ListAuct = (props) => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];


      const Item = ({ title }) => {
          return (
              <View style={styles.item}>
              <Text>{title}</Text>
              </View>
          )
      }

    return(
        <View style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'red',
      top: 30,
  
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 30,
        marginVertical: 16,
        marginHorizontal: 16,
      },
    text: {
        color: 'red',
    },
    list: {
      
    }
  });

export default ListAuct;


//import {Context} from '../hookAndContext/context';