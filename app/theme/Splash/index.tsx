/**
 *
 * Splash
 *
 */
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import useColorPalette, { useScheme } from 'hooks/useColorPalette';

import SVG from 'theme/SVG';

import style from './style';

const Splash: React.ComponentType = () => {
  const [scheme] = useScheme();
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      backgroundColor: palette?.appBackground,
    } as any);
  }, [palette]);
  return (
    <View style={[themeStyles, style.container]}>
      <SVG title={scheme === 'dark' ? 'logoDark' : 'logoLight'} />
    </View>
  );
};

export default Splash;
