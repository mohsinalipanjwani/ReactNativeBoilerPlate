import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';

const INPUT_HEIGHT = 42;
const MULTILINE_HEIGHT = 130;

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    alignSelf: 'stretch',
    minHeight: INPUT_HEIGHT + Dimensions.space4x,
  },
  input: {
    // fontFamily: 'Arial',
    width: '100%',
    fontSize: 16,
    alignSelf: 'center',
    position: 'relative',
    minHeight: INPUT_HEIGHT,
    alignItems: 'flex-start',
    textAlignVertical: 'center',
    justifyContent: 'flex-start',
    paddingVertical: Dimensions.space1x,
    paddingHorizontal: Dimensions.space3x,
    borderRadius: Dimensions.borderRadius,
  },

  inputWithLabel: {
    minHeight: INPUT_HEIGHT + 12,
    paddingTop: Dimensions.space4x,
    paddingBottom: Dimensions.space2x,
  },

  multiline: {
    textAlignVertical: 'top',
    height: MULTILINE_HEIGHT,
    paddingTop: Dimensions.space3x,
  },
  label: {
    zIndex: 1,
    fontSize: 12,
    borderRadius: 2,
    fontWeight: '700',
    overflow: 'hidden',
    position: 'absolute',
    alignSelf: 'flex-start',
    left: Dimensions.space2x,
    top: Dimensions.space2x + 3,
    paddingHorizontal: Dimensions.space1x,
  },
  error: {
    zIndex: 1,
    fontSize: 13,
    fontWeight: '500',
    overflow: 'hidden',
    alignSelf: 'flex-start',
    paddingTop: Dimensions.space1x,
    marginLeft: Dimensions.space2x,
  },
  showPasswordButton: {
    position: 'absolute',
    right: Dimensions.space1x,
    top: Dimensions.space3x,
  },
  phoneInputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    margin: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius,
  },
  phoneInput: {
    // fontFamily: 'Arial',
    alignSelf: 'stretch',
    minHeight: INPUT_HEIGHT,
  },
  flagHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Dimensions.space1x,
  },
  countryPickerIcon: {
    fontSize: 16,
    marginLeft: 3,
    marginRight: -3,
  },
});
