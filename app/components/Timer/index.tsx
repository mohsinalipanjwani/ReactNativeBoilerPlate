/*
 *
 * TimerComponent
 *
 */

import { useTimer } from 'react-timer-hook';
import React, { forwardRef, useImperativeHandle } from 'react';

import { getTwoDigitNumber } from 'utils';

import Text from 'theme/Text';

import styles from './style';

export interface OTPTimerProps {
  onExpire?: () => void;
  autoStart?: boolean;
  interval: number;
  style?: { [x: string]: any };
}

const Timer = forwardRef(
  (
    { onExpire, autoStart = true, interval = 100000, style }: OTPTimerProps,
    ref,
  ) => {
    const getTimerTime = () => {
      const time = new Date();
      time.setMilliseconds(time.getSeconds() + interval);
      return time;
    };

    const { seconds, minutes, restart, isRunning } = useTimer({
      expiryTimestamp: getTimerTime(),
      autoStart,
      onExpire,
    });

    useImperativeHandle(ref, () => ({
      startTimer() {
        restart(getTimerTime());
      },
    }));

    return (
      <Text style={[styles.timerText, style]}>
        {isRunning
          ? `${getTwoDigitNumber(minutes)} : ${getTwoDigitNumber(seconds)}`
          : '00 : 00'}
      </Text>
    );
  },
);

export default Timer;
