import React, { useMemo } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Fragment1 = () => {
  return (
    <View style={[s.container, s.center]}>
      <Text>Tab 1</Text>
    </View>
  );
};

const Fragment2 = () => {
  return (
    <View style={[s.container, s.center]}>
      <Text>Tab 2</Text>
    </View>
  );
};

const Fragment3 = () => {
  return (
    <View style={[s.container, s.center]}>
      <Text>Tab 3</Text>
    </View>
  );
};

const screenOptions = {
  headerShown: false,
};

const BottomNavigation = () => {
  const { params } = useRoute<any>();

  const initialRouteName = useMemo(
    () => params?.routeName || 'tab-1',
    [params],
  );

  return (
    <SafeAreaView style={s.container}>
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName={initialRouteName}>
        <Tab.Screen
          name="tab-1"
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ color, size }) => {
              return <AntDesignIcons color={color} size={size} name="home" />;
            },
          }}
          component={Fragment1}
        />
        <Tab.Screen name="tab-2" component={Fragment2} />
        <Tab.Screen name="tab-3" component={Fragment3} />
      </Tab.Navigator>
    </SafeAreaView>
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
