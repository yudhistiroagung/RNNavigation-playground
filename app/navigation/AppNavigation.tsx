import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenA, ScreenB, ScreenC } from '../screens';
import { RootStackParamList } from './Navigation.config';
import BottomNav from './BottomNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerBlurEffect: 'dark',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SCREEN_A" component={ScreenA} />
      <Stack.Screen name="SCREEN_B" component={ScreenB} />
      <Stack.Screen name="SCREEN_C" component={ScreenC} />
      <Stack.Screen
        name="DASHBOARD"
        component={BottomNav}
        options={{
          headerShown: false,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
