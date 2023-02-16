import { StyleSheet } from 'react-native';

import { lightPalette } from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

export const SCREEN_BACKDROP_COLORS = [
  lightPalette.appBackground,
  lightPalette.appBackgroundDark,
];

const style = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    top: -7,
    flex: 1,
    left: 0,
    zIndex: 100000,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    width: Dimensions.screenWidth,
    paddingTop: Dimensions.statusBarHeight + Dimensions.headerPaddingTop,
  },
  noHeader: {
    width: Dimensions.screenWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Dimensions.statusBarHeight,
    zIndex: 100000,
    flex: 1,
  },
  headerBackground: {},
  headerContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 64,
    position: 'relative',
    height: Dimensions.headerContentHeight,
  },
  leftContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.headerContentHeight,
    top: 0,
    left: 24,
    position: 'absolute',
  },
  centerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.headerContentHeight,
    top: 0,
    right: 0,
    position: 'absolute',
    paddingRight: Dimensions.space4x,
  },
  backButton: {
    width: 56,
    zIndex: 1000,
    justifyContent: 'center',
  },

  backButtonIcon: {
    fontWeight: '600',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
    color: lightPalette.textBlack,
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    lineHeight: 22,
    textAlignVertical: 'center',
    marginTop: Dimensions.space3x,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: 16,
    paddingBottom: Dimensions.space4x,
  },
  contentWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentHolder: {
    paddingTop: Dimensions.headerHeight,
    flex: 1,
    width: '100%',
  },
  scrollContentContainer: {
    paddingTop: Dimensions.headerHeight,
    paddingBottom: Dimensions.bottomSpacing + Dimensions.space1x,
    paddingHorizontal: Dimensions.space3x,
    minHeight: Dimensions.screenHeight,
  },
  scrollContentContainerNoHeader: {
    paddingTop: Dimensions.headerHeight,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  screenTitle: {
    fontSize: 24,
    color: lightPalette.textBlack,
    margin: Dimensions.space2x,
  },
  screenSubtitle: {
    marginTop: -Dimensions.space1x,
    marginHorizontal: Dimensions.space2x,
    fontSize: 14,
    color: lightPalette.textBlack,
    lineHeight: 24,
    textAlign: 'justify',
  },
  screenSubtitleLarge: {
    fontSize: 16,
    marginTop: Dimensions.space2x,
  },
  footer: {
    padding: Dimensions.space1x,
    width: Dimensions.screenWidth,
    marginBottom: Dimensions.bottomSpacing + Dimensions.space2x,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  footerText: {
    fontSize: 10,
  },
});

export default style;
