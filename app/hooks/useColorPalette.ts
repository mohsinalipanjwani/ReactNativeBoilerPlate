/*
 *
 * useColorPalette
 *
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import LocalStorage from 'platform/LocalStorage';

import { Palette, darkPalette, lightPalette } from 'theme/Colors';

type IScheme = 'light' | 'dark' | null | undefined;

const COLOR_SCHEME_KEY = 'APP_COLOR_SCHEME';

export function useScheme(): [IScheme, (newScheme: IScheme) => void] {
  useEffect(() => {
    LocalStorage.listener((changedKey) => {
      const newValue = LocalStorage.getItem(changedKey);
      setCurrentScheme(newValue);
    });
  }, []);
  const scheme = useColorScheme();
  const [currentScheme, setCurrentScheme] = useState(scheme);

  const localScheme = LocalStorage.getItem(COLOR_SCHEME_KEY);
  useEffect(() => {
    if (localScheme) {
      setCurrentScheme(localScheme);
    }
  }, [localScheme]);

  const setScheme = useCallback((newScheme: IScheme) => {
    setCurrentScheme(newScheme);
    LocalStorage.setItem(COLOR_SCHEME_KEY, newScheme);
  }, []);

  return [currentScheme, setScheme];
}

function useColorPalette(): Palette {
  const [scheme] = useScheme();

  const palette = useMemo(() => {
    return scheme === 'dark' ? darkPalette : lightPalette;
  }, [scheme]);

  return palette;
}

export default useColorPalette;
