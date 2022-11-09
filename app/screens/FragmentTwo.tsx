import React, { FC, useMemo, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { TabStackScreenProps } from '../navigation/Navigation.config';

const FragmentTwo: FC<TabStackScreenProps<'SHOP'>> = () => {
  const datas = useMemo(() => Array.from(Array(20).keys()), []);

  const renderItem = useCallback(
    ({ item, index }: { item: number; index: number }) => {
      const isOdd = index % 2 === 1;
      return (
        <View style={[s.item, isOdd && s.odd]}>
          <Text>{`Item no ${item}`}</Text>
        </View>
      );
    },
    [],
  );

  return (
    <View style={[s.container]}>
      <FlatList
        data={datas}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => `key-${item}`}
        ItemSeparatorComponent={() => <View style={s.separator} />}
      />
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
    flex: 1,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  odd: {
    marginLeft: 4,
  },
  separator: {
    height: 4,
  },
});

export default FragmentTwo;
