import { Platform } from 'react-native';

export default function elevation(level = 1, showBorders = true): object {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      return {
        elevation: level * 6,
      };
    }
    if (showBorders) {
      return {
        borderWidth: 1,
        borderColor: '#CECECF',
        overflow: 'hidden',
      };
    }
  }
  if (Platform.OS === 'ios') {
    return {
      shadowColor: 'rgb(0,0,0)',
      shadowOpacity: level * 0.06,
      shadowRadius: level * 6,
      shadowOffset: {
        width: 0,
        height: level * 3,
      },
      overflow: 'visible',
    };
  }
  return {};
}
