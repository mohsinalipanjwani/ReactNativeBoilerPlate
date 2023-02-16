/**
 *
 * BackButton
 *
 */
import React, { useCallback, useEffect, useMemo } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import { Warn } from 'platform/Logger';

import style from './style';
import useColorPalette from 'hooks/useColorPalette';

type BackButtonProps = {
  onBackPress?: (...args: any[]) => any;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const navigation = useNavigation();
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      color: palette?.textBlack,
    } as any);
  }, [palette]);

  const handleBackPress = useCallback((): boolean => {
    try {
      if (props.onBackPress) {
        props.onBackPress();
        return true;
      }
      if (!navigation.canGoBack()) {
        return false;
      }
      navigation.goBack();
      return true;
    } catch (e) {
      Warn(e);
      return true;
    }
  }, [navigation, props]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!navigation.canGoBack() && !props.onBackPress) {
    return null;
  }

  return (
    <TouchFeedback style={[style.backButton]} onPress={() => handleBackPress()}>
      <Icon
        name="arrow-left"
        size={24}
        style={[themeStyles, style.backButtonIcon]}
      />
    </TouchFeedback>
  );
};

export default BackButton;
