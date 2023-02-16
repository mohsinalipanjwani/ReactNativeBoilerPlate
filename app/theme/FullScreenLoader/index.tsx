/**
 *
 * FullScreenLoader
 *
 */
import useColorPalette from 'hooks/useColorPalette';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Loader from 'theme/Loader';
import style from './style';

const FullScreenLoader: React.ComponentType = function () {
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return StyleSheet.create({
      backgroundColor: palette?.appBackground,
    } as any);
  }, [palette]);
  return (
    <View style={[themeStyles, style.container]}>
      <Loader />
    </View>
  );
};

export default FullScreenLoader;
