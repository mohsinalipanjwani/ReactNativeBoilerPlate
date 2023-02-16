/**
 *
 * IconButton
 *
 */
import React, { useMemo } from 'react';
import TouchFeedback from 'theme/TouchFeedback';

import Icon, { IconProps } from 'theme/Icon';
import style from './style';
import useColorPalette from 'hooks/useColorPalette';
import { StyleSheet } from 'react-native';

interface IconButtonProps {
  icon: IconProps;
  onPress: (...args: any[]) => any;
  disabled?: boolean;
  variant?: 'accent' | 'danger' | 'transparent';
  size?: 'small' | 'medium' | 'large';
}

const IconButton: React.FC<IconButtonProps> = function (props) {
  const { onPress, disabled, variant = 'accent', size } = props;

  const palette = useColorPalette();
  const themeStyle = useMemo(() => {
    switch (variant) {
      case 'danger':
        return StyleSheet.create({
          backgroundColor: palette?.error,
        } as any);
      case 'transparent':
        return;
      default:
        return StyleSheet.create({
          backgroundColor: palette?.buttonBackground,
        } as any);
    }
  }, [palette?.buttonBackground, palette?.error, variant]);

  const value = useMemo(() => {
    switch (size) {
      case 'small':
        return 32;
      case 'medium':
        return 48;
      case 'large':
        return 60;
      default:
        return 36;
    }
  }, [size]);

  const iconSize = useMemo(() => {
    return StyleSheet.create({
      size: {
        width: value,
        height: value,
      },
    });
  }, [value]);

  return (
    <TouchFeedback
      onPress={!disabled ? onPress : () => {}}
      style={[
        themeStyle,
        iconSize.size,
        style.iconButton,
        disabled ? style.disabled : null,
      ]}
    >
      <Icon {...props.icon} color="white" />
    </TouchFeedback>
  );
};

export default IconButton;
