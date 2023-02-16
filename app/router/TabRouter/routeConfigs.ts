import { SVGProps } from 'theme/SVG';
import * as routeNames from './routeNames';

const routeConfigs: Record<
  keyof typeof routeNames.default,
  {
    path: string;
    selfAnalyticsLogging?: boolean;
    icon: SVGProps['title'];
  }
> = {
  [routeNames.HOME]: {
    path: '/',
    icon: 'Home',
  },
};
export default routeConfigs;
