import React, { useMemo, FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import {
  DashboardStackParamList,
  RootStackScreenProps,
  TabStackScreenProps,
} from './Navigation.config';
import FragmentOne from '../screens/FragmentOne';

const Tab = createBottomTabNavigator<DashboardStackParamList>();

const Fragment2: FC<TabStackScreenProps<'SHOP'>> = () => {
  return (
    <View style={[s.container, s.center]}>
      <Text>Tab 2</Text>
    </View>
  );
};

const Fragment3: FC<TabStackScreenProps<'PROFILE'>> = () => {
  return (
    <View style={[s.container, s.center]}>
      <Text>Tab 3</Text>
    </View>
  );
};

const BottomNavigation = () => {
  const { params } = useRoute<RootStackScreenProps<'DASHBOARD'>['route']>();

  const initialRouteName = useMemo(
    () => params?.initialRoute || 'HOME',
    [params],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarAllowFontScaling: true,
      }}
      initialRouteName={initialRouteName}>
      <Tab.Screen
        name="HOME"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <AntDesignIcons color={color} size={size} name="home" />;
          },
        }}
        component={FragmentOne}
      />
      <Tab.Screen
        name="SHOP"
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => {
            return <AntDesignIcons color={color} size={size} name="skin" />;
          },
        }}
        component={Fragment2}
      />
      <Tab.Screen
        name="PROFILE"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <AntDesignIcons color={color} size={size} name="user" />;
          },
        }}
        component={Fragment3}
      />
    </Tab.Navigator>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNavigation;
