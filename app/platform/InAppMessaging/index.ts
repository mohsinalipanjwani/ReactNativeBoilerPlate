import inAppMessaging from '@react-native-firebase/in-app-messaging';
import { Log } from 'platform/Logger';

/**
 * Method to set the in-app messaging suppression.
 *
 * @param value - value to set the suppression to. true means suppressed, false means not suppressed.
 */
export function setDisplaySuppress(value: boolean): void {
  Log(`Setting in-app messaging suppression to: ${value}`);
  inAppMessaging().setMessagesDisplaySuppressed(value);
}
