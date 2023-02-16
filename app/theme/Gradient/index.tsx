/**
 *
 * Gradient
 *
 */
import React from 'react';
import { ViewStyle } from 'react-native';
import useColorPalette from 'hooks/useColorPalette';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  type: 'accent' | 'success';
  style?: ViewStyle;
}

const Gradient: React.FC<GradientProps> = function ({
  type = 'accent',
  ...props
}) {
  const palette = useColorPalette();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ ...(props.style || {}) }]}
      colors={
        type === 'accent'
          ? [palette?.accent, palette.accentDark]
          : [palette.primary, palette.primaryDark]
      }
    />
  );
};

export default Gradient;
