import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Dimensions.borderRadius,
    margin: Dimensions.space2x,
    maxWidth: 200,
  },
  input: {
    maxWidth: 60,
    marginHorizontal: Dimensions.space1x,
    marginVertical: 0,
    paddingVertical: Dimensions.space1x,
    minHeight: 36,
    textAlign: 'center',
  },
  buttonContainer: {},
});
