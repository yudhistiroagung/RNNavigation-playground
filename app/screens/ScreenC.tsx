import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={s.container}>
      <Text>Screen C</Text>
      <Button
        onPress={() => navigation.navigate('screen-a')}
        title="TO SCREEN A"
      />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenC;
