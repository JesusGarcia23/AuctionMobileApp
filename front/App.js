import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider, Context, SecondContext } from './hookAndContext/context';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ManageHeader from './components/ManageHeader';
import Header from './components/Header';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CreateScreen from './screens/CreateScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManageScreen from './screens/ManageScreen';
import SearchAuct from './screens/SearchAuct';
import ListAuct from './screens/SearchAuct';


class App extends Component {

  render(){
    return (
    <Provider>
    <AppContainer/>
    </Provider>
    )
  }
}


// MAIN/AUTHORIZATION SCREEN AND ROUTES
const authStack = createStackNavigator({
  // AuthLoading: {screen: AuthLoadingScreen},
  Welcome: {screen: MainScreen},
  Login: {screen: Login},
  Signup: {screen: Signup},
}, {
  defaultNavigationOptions:{
    headerTitle: ""
  }
})

//ELEMENT OF BOTTOM TAB NAVIGATOR FEED SHOWING ALL THE AUCTIONS GOING ON
const FeedStack = createStackNavigator({
  Feed: {screen: ListAuct,
    navigationOptions: ({navigation}) => ({
      header: () => <Header data={navigation.state}/>
    }), 
  }
});

//ELEMENT OF BOTTOM TAB NAVIGATOR HOME
const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen,
    navigationOptions:({navigation}) => ({
      header: () => <Header data={navigation.state}/>
    }), 
  }
});

//ELEMENT OF BOTTOM TAB NAVIGATOR WHERE SHOWS AUCTS USER IS PARTICIPATING, DOING, DONE
const ManageStack = createStackNavigator({
  Manage: {screen: ManageScreen,
     navigationOptions:{
       header: () => <Context>{ctx => <ManageHeader data={ctx}/>}</Context>
     },
    }
});

//ELEMENT OF BOTTOM TAB NAVIGATOR SHOWS ACTUAL USER PROFILE
const ProfileStack = createStackNavigator({
  Profile: {screen: ProfileScreen}
})

//ELEMENT OF BOTTOM TAB NAVIGATOR TO CREATE NEW ITEM
const createStack = createStackNavigator({
  Create: {screen: CreateScreen}
})

//BOTTOM TAB NAVIGATOR
const BottomTabNavigator = createBottomTabNavigator({
FeedStack,
HomeStack,
createStack,
ManageStack,
ProfileStack,
})

const BottomStackNavigator = createStackNavigator({
  BottomTabNavigator: BottomTabNavigator
},
{
    defaultNavigationOptions:{
      headerTitle: "",
      headerTransparent: true
    }
})

// THIS IS THE STACK AFTER LOG IN IS SUCCESFULL
const AppStack = createStackNavigator({
  Dashboard: {screen: BottomStackNavigator},
}, 
{
  defaultNavigationOptions:{
    headerTitle: "",
    headerTransparent: true
  }
})


// SWITCH NAVIGATOR
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: authStack},
  App: {screen: AppStack}
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;

// ({screenProps, navigation}) => <Consumer>{ctx => <Signup data={ctx} navigation={navigation} />} </Consumer> 









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