import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';


const BottomTab = createBottomTabNavigator();

export default function Tap() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeTintColor: 'gray',
        inactiveTintColor: 'black',
     labelStyle: { fontSize: 30,
      fontWeight: 'bold',
       fontFamily: "sans-serif" },
        tabStyle: { justifyContent: 'center' },
        style: { backgroundColor: '#cccccc', },
      }}>
      <BottomTab.Screen name="Posts" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator >
  );
}
