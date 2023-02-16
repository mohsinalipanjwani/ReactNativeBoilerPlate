import analytics from '@react-native-firebase/analytics';
import { LOG_ANALYTICS } from 'configs';
import { Log } from 'platform/Logger';

function init(): void {
  analytics().setAnalyticsCollectionEnabled(!__DEV__);
}

function log(...args: any[]) {
  if (LOG_ANALYTICS) {
    Log('FIREBASE ANALYTICS: ', ...args);
  }
}

function setUser({ id, ...params }: { id: string; [key: string]: any }): void {
  if (!id) {
    return;
  }
  analytics().setUserId(id.toString());
  Object.keys(params).forEach((key) => {
    //@ts-ignore
    analytics().setUserProperty(key, `${params[key]}`);
  });
}

function setUserId(id: string) {
  analytics().setUserId(id.toString());
}

function logScreen(routeName: string, params: any) {
  log('LOGGING SCREEN:', routeName, params);
  analytics().logScreenView({ screen_name: routeName });
  analytics().logEvent(routeName, params);
}

function logEvent(event: any, params: any) {
  log('LOGGING EVENT:', event, params);
  analytics().logEvent(event, params);
}

const fa = {
  init,
  setUser,
  logScreen,
  setUserId,
  logEvent,
};

export default fa;
