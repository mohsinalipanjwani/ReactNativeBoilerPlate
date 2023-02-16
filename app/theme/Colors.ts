export interface Palette {
  white: string;
  black: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  appBackground: string;
  appBackgroundDark: string;
  buttonBackground: string;
  textBlack: string;
  transparent: string;
  headerBackground: string;
  secondaryText: string;
  inputColor: string;
  error: string;
  disable: string;
  shadowColor: string;
  placeholder: string;
  success: string;
}

export const DEFAULT_COLORS: Partial<Palette> = {
  white: '#ffffff',
  black: '#000000',
  primary: '#F0F0F0',
  primaryLight: '#F9F9F9',
  primaryDark: '#DEDEDE',
  secondary: '#00B13F',
  accentLight: '#FFBA8D',
  buttonBackground: '#0B284A',
  accent: '#FFBB01',
  accentDark: '#d74630',
  transparent: '#FFFFFF00',
  error: '#FF0000',
  shadowColor: 'rgba(0, 0, 0, 0.08)',
  disable: 'rgba(249, 249, 249, 0.16)',
};

// @ts-ignore
export const darkPalette: Palette = {
  ...DEFAULT_COLORS,
  textBlack: '#eeeeee',
  appBackground: '#061936',
  appBackgroundDark: '#000000',
  headerBackground: '#0B284A',
  secondaryText: '#FFFFFF',
  inputColor: '#030A24',
  success: '#66E289',
  placeholder: 'rgba(223, 223, 223, 0.32)',
  error: '#F36458',
  disable: 'rgba(249, 249, 249, 0.16)',
};

// @ts-ignore
export const lightPalette: Palette = {
  ...DEFAULT_COLORS,
  textBlack: '#000000',
  appBackground: '#FBFBFB',
  appBackgroundDark: '#ffffff',
  headerBackground: '#FFFFFF',
  secondaryText: '#0B284A',
  inputColor: '#FFFFFF',
  success: '#108932',
  placeholder: 'rgba(11, 40, 74, 0.24)',
  error: '#C61D0E',
  disable: '#bbbbbb.',
};

export default {};
// export default {
//   white: '#ffffff',
//   black: '#000000',
//   grey: '#9E9E9E',

//   headerBackground: '#FFF',
//   footerBackground: '#FDFBFB',

//   bodyBackground: '#FFF',
//   bodyBackgroundDark: '#FAFAFA',

//   accentGradient: '#d74630',
//   accentGradientLight: '#FFBA8D',

//   primary: '#F0F0F0',
//   primaryLight: '#F9F9F9',
//   primaryDark: '#DEDEDE',
//   primaryReverse: '#141412',
//   secondary: '#00B13F',

//   accentLight: '#FFBA8D',
//   accent: '#d74630',
//   accentDark: '#d74630',
//   accentReverse: '#FFFFFF',
//   accentDisabled: '#ED523F',

//   textBlack: '#282D32',
//   textGrey: '#555',

//   transparent: 'rgba(255, 255, 255, 0)',
//   transparentBlack: 'rgba(0, 0, 0, 0)',

//   inputBackground: '#FFF',
//   inputBorder: '#D5D5D5',
//   inputPlaceholder: '#C0C0C0',

//   buttonPrimary: '#ED523E',
//   buttonSecondary: '#ED523E',
//   buttonTertiary: '#63666a',

//   translucentBlackMinor: 'rgba(0, 0, 0, 0.33)',
//   translucentBlack: 'rgba(0, 0, 0, 0.94)',
//   translucentWhite: 'rgba(255, 255, 255, 0.95)',

//   ripple: '#e3e1e1',
//   statusBar: 'rgba(0, 0, 0, 0.7)',

//   facebook: '#3C66C4',
//   whatsapp: '#00b300',
//   messenger: '#0066ff',
//   google: '#4285F4',
//   instagram: '#333',
//   twitter: '#1da1f2',
//   itunes: '#222',
//   playStore: '#699e3f',

//   errorBackground: '#FF0000',
//   errorForeground: '#FDFBFB',

//   successBackground: '#0BAB64',
//   successBackgroundDark: '#3BB78F',
//   successForeground: '#FDFBFB',

//   separator: '#DDD',
//   disable: '#c4c4c4',
// };
