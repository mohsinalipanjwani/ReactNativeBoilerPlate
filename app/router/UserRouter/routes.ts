import RouteScreen from 'screens/HomeRouteScreen/Loadable';
import ProfileSetupScreen from 'screens/ProfileSetupScreen/Loadable';

import routeConfigs from './routeConfigs';
import routeNames from './routeNames';

const routes = {
  [routeNames.WELCOME]: {
    ...routeConfigs.WELCOME,
    screen: RouteScreen,
  },
  [routeNames.PROFILE_SETUP]: {
    ...routeConfigs.PROFILE_SETUP,
    screen: ProfileSetupScreen,
  },
};

export default routes;
