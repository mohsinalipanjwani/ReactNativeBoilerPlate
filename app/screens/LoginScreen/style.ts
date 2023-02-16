import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: Dimensions.space2x,
  },

  LogoWrapper: {
    height: 54,
    display: 'flex',
    marginBottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormWrapper: {
    width: 340,
  },
  TitleWrapper: {
    width: 180,
    marginBottom: Dimensions.space4x,
  },
});
export default style;
