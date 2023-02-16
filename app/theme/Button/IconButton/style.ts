import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  iconButton: {
    display: 'flex',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Dimensions.space1x / 2,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
