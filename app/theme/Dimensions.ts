import { Dimensions as RNDimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const window = RNDimensions.get('screen');

const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : 40;
const headerPaddingTop = 0;
const headerContentHeight = 56;
const headerHeight = statusBarHeight + headerContentHeight + headerPaddingTop;

const screenHeight = window.height;
const bottomSpacing = Platform.OS === 'ios' ? 24 : 10;

export default {
  space1x: 6,
  space2x: 12,
  space3x: 18,
  space4x: 24,
  space5x: 30,
  space6x: 36,
  space8x: 48,
  space10x: 60,
  space12x: 72,

  PageHeading: 32,
  fontHeading: 18,
  fontInput: 16,
  fontDescription: 14,
  fontCaption: 11,

  borderRadius: 16,
  borderRadius2x: 32,
  tabBarHeight: 122,

  inputHeight: 44,
  headerContentHeight,
  headerHeight,
  headerPaddingTop,
  screenWidth: window.width,
  screenHeight,
  statusBarHeight,
  bottomSpacing,
};
