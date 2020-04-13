import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Posts from './Posts';
import Post from './Post';


export default function Home() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts}
          options={{
         
            title: 'All-Posts',
            headerTitleStyle: { fontWeight: 'bold', color: '#ffff', alignSelf: 'center', },
            headerStyle: {  height: 90,
                backgroundColor: "gray", },
          }} />
        <Stack.Screen name="Post" component={Post}
          options={{
            title: 'Post',
            headerTitleStyle: { fontWeight: 'bold', color: '#ffff', alignSelf: 'center', },
            headerStyle: { backgroundColor: 'gray', },
          }} />
      </Stack.Navigator>
    );
  }