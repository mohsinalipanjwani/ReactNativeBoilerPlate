import React from 'react';
import { TextProps } from 'react-native';

import Text from 'theme/Text';

import style from './style';

interface ScreenDescriptionProps extends TextProps {
  children?: React.ReactNode | string;
}

const ScreenDescription: React.FC<ScreenDescriptionProps> = ({
  children,
  ...props
}) => {
  return (
    <Text style={[style.description]} {...props}>
      {children}
    </Text>
  );
};

export default React.memo(ScreenDescription);
