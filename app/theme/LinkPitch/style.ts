import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  pitch: {
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    fontWeight: '900',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  timerText: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: Dimensions.space1x,
  },
  timeWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default style;
