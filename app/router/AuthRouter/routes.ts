import LoginScreen from 'screens/LoginScreen/Loadable';

import routeConfigs from './routeConfigs';
import routeNames from './routeNames';

const routes = {
  [routeNames.LOGIN]: {
    ...routeConfigs.LOGIN,
    screen: LoginScreen,
  },
};

export default routes;
