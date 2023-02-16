import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  versionContainer: {
    position: 'absolute',
    width: Dimensions.screenWidth,
    left: 0,
    bottom: Dimensions.bottomSpacing + Dimensions.space12x,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: {
    textAlign: 'center',
  },
});

export default style;
