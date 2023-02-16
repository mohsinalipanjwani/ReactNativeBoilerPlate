import crashlytics from '@react-native-firebase/crashlytics';
import isString from 'lodash/isString';

const crash = crashlytics();

export function initCrashlytics(): void {
  if (__DEV__) {
    return;
  }
  crash.setCrashlyticsCollectionEnabled(true);
}

export function testCrash(): void {
  if (!__DEV__) {
    return;
  }
  crash.crash();
}

export function log(message: string): void {
  crash.log(message);
}

export function recordError(error: any): void {
  if (__DEV__) {
    return;
  }
  crash.recordError(error);
}

export function setProps(props: any) {
  for (const key in props) {
    const val = props[key];
    if (key === 'uid') {
      crash.setUserId(isString(val) ? val : val.toString());
    } else {
      crash.setAttribute(key, val);
    }
  }
}

export function setUserProperties({
  id = '0',
  email = '',
  name = '',
}: {
  id: string;
  email?: string;
  name?: string;
}): void {
  if (!id) {
    return;
  }
  crash.setUserId(id);
  crash.setAttributes({ id, name, email });
}

export default crash;
