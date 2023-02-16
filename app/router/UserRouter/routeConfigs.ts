import routeNames from './routeNames';

const routeConfigs: Record<
  keyof typeof routeNames,
  {
    path: string;
    selfAnalyticsLogging?: boolean;
  }
> = {
  LOGIN: {
    path: '/login',
  },
  HOME: {
    path: '/',
  },
  GLOBAL_MARKET: {
    path: '/global-market',
  },
  STOCK_MARKET: {
    path: '/stock-market',
  },
  PROFILE_SETUP: {
    path: '/profile-setup',
  },
};
export default routeConfigs;
