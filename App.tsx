import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {StatusBar, StyleSheet} from 'react-native';
import Profile from './screens/Profile';
import ForYouScreen from './screens/ForYou';
import ExploreScreen from './screens/Explore';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="For You"
          component={ForYouScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="search-circle-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <FIcon name="user-circle-o" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
