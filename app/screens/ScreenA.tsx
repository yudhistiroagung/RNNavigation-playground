import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '../navigation/Navigation.utils';

const ScreenA = () => {
  const navigation = useNavigation();

  const spacing = useMemo(() => <View style={s.spacing} />, []);

  const toBottomNav = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'DASHBOARD',
            params: { initialRoute: routes.tabs('SHOP') },
          },
        ],
      }),
    [navigation],
  );

  return (
    <SafeAreaView style={s.container}>
      <Text>Screen A</Text>
      {spacing}
      <Button
        onPress={() => navigation.navigate('SCREEN_B')}
        title="TO SCREEN B"
      />
      {spacing}
      <Button
        onPress={() => navigation.navigate('DASHBOARD')}
        title="TO DASHBOARD"
      />
      {spacing}
      <Button onPress={toBottomNav} title="RESET DASHBOARD TAB 2" />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    margin: 8,
  },
});

export default ScreenA;
