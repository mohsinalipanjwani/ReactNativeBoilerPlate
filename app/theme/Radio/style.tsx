import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: Dimensions.space1x,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Dimensions.space1x,
  },
  innerCircle: {
    borderRadius: 4,
    width: 8,
    height: 8,
  },
  label: {
    fontSize: 14,
    paddingTop: Dimensions.space1x / 2,
  },
});
