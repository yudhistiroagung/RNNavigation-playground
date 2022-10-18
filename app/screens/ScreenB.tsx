import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenB = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={s.container}>
      <Text>Screen B</Text>
      <Button
        onPress={() => navigation.navigate('screen-c')}
        title="TO SCREEN C"
      />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenB;
