import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  root: {
    position: 'relative',
    paddingHorizontal: Dimensions.space4x,
    backgroundColor: 'transparent',
    width: '100%',
  },
  codeFieldRoot: {
    width: '100%',
  },
  cellContainer: {
    borderRadius: Dimensions.borderRadius,
    overflow: 'hidden',
  },
  cell: {
    width: 42,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 42,
    textAlignVertical: 'center',
    height: Dimensions.inputHeight,
  },
  cellFilled: {
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: Dimensions.borderRadius,
  },
  focusCell: {
    overflow: 'hidden',
    borderRadius: Dimensions.space2x + 4,
  },
  input: {
    flex: 1,
  },
});

export default style;
