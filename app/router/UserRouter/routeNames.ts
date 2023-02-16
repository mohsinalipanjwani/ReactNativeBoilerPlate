import { UserStackParamList } from './types';

export const WELCOME = 'Welcome';
export const PROFILE_SETUP = 'ProfileSetup';

const routeName: Record<string, keyof UserStackParamList> = {
  WELCOME,
  PROFILE_SETUP,
};

export default routeName;
