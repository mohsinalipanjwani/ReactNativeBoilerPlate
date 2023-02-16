/**
 *
 * Screen
 *
 */
import React, { useMemo, useRef } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
  NativeScrollEvent,
  TextStyle,
  StyleSheet,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import Description from './Description';
import style from './style';
import { Palette } from 'theme/Colors';
import useColorPalette from 'hooks/useColorPalette';

interface ScreenProps {
  useScrollView?: boolean;
  blockBackPress?: boolean;
  lightBackButton?: boolean;
  contentContainerStyle?: number | object;
  headerTitle?: string | React.ReactNode;
  headerTitleStyle?: TextStyle;
  onBackPress?: any;
  testID: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  headerVisibilityThreshold?: number;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  header?: React.ReactNode;
  fullWidth?: boolean;
  backgroundColor?: keyof Palette;
  showHeader?: boolean;
  behaviorHeight?: boolean;
}

const Screen: React.FC<ScreenProps> = ({
  headerVisibilityThreshold = 0,
  useScrollView = true,
  backgroundColor = 'appBackground',
  showHeader = true,
  behaviorHeight = true,
  ...props
}) => {
  const contentContainer: any = useRef();

  const visibleValue = useRef(
    new Animated.Value(headerVisibilityThreshold > 0 ? 0 : 1),
  ).current;

  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      backgroundColor: palette?.[backgroundColor],
    } as any);
  }, [backgroundColor, palette]);

  const onScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }: {
    nativeEvent: NativeScrollEvent;
  }) => {
    if (!headerVisibilityThreshold) {
      return;
    }
    Animated.timing(visibleValue, {
      toValue: y > headerVisibilityThreshold ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const ContentWrapper: any = useScrollView ? ScrollView : View;

  const contentWrapperProps = useScrollView
    ? {
        testID: props.testID,
        onScroll,
        scrollEventThrottle: 32,
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: [
          themeStyles,
          style.scrollContentContainer,
          props.contentContainerStyle,
        ],
        bounces: false,
      }
    : {
        testID: props.testID,
        style: [
          themeStyles,
          style.contentHolder,
          style.scrollContentContainer,
          props.contentContainerStyle,
        ],
      };

  return (
    <>
      {/* <Image
        borderColor=""
        textColor=""
        backgroundColor=""
        style={style.backdrop}
        title="facebookIcon"
        resizeMode="cover"
      /> */}
      {showHeader ? (
        <Header
          headerTitleStyle={props.headerTitleStyle}
          title={props.headerTitle}
          visibleValue={visibleValue}
          onBackPress={props.onBackPress}
          blockBackPress={props.blockBackPress}
          leftContent={props.leftContent}
          rightContent={props.rightContent}
          lightBackButton={props.lightBackButton}
        />
      ) : null}
      <KeyboardAvoidingView
        behavior={behaviorHeight ? 'height' : undefined}
        style={style.contentWrapper}
      >
        <ContentWrapper ref={contentContainer} {...contentWrapperProps}>
          {props.children}
        </ContentWrapper>
      </KeyboardAvoidingView>
      {props.footer ? <Footer key="footer">{props.footer}</Footer> : null}
    </>
  );
};

export const ScreenTitle = Title;
export const ScreenDescription = Description;

export default React.memo(Screen);
