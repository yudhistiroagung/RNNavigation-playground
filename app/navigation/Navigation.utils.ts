import { RootStackParamList, TabStackParamList } from './Navigation.config';

export const routes = {
  root: (route: keyof RootStackParamList): keyof RootStackParamList => route,
  tabs: (route: keyof TabStackParamList): keyof TabStackParamList => route,
} as const;
