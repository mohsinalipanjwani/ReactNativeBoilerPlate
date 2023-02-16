/*
 *
 * BuildVersion
 *
 */

import React, { useEffect, useState } from 'react';

import * as AppInfo from 'platform/AppInfo';

import FormattedMessage from 'theme/FormattedMessage';
import View from 'theme/View';

import messages from './messages';
import style from './style';

function BuildVersion() {
  const [version, setVersion] = useState<string | undefined>();
  const [build, setBuild] = useState<string | undefined>();

  useEffect(() => {
    async function getReadableVersion() {
      AppInfo.getReadableVersion().then(setVersion).catch(console.warn);
      AppInfo.getBuildDetail().then(setBuild).catch(console.warn);
    }
    getReadableVersion();
  }, []);

  if (!version || !build) {
    return null;
  }

  return (
    <View style={style.versionContainer}>
      <FormattedMessage
        color="white"
        style={style.versionText}
        {...messages.version}
        values={{ version, build }}
      />
    </View>
  );
}

export default BuildVersion;
