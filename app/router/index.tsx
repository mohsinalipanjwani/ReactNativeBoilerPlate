import last from 'lodash/last';
import debounce from 'lodash/debounce';
import React, { createRef, useEffect } from 'react';

import {
  NavigationState,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { Log } from 'platform/Logger';
import { logScreen } from 'platform/analytics';

import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';
import { UserStackParamList } from './UserRouter/types';

const navigationRef = createRef<NavigationContainerRef<UserStackParamList>>();

function onStateChange(state: NavigationState) {
  let route = last(state?.routes);
  Log({ route });
  if (!route?.name) {
    return;
  }
  if (route?.state?.routes) {
    route = route?.state?.routes[
      route.state.index!
    ] as NavigationState['routes'][0];
  }
  logScreen(route);
}
const debouncedOnStateChange = debounce(onStateChange, 200);

function onStateChangeCallback(state?: NavigationState): void {
  if (!state) {
    return;
  }
  debouncedOnStateChange(state);
}

// LocalStorage.clear();
// signOut();

function Router() {
  const isAuthenticated = true;

  // useEffect(() => {
  //   LocalStorage.clear();
  //   signOut();
  // }, []);

  // useEffect(async () => {
  //   const docs = await firestore().collection('users').get();
  //   if (docs.docs.length) {
  //     docs.docs.forEach(async (doc) => {
  //       const data = await firestore()
  //         .collection('users')
  //         .doc(doc.ref.id)
  //         .get();
  //       const dt = data.data();
  //       if (dt?.phone) {
  //         await firestore()
  //           .collection('users')
  //           .doc(doc.ref.id)
  //           .update({ phoneNumber: dt.phone });
  //       }
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (user.isSuccess) {
  //     SplashScreen.hide();
  //   }
  // }, [user.isSuccess]);

  // useEffect(() => {
  //   if (user.data?.id) {
  //     setDisplaySuppress(false);
  //   }
  // }, [user.data?.id]);

  // if (!user.isSuccess) {
  //   return <Splash />;
  // }

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // if (isLoading) {
  //   return <FullScreenLoader />;
  // }
  // useEffect(() => {
  //   if (user.data?.id) {
  //     setDisplaySuppress(false);
  //   }
  // }, [user.data?.id]);

  return (
    <NavigationContainer
      onStateChange={onStateChangeCallback}
      ref={navigationRef}
    >
      {isAuthenticated ? <UserRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}

export default Router;
