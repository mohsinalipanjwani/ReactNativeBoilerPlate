import { AuthStackParamList } from './types';

export const LOGIN = 'Login';
export const OTP_VERIFICATION = 'OTPVerification';
export const PRIVACY = 'Privacy';

const routeName: Record<string, keyof AuthStackParamList> = {
  LOGIN,
  OTP_VERIFICATION,
  PRIVACY,
};

export default routeName;
