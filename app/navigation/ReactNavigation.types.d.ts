import type { RootStackParamList } from './Navigation.config';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line prettier/prettier
    interface RootParamList extends RootStackParamList { }
  }
}
