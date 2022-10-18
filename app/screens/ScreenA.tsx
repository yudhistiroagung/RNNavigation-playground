import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenA = () => {
  const navigation = useNavigation();

  const spacing = useMemo(() => <View style={s.spacing} />, []);

  const toBottomNav = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [{ name: 'bottom-nav', params: 'tab-2' }],
      }),
    [navigation],
  );

  return (
    <SafeAreaView style={s.container}>
      <Text>Screen A</Text>
      {spacing}
      <Button
        onPress={() => navigation.navigate('screen-b')}
        title="TO SCREEN B"
      />
      {spacing}
      <Button
        onPress={() => navigation.navigate('bottom-nav')}
        title="TO BOTTOM NAV"
      />
      {spacing}
      <Button onPress={toBottomNav} title="TO BOTTOM NAV TAB 2" />
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
