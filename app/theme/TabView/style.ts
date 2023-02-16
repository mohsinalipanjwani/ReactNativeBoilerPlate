/**
 *
 * Styles for TabView Theme
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  renderLabel: {
    padding: 0,
    height: 40,
  },
  renderLabelFocused: {
    zIndex: 9,
  },
  indicatorStyle: {
    borderRadius: Dimensions.space12x,
    height: '100%',
  },
  tabBarStyle: {
    borderRadius: Dimensions.space12x,
    marginVertical: Dimensions.space1x,
    marginHorizontal: Dimensions.space1x / 2,
    height: 40,
  },
});

export default style;
