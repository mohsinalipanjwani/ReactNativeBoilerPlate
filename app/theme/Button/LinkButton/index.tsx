/**
 *
 * IconButton
 *
 */
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'theme/Icon';

import Text from 'theme/Text';
import View from 'theme/View';
import style from './style';

interface LinkButtonProps {
  icon?: string;
  center?: boolean;
  padding?: boolean;
  disabled?: boolean;
  size?: 'small' | 'large';
  label?: string | React.ReactNode;
  onPress: (...args: any[]) => any;
}

const LinkButton: React.FC<LinkButtonProps> = function (props) {
  const {
    onPress,
    disabled,
    label,
    size = 'small',
    center = true,
    icon,
    padding,
  } = props;

  return (
    <TouchableWithoutFeedback
      onPress={!disabled ? onPress : () => {}}
      style={disabled ? style.disabled : null}
    >
      <View
        style={[
          icon ? style.linkButton : null,
          center ? style.centerView : style.startView,
          padding ? style.buttonPadding : {},
        ]}
      >
        {icon && <Icon name={icon} size={size === 'small' ? 14 : 20} />}
        <Text
          style={[
            size === 'small' ? style.small : {},
            size === 'large' ? style.large : {},
            center ? style.centerAlign : {},
            icon ? style.spacing : {},
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LinkButton;
