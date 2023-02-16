import { Platform, StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  section: {
    marginTop: Dimensions.space2x,
    marginBottom: Dimensions.space1x,
  },
  sectionHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.space2x,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionSubHeading: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: Dimensions.space1x / 3,
    marginTop: Dimensions.space1x,
  },
  headingRow: {},
  headingLoader: {
    width: '50%',
    height: 24,
    borderRadius: Dimensions.borderRadius,
    ...Platform.select({
      ios: {
        height: 21,
        width: '50%',
      },
      android: {
        height: 25,
        width: '60%',
      },
    }),
  },
});

export default style;
