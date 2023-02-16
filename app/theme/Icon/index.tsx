/**
 *
 * Icon
 *
 */
import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useColorPalette from 'hooks/useColorPalette';
import { Palette } from 'theme/Colors';

export type IconProps = {
  animated?: boolean;
  font?: 'material' | 'materialCommunity';
  name?: string;
  size?: number;
  color?: keyof Palette;
  [x: string]: any;
};

const animatedElements = {
  material: Animated.createAnimatedComponent(MaterialIcons),
  materialCommunity: Animated.createAnimatedComponent(MaterialCommunityIcons),
};

const normalElements = {
  material: MaterialIcons,
  materialCommunity: MaterialCommunityIcons,
};
const Icon: React.FC<IconProps> = function ({
  animated = false,
  font = 'materialCommunity',
  color = 'textBlack',
  ...props
}) {
  const colorPalette = useColorPalette();
  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      color: colorPalette[color],
    } as any);
  }, [colorPalette, color]);
  const Element = animated ? animatedElements[font] : normalElements[font];
  //@ts-ignore
  return <Element style={themeStyles} {...props} />;
};

export default Icon;
