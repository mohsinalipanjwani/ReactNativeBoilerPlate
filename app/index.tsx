/* eslint-disable react-native/no-inline-styles */
/**
 *
 * This container is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

// import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

// import { createAsyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental';

import { initAnalytics } from 'platform/analytics';
import { initCrashlytics } from 'platform/crashlytics';
import { initPerformance } from 'platform/performance';
import { setDisplaySuppress } from 'platform/InAppMessaging';
import { getFCMToken, initNotifications } from 'platform/Notifications';

import { ToastProvider } from './theme/Toast';
import { Log } from './platform/Logger';
import Router from './router';
import IntlProvider from './IntlProvider';
import { translationMessages } from './i18n';
import useColorPalette, { useScheme } from 'hooks/useColorPalette';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

/** Suppressing the display of in-app messaging to ensure it is only enabled
 * when the user has selected a city. This is set to false in the AppSideEffects
 */
setDisplaySuppress(true);

enableScreens();

setTimeout(() => {
  initAnalytics();
  initCrashlytics();
  initPerformance();
  initNotifications().then(() => {
    getFCMToken().then((token) => {
      Log({ token });
    });
  });
}, 2000);

const theme = {
  ...DefaultTheme,
};

// const asyncStoragePersistor = createAsyncStoragePersistor({
//   storage: AsyncStorage,
// });

const queryCache = new QueryCache({
  onError: (error) => {
    Log(error);
  },
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 * 5, // 5 Days
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      keepPreviousData: true,
    },
  },
  queryCache,
});

// persistQueryClient({
//   queryClient,
//   persistor: asyncStoragePersistor,
// });

export default function App() {
  const palette = useColorPalette();
  const [scheme] = useScheme();

  return (
    <>
      <StatusBar
        backgroundColor={palette.appBackground}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        translucent
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <IntlProvider locale="en" messages={translationMessages}>
          <QueryClientProvider client={queryClient}>
            <ToastProvider defaultTheme={{ delay: 3000 }}>
              <PaperProvider theme={theme}>
                <Router />
              </PaperProvider>
            </ToastProvider>
          </QueryClientProvider>
        </IntlProvider>
      </GestureHandlerRootView>
    </>
  );
}
