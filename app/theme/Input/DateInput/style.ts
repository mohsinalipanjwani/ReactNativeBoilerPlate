import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

export default StyleSheet.create({
  dateTimeRow: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateWrapper: {
    flex: 0.5,
    paddingTop: Dimensions.space1x,
    marginRight: Dimensions.space1x,
    ...elevation(1),
  },
  timeWrapper: {
    flex: 0.5,
    paddingTop: Dimensions.space1x,
    marginRight: Dimensions.space1x,
    ...elevation(1),
  },
  container: {
    position: 'relative',
  },
  wrapper: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
  },
});
