import React, { useMemo } from 'react';
import Icon from 'theme/Icon';
import style from './style';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import useColorPalette from 'hooks/useColorPalette';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface IFlatButtonProps {
  icon?: string;
  disabled?: boolean;
  numberOfLines?: number;
  variant?: 'accent' | 'danger';
  label: string | React.ReactNode;
  onPress: (...args: any[]) => any;
  loading?: boolean;
}
const FlatButton = ({
  disabled = false,
  onPress,
  variant = 'accent',
  loading = false,
  ...props
}: IFlatButtonProps) => {
  const palette = useColorPalette();

  const themeStyle = useMemo(() => {
    return StyleSheet.create({
      backgroundColor:
        variant === 'accent' ? palette?.buttonBackground : palette?.error,
    } as any);
  }, [palette?.buttonBackground, palette?.error, variant]);
  return (
    <TouchFeedback
      onPress={disabled ? () => null : onPress}
      style={[themeStyle, style.button, disabled ? style.disable : null]}
    >
      {props?.icon ? (
        <Icon name={props?.icon} color="white" style={style.icon} />
      ) : null}
      {loading ? (
        <ActivityIndicator size={15} color="white" />
      ) : (
        <Text
          testID="buttonText"
          color="white"
          style={style.label}
          numberOfLines={props?.numberOfLines}
        >
          {props?.label}
        </Text>
      )}
    </TouchFeedback>
  );
};
export default FlatButton;
