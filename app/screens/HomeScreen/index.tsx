/*
 *
 * HomeScreen
 *
 */

import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import useColorPalette, { useScheme } from 'hooks/useColorPalette';
import Screen from 'theme/Screen';
import View from 'theme/View';
import Icon from 'theme/Icon';
import SVG from 'theme/SVG';
import style from './style';
import Text from 'theme/Text';

function HomeScreen() {
  const palette = useColorPalette();
  const [scheme] = useScheme();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      color: palette?.textBlack,
    } as any);
  }, [palette]);

  return (
    <Screen
      testID="homeScreen"
      headerTitleStyle={style.title}
      blockBackPress
      leftContent={
        <View style={style.imageWrapper}>
          <SVG title={scheme === 'dark' ? 'logoDark' : 'logoLight'} />
        </View>
      }
      rightContent={
        <Icon onPress={() => { }} style={themeStyles} size={20} name="logout" />
      }
    >
      <View>
        <Text>heel</Text>
      </View>
    </Screen>
  );
}

export default HomeScreen;
