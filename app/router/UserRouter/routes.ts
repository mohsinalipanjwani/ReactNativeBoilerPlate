import RouteScreen from 'screens/HomeRouteScreen/Loadable';

import routeConfigs from './routeConfigs';
import routeNames from './routeNames';

const routes = {
  [routeNames.WELCOME]: {
    ...routeConfigs.WELCOME,
    screen: RouteScreen,
  },
};

export default routes;
