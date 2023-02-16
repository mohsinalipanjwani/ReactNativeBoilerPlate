import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  linkButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  small: {
    fontSize: 14,
  },
  large: {
    fontSize: 20,
  },
  centerAlign: {
    textAlign: 'center',
  },
  spacing: {
    marginLeft: Dimensions.space2x,
  },
  centerView: {
    justifyContent: 'center',
  },
  startView: {
    justifyContent: 'flex-start',
  },
  buttonPadding: {
    marginVertical: Dimensions.space2x,
  },
});

export default style;
