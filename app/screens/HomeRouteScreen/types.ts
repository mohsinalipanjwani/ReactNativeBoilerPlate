import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserStackParamList } from 'router/UserRouter/types';

type HomeScreenRouteProp = RouteProp<UserStackParamList, 'Welcome'>;

type HomeScreenNavigationProp = NativeStackNavigationProp<
  UserStackParamList,
  'Welcome'
>;

export type HomeRouteScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
