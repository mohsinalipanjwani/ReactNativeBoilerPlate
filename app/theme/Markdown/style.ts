import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  loaderContainer: {
    margin: -Dimensions.space2x,
  },
  pointerLoader: {
    width: Dimensions.screenWidth - Dimensions.space4x,
    marginLeft: Dimensions.space2x,
    height: 10,
    borderRadius: Dimensions.borderRadius,
    marginTop: Dimensions.space2x,
  },
});

export default style;
