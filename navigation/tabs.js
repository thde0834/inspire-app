import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import {SearchScreen} from '../screens/SearchScreen';
// import {PostScreen} from '../screens/PostScreen';
// import {ProfileScreen} from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
      );
}
