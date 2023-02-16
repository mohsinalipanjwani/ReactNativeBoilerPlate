import HomeScreen from 'screens/HomeScreen/Loadable';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const tabs = {
  [routeNames.HOME]: {
    ...routeConfigs[routeNames.HOME],
    screen: HomeScreen,
  },
};

export default tabs;
