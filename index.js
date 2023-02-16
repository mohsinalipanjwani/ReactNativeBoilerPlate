/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';

const consoleError = console.error.bind(console);
console.error = (message, ...args) => {
  if (message?.code === 'FORMAT_ERROR') {
    return;
  }
  consoleError(message, ...args);
};

AppRegistry.registerComponent(appName, () => App);
