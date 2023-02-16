/**
 *
 * Text
 *
 */

import useColorPalette from 'hooks/useColorPalette';
import React, { useMemo } from 'react';
import {
  Animated,
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { Palette } from 'theme/Colors';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    // fontFamily: 'Arial',
    // backgroundColor: 'red',
    // color: Colors.textBlack,
  },
});

export interface TextProps extends RNTextProps {
  testID?: string;
  color?: keyof Palette;
  animated?: boolean;
  borderColor?: keyof Palette;
  backgroundColor?: keyof Palette;
}

const Text: React.FC<TextProps> = function ({
  animated = false,
  color = 'textBlack',
  borderColor = 'transparent',
  backgroundColor = 'transparent',
  style: componentStyles = {},
  ...props
}) {
  const colorPalette = useColorPalette();

  const Component = animated ? Animated.Text : RNText;
  let style: TextProps['style'] = [defaultStyle.fontFamily];
  if (componentStyles && Array.isArray(componentStyles)) {
    style = style.concat(componentStyles);
  } else if (componentStyles) {
    style.push(componentStyles);
  }

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      color: colorPalette[color],
      backgroundColor: colorPalette[backgroundColor],
      borderColor: colorPalette[borderColor],
    } as any);
  }, [backgroundColor, borderColor, color, colorPalette]);

  return (
    <Component
      style={[themeStyles, style, {}]}
      maxFontSizeMultiplier={1}
      minimumFontScale={1}
      {...props}
    />
  );
};

export default Text;
