/*
 * BuildVersion Messages
 *
 * This contains all the text for the BuildVersion component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.BuildVersion';

export default defineMessages({
  version: {
    id: `${scope}.version`,
    defaultMessage: 'Version: {version}\nBuild: {build}',
  },
});
