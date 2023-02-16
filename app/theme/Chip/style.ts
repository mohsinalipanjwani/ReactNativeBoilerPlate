import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    paddingVertical: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    justifyContent: 'center',
    alignItems: 'center',
    ...elevation(1),
    width: Dimensions.screenWidth + 20,
    left: Dimensions.space2x - 40,
  },

  chipPadding: {
    paddingHorizontal: Dimensions.space2x,
  },
  iconWrapper: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Dimensions.space1x,
    marginBottom: Dimensions.space1x / 2,
    paddingHorizontal: Dimensions.space1x,
  },
  iconStyle: {
    fontSize: 18,
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default style;
