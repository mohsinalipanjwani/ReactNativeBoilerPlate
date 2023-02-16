/*
 *
 * HomeScreen
 *
 */

import React from 'react';
// import { View } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// import Icon from 'theme/Icon';
// import TouchFeedback from 'theme/TouchFeedback';
import { useFormattedMessage } from 'theme/FormattedMessage';

import useBackButtonExit from 'hooks/useBackButtonExit';

import messages from './messages';

import { HomeRouteScreenProps } from './types';
import HomeScreenTabRouter from 'router/TabRouter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomeRouteScreen(props: HomeRouteScreenProps) {
  const exitMessage = useFormattedMessage(messages.exitMessage);
  useBackButtonExit({
    message: exitMessage,
  });

  return <HomeScreenTabRouter />;
}

export default HomeRouteScreen;
