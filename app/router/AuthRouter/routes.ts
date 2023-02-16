import LoginScreen from 'screens/LoginScreen/Loadable';
import OTPScreen from 'screens/OTPVerificationScreen/Loadable';

import routeConfigs from './routeConfigs';
import routeNames from './routeNames';

const routes = {
  [routeNames.LOGIN]: {
    ...routeConfigs.LOGIN,
    screen: LoginScreen,
  },
  [routeNames.OTP_VERIFICATION]: {
    ...routeConfigs.OTP_VERIFICATION,
    screen: OTPScreen,
  },
};

export default routes;
