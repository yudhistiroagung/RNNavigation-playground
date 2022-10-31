import React, { FC, useMemo, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { TabStackScreenProps } from '../navigation/Navigation.config';

const Fragment1: FC<TabStackScreenProps<'HOME'>> = () => {
  const datas = useMemo(() => Array.from(Array(20).keys()), []);

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <View style={s.item}>
        <Text>{`Item no ${item}`}</Text>
      </View>
    );
  }, []);

  return (
    <View style={[s.container]}>
      <FlatList data={datas} renderItem={renderItem} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 4,
  },
});

export default Fragment1;
