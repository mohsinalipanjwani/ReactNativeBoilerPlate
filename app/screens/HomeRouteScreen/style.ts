import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const LINK_SIZE = (Dimensions.screenWidth - 180) / 2;
const LINK_MAX_SIZE = 140;

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  navigationContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Dimensions.space4x,
  },
  navigationLink: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.space2x,
    width: LINK_SIZE,
    height: LINK_SIZE,
    maxWidth: LINK_MAX_SIZE,
    maxHeight: LINK_MAX_SIZE,
    margin: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
  },
  navigationLinkIcon: {
    fontSize: 36,
  },
  navigationLinkLabel: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 42,
  },
  imageWrapper: {
    width: 112,
    height: 30,
  },
});

export default style;
