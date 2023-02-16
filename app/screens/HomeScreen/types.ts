import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from 'router/TabRouter/types';
import { UserStackParamList } from 'router/UserRouter/types';

type GlobalMarketScreenRouteProp = RouteProp<TabStackParamList, 'GlobalMarket'>;

type GlobalMarketScreenNavigationProp = NativeStackNavigationProp<
  UserStackParamList,
  'Welcome'
>;

export type GlobalMarketScreenProps = {
  route: GlobalMarketScreenRouteProp;
  navigation: GlobalMarketScreenNavigationProp;
};
