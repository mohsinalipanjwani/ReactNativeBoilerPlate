import React from 'react';

import Icon, { IconProps } from 'theme/Icon';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import useColorPalette from 'hooks/useColorPalette';
import LinearGradient from 'react-native-linear-gradient';

import style from './style';

interface IChipProps {
  label: string | React.ReactNode;
  onRemove?: () => void;
  onPress?: () => void;
  icon?: IconProps;
  variant?: 'primary' | 'accent';
}

const Chip = ({
  label,
  onRemove,
  icon,
  onPress,
}: // variant = 'accent',
IChipProps) => {
  const palette = useColorPalette();
  return (
    <>
      <TouchFeedback
        style={[style.chip, !onRemove ? style.chipPadding : null]}
        onPress={onPress}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={style.backDrop}
          colors={[palette?.accent, palette?.accentDark]}
        />
        <Text>{label}</Text>
        {onRemove || icon ? (
          <TouchFeedback style={style.iconWrapper} onPress={onRemove}>
            <Icon
              name={icon?.name || 'close-circle'}
              style={[style.iconStyle]}
            />
          </TouchFeedback>
        ) : null}
      </TouchFeedback>
    </>
  );
};

export default Chip;
