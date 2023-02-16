import React, { useMemo } from 'react';
import { View, Animated, TextStyle, StyleSheet } from 'react-native';

import Text from 'theme/Text';
import useColorPalette from 'hooks/useColorPalette';

import BackButton from './BackButton';
import style from './style';

interface HeaderProps {
  title?: React.ReactNode | string;
  headerTitleStyle?: TextStyle;
  onBackPress?: (...args: any[]) => any;
  visibleValue: Animated.Value;
  blockBackPress?: boolean;
  lightBackButton?: boolean;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      backgroundColor: palette?.headerBackground,
    } as any);
  }, [palette]);

  return (
    <Animated.View
      style={[themeStyles, style.header, { opacity: props.visibleValue }]}
      key="header"
    >
      <View style={[style.headerContent]}>
        <View style={style.leftContent}>
          {!props.blockBackPress ? <BackButton {...props} /> : null}
          {props.leftContent ? props.leftContent : null}
        </View>
        <View style={style.centerContent}>
          {props.title ? (
            <Text
              style={[style.headerTitle, props.headerTitleStyle]}
              numberOfLines={1}
            >
              {props.title}
            </Text>
          ) : null}
        </View>
        {props.rightContent ? (
          <View style={style.rightContent}>{props.rightContent}</View>
        ) : null}
      </View>
    </Animated.View>
  );
};

export default Header;
