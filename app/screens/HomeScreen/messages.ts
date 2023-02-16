/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.HomeScreen';

export default defineMessages({
  exitMessage: {
    id: `${scope}.exitMessage`,
    defaultMessage: 'Press again to exit app',
  },
});
