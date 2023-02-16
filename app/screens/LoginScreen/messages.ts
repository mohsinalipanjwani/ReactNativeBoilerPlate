/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  pitch: {
    id: `${scope}.pitch`,
    defaultMessage: 'Welcome Back, Login to Continue',
  },
  input: {
    id: `${scope}.input`,
    defaultMessage: 'Enter your mobile number',
  },
  getCode: {
    id: `${scope}.getCode`,
    defaultMessage: 'Get Code',
  },
  buttonLabel: {
    id: `${scope}.buttonLabel`,
    defaultMessage: 'Continue without Login',
  },

  exitMessage: {
    id: `${scope}.exitMessage`,
    defaultMessage: 'Press again to exit app',
  },
});
