import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenA, ScreenB, ScreenC } from '../screens';
import BottomNav from './BottomNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerBlurEffect: 'dark',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="screen-a" component={ScreenA} />
      <Stack.Screen name="screen-b" component={ScreenB} />
      <Stack.Screen name="screen-c" component={ScreenC} />
      <Stack.Screen
        name="bottom-nav"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
