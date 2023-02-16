import React from 'react';
import { TextProps } from 'react-native';

import Text from 'theme/Text';

import style from './style';

interface ScreenTitleProps extends TextProps {
  children?: React.ReactNode | string;
}

const ScreenTitle: React.FC<ScreenTitleProps> = ({ children, ...props }) => {
  return (
    <Text style={[style.title]} {...props}>
      {children}
    </Text>
  );
};

export default React.memo(ScreenTitle);
