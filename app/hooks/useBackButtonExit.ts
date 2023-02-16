/*
 *
 * useBackButtonExit
 *
 */

import { useCallback, useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';
import { useToastContext } from '@asaeed14/react-native-toast';

import { BACK_INTERVAL } from 'configs';

interface useBackButtonExitProps {
  message: string;
}

function useBackButtonExit({ message }: useBackButtonExitProps) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toast = useToastContext();

  const handleBackPress = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      BackHandler.exitApp();
      return true;
    }
    toast.show({
      message,
      delay: 1000,
    });
    timer.current = setTimeout(() => {
      timer.current = null;
    }, BACK_INTERVAL);
    return true;
  }, [toast, message]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return backHandler.remove;
  }, [handleBackPress]);
}

export default useBackButtonExit;
