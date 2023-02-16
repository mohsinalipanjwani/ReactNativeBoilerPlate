declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';
declare module 'react-suspense-loadable';
declare module 'react-native-extra-dimensions-android';
declare module 'react-native-pie';
declare module 'd3-shape';

declare namespace Intl {
  function getCanonicalLocales(locales: string | string[]): string[];

  class ListFormat {
    constructor(locale: string);
    // TODO Add other properties/methods
  }
  // const ListFormat: any; // Use this instead of the class if you don't want to declare all properties/methods
}
