import { RootStackParamList, TabStackParamList } from './Navigation.config';

export const routes = {
  root: (route: keyof RootStackParamList): string => route,
  tabs: (route: keyof TabStackParamList): string => route,
} as const;
