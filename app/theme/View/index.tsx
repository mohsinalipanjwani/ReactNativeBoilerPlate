/**
 *
 * View
 *
 */

import useColorPalette from 'hooks/useColorPalette';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  View as RNView,
  ViewProps as RNViewProps,
} from 'react-native';
import { Palette } from 'theme/Colors';

export interface ViewProps extends RNViewProps {
  testID?: string;
  borderColor?: keyof Palette;
  backgroundColor?: keyof Palette;
}

const View: React.FC<ViewProps> = function ({
  style,
  borderColor = 'transparent',
  backgroundColor = 'transparent',
  ...props
}) {
  const colorPalette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      backgroundColor: colorPalette[backgroundColor],
      borderColor: colorPalette[borderColor],
    } as any);
  }, [backgroundColor, borderColor, colorPalette]);

  return <RNView style={[themeStyles, style]} {...props} />;
};

export default View;
