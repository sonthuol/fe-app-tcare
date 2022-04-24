import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{headerShow: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShow: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
