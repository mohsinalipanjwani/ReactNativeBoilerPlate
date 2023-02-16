import { Log } from 'platform/Logger';
import { LOG_ANALYTICS } from 'configs';

import firebaseAnalytics from './firebaseAnalytics';

const DEBUG = __DEV__;
// const DEBUG = false;

function log(...args: any) {
  if (LOG_ANALYTICS) {
    Log('ANALYTICS: ', ...args);
  }
}

export function initAnalytics() {
  log('INITIALIZING');
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.init();
}

export function setUser(params: any) {
  log('SETTING USER:', params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.setUser(params);
}

export async function logScreen(route: any, extraParams = {}): Promise<void> {
  const params = route.params
    ? { ...route.params, ...extraParams }
    : extraParams;
  log('LOGGING SCREEN:', route.name, params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.logScreen(route.name, params);
}

export function setUserId(id: any) {
  log('SETTING USER ID:', id);
  if (!id) {
    return;
  }
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.setUserId(id.toString());
}

export async function logEvent(event: string, params?: any): Promise<void> {
  log('LOGGING EVENT:', event, params);
  if (DEBUG) {
    return;
  }
  firebaseAnalytics.logEvent(event, params);
}

export default {
  initAnalytics,
  setUser,
  setUserId,
  logScreen,
  logEvent,
};
