import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import MyTab from '../navigations/MyTab';
const Stack = createNativeStackNavigator();

const MyStack = props => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MyTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
