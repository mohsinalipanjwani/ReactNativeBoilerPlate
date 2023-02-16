import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

export const width = Dimensions.screenWidth - Dimensions.space4x;
export const height = 64;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
  },
  activeIcon: {
    backgroundColor: 'red',
  },
  activeTab: {
    top: -20,
    height,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    ...elevation(2),
  },
  backdrop: {
    backgroundColor: 'white',
    borderRadius: 26,
    height: 10,
    width: '95%',
    bottom: 12,
    left: 12,
    ...elevation(4),
    position: 'absolute',
  },
  svgContainer: {
    width,
    height,
    borderRadius: 24,
    position: 'absolute',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  wrapper: {
    justifyContent: 'flex-end',
    paddingVertical: Dimensions.space3x + 40,
    paddingBottom: Dimensions.space3x,
    overflow: 'visible',
    position: 'absolute',
    bottom: -20,
    width: Dimensions.screenWidth,
  },
  activeCircle: {
    padding: Dimensions.space3x,
    borderRadius: 50,
    position: 'absolute',
    bottom: 27,
    ...elevation(2),
  },
  gradient: {
    borderRadius: 50,
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 27,
    right: 0,
    borderRadius: 50,
    padding: Dimensions.space3x + 3,
  },
});
