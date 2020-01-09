import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider, Consumer } from './hookAndContext/context';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SearchAuct from './screens/SearchAuct';


class App extends Component {

  render(){
    return <AppContainer/>
  }
}

const authStack = createStackNavigator({
  Welcome: {screen: MainScreen},
  Login: {screen: Login},
  Signup: {screen: Signup},
}, {
  defaultNavigationOptions:{
    headerTitle: ""
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: authStack},
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;













//OLD VERSION

// const authStack = createStackNavigator({
//   Login: { 
//     screen: Login 
//   },
//   Register: { 
//     screen: Signup 
//   }
// });

// const SearchStack = createStackNavigator({
//   Search: {
//     screen: ({screenProps, navigation}) => <Consumer>{context => <SearchAuct data={context} navigation={navigation}/>}</Consumer>
//   }
// })

// const HomeStack = createStackNavigator({
//   Home: {
//     screen: ({screenProps, navigation}) => <Consumer>{context => <HomeScreen data={context} navigation={navigation}/>}</Consumer>
//   },
//   Hello: {
//     screen: ({screenProps, navigation}) => <Consumer>{context => <HomeScreen data={context} navigation={navigation}/>}</Consumer>
//   }
// })

// const BottomStack = createBottomTabNavigator({
//   Home: {
//     screen: HomeStack
//   },
//   Search: {
//     screen: SearchStack
//   },
// });

// const AppNavigator = createDrawerNavigator({
//   Auth: {
//     screen: authStack
//   },
//   Footer: {
//     screen: BottomStack
//   }
// });

// const Nav = createAppContainer(AppNavigator)

// const App = createBottomTabNavigator({
//   Home: {screen: HomeStack},
//   Search: { screen: SearchStack},
//   Settings: { screen: HomeStack},
// })

//  const App = (props) => {
//   return (
//     <Provider>
//      <Consumer>
//     {context => {
//       return (<Nav {...props} value={context}/>)
//     }}
//      </Consumer>
//     </Provider>

//   );
// }


// export default createAppContainer(App);