/**
 *
 * Styles for Modal Theme
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const CONTENT_HEIGHT =
  (Dimensions.screenHeight -
    Dimensions.statusBarHeight -
    Dimensions.headerHeight) *
  0.75;

const style = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
  },
  container: {
    width: Dimensions.screenWidth,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopStartRadius: Dimensions.borderRadius,
    borderTopEndRadius: Dimensions.borderRadius,
    zIndex: 1000,
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    zIndex: 1,
    overflow: 'hidden',
    borderTopStartRadius: Dimensions.borderRadius,
    borderTopEndRadius: Dimensions.borderRadius,
  },
  headerIcon: {
    fontSize: 24,
    width: 48,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 50,
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  scrollView: {
    maxHeight: CONTENT_HEIGHT + Dimensions.bottomSpacing,
  },
  scrollContent: {},
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  rightHeaderContainer: {
    position: 'absolute',
    right: 0,
  },
  leftHeaderContent: {
    marginHorizontal: Dimensions.space2x,
  },
});

export default style;
