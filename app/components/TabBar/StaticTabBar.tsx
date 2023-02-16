import React, { useEffect, useMemo } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { BottomTabDescriptor } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import style from './style';
import useColorPalette from 'hooks/useColorPalette';
import SVG, { SVGProps } from 'theme/SVG';

interface IStaticTabBarProps {
  tabs: {
    key: string;
    name: string;
    params: Readonly<{
      icon: SVGProps['title'];
    }>;
    routeParams: BottomTabDescriptor;
  }[];
  selected: number;
  setSelected: (...args: any) => void;
  onQRPress: () => void;
}

const StaticTabBar = ({ tabs, selected, setSelected }: IStaticTabBarProps) => {
  const animatedValue = React.useRef(new Animated.Value(selected)).current;

  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return {
      iconActiveStyle: StyleSheet.create({
        color: palette?.accent,
      } as any),
      iconStyle: StyleSheet.create({
        color: palette?.textBlack,
      } as any),
      barStyle: StyleSheet.create({
        backgroundColor: palette?.headerBackground,
      } as any),
    };
  }, [palette]);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: selected,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, selected]);

  return (
    <View style={style.container}>
      {tabs.map((tab, index) => {
        return (
          <TouchableWithoutFeedback
            key={tab?.key}
            onPress={() => {
              setSelected(index);
            }}
          >
            <Animated.View style={[themeStyles.barStyle, style.tab]}>
              <View>
                <SVG
                  fill={selected === index ? palette.accent : palette.textBlack}
                  title={tab?.params?.icon}
                  size={25}
                />
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default StaticTabBar;
