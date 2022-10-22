import { CompositeScreenProps } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  SCREEN_A: undefined;
  SCREEN_B: undefined;
  SCREEN_C: undefined;
  DASHBOARD?: { initialRoute: keyof DashboardStackParamList };
};

// nested stack of root stack
export type DashboardStackParamList = {
  HOME: undefined;
  SHOP: undefined;
  PROFILE: undefined;
};

export type RootStackNavigationProps<K extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, K>;

export type RootStackScreenProps<K extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, K>;

export type TabStackScreenProps<K extends keyof DashboardStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DashboardStackParamList, K>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
