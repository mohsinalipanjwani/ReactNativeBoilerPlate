import routeNames from './routeNames';

const routeConfigs: Record<
  keyof typeof routeNames,
  {
    path: string;
  }
> = {
  LOGIN: {
    path: '/login',
  },
  OTPVerification: {
    path: '/login/verify',
  },
  Privacy: {
    path: '/privacy',
  },
};

export default routeConfigs;
