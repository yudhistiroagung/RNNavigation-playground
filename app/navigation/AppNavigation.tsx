import React, { lazy, Suspense } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// initial screen should be imported normaly since it will be appeared on first render
import ScreenA from '../screens/ScreenA';
import { RootStackParamList } from './Navigation.config';
import BottomNav from './BottomNavigation';

/**
 * use lazy import for other screens
 */
const ScreenB = lazy(() => import('../screens/ScreenB'));
const ScreenC = lazy(() => import('../screens/ScreenC'));

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
  <Suspense fallback={<Text>Loading...</Text>}>
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
  </Suspense>
);

export default AppNavigation;
