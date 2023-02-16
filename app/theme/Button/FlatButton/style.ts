import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
const style = StyleSheet.create({
  button: {
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Dimensions.space2x,
    marginBottom: Dimensions.space4x,
    marginTop: Dimensions.space1x,
    borderRadius: Dimensions.borderRadius,
  },
  disable: {
    opacity: 0.4,
  },
  icon: {
    fontSize: 12,
    marginHorizontal: Dimensions.space1x,
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default style;
