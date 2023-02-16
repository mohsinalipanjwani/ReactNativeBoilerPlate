/**
 *
 * Styles for FullScreenLoader Theme
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.headerHeight,
    zIndex: 100000000000,
    elevation: 100,
  },
  image: {
    width: Dimensions.screenWidth * 0.5,
    height: Dimensions.screenHeight * 0.5,
    alignSelf: 'center',
  },
});

export default style;
