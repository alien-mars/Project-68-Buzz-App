import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FacebookScreen from './screens/fb';
import InstaScreen from './screens/in';

export default function App() {
    return(
      <AppContainer/>
    )
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : FacebookScreen},
  Instagram : {screen : InstaScreen},
})

const AppContainer = createAppContainer(TabNavigator);
