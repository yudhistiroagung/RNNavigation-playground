import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  SCREEN_A: undefined;
  SCREEN_B: undefined;
  SCREEN_C: undefined;
  DASHBOARD?: { initialRoute: keyof TabStackParamList };
};

export type TabStackParamList = {
  HOME: undefined;
  SHOP: undefined;
  PROFILE: undefined;
};

export type RootStackScreenProps<K extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, K>;

export type TabStackScreenProps<K extends keyof TabStackParamList> =
  BottomTabScreenProps<TabStackParamList, K>;
