import { Linking, Share, Platform } from 'react-native';
import * as configs from 'configs';
import { Warn } from './Logger';

export function rateApp() {
  const url =
    Platform.OS === 'ios' ? configs.APP_STORE_LINK : configs.PLAY_STORE_LINK;
  Linking.openURL(url);
}

export function share(data: {
  title: string;
  message: string;
  url?: string;
}): void {
  if (!data.message) {
    return;
  }
  let { message } = data;
  let { url } = data;
  if (!url) {
    url =
      Platform.OS === 'ios' ? configs.APP_STORE_LINK : configs.PLAY_STORE_LINK;
  }
  if (Platform.OS === 'android') {
    message = `${data.message}\n\n${url}`;
  }
  Share.share({ ...data, message, url }, { dialogTitle: data.title });
}

export function call(number: string) {
  if (!number) {
    return;
  }
  Linking.openURL(`tel:${number}`);
}

export function openUrl(url: string): void {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Warn(`Can't handle url: ${url}`);
      } else {
        Linking.openURL(url).catch((err) => {
          Warn('openURL error', err);
        });
      }
    })
    .catch((err) => Warn('An unexpected error happened', err));
}
