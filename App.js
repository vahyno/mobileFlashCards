import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {Constants} from 'expo';
import {createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

import Decks from './components/Decks';
import AddNewDeck from './components/AddNewDeck';
import DeckDetail from './components/DeckDetail';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import EraseDecks from './components/EraseDecks';

import {white, blue, gold, purple, red} from './utils/colors';

const FlashCardStatusBar = ({backgroundColor, ...props}) => (
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
  </View>
);

const TabsIos = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarlabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-folder-open' size={25} color={tintColor} />
    }
  },
  AddNewDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarlabel: 'Add New Deck',
      tabBarIcon: ({tintColor}) => <AntDesign name='addfile' size={25} color={tintColor}/>
    }
  },
  EraseDecks: {
    screen: EraseDecks,
    navigationOptions: {
      tabBarlabel: 'Erase All Decks',
      tabBarIcon: ({tintColor}) => <Octicons name='trashcan' size={25} color={tintColor}/>
    }
  },
}, {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: blue,
      style: {
        height: 50,
        backgroundColor: gold,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1
      }
    }
});

const TabsAndroid = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarlabel: 'Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='library' size={25} color={tintColor} />
    }
  },
  AddNewDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarlabel: 'Add New Deck',
      tabBarIcon: ({tintColor}) => <MaterialIcons name='playlist-add' size={25} color={tintColor}/>
    }
  },
  EraseDecks: {
    screen: EraseDecks,
    navigationOptions: {
      tabBarlabel: 'Erase All Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='delete-forever' size={25} color={tintColor}/>
    }
  },  
}, {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 50,
        backgroundColor: purple,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1
      }
    }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Platform.OS === 'ios' ? TabsIos : TabsAndroid,
    navigationOptions: {
      header: null,
      headerBackTitle: 'Back'
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      },
      headerBackTitle: 'Back'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
});

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar 
            backgroundColor={red}
            barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}