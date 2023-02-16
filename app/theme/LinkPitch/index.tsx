/*
 *
 * LoginScreenLocalLinkPitch
 *
 */

import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import FormattedMessage from 'theme/FormattedMessage';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { OTP_RESEND_INTERVAL } from 'configs';

import Text from 'theme/Text';
import Timer from 'components/Timer';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';
import messages from './messages';
import useColorPalette from 'hooks/useColorPalette';

interface LinkPitchProps {
  pitchText?: ReactNode | string;
  linkText: ReactNode | string;
  onLinkPress: () => any;
  isLoading?: boolean;
  isSuccess?: boolean;
}

function LinkPitch(props: LinkPitchProps) {
  const timer = useRef() as any;
  const [enable, setEnable] = useState(true);
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return {
      disableStyle: StyleSheet.create({
        color: palette?.disable,
      } as any),
      linkStyle: StyleSheet.create({
        color: palette?.accent,
      } as any),
    };
  }, [palette]);

  useEffect(() => {
    if (!props.isLoading && props.isSuccess) {
      setEnable(true);
    }
  }, [props.isLoading, props.isSuccess, timer]);

  return (
    <View style={style.timeWrapper}>
      <Text style={style.pitch}>{props.pitchText}</Text>
      {props.isLoading ? (
        <ActivityIndicator />
      ) : (
        <TouchFeedback
          onPress={props.onLinkPress}
          disabled={enable}
          style={style.timerText}
        >
          <View style={style.timeWrapper}>
            <Text
              style={[
                style.link,
                !enable ? themeStyles.linkStyle : themeStyles.disableStyle,
              ]}
            >
              {props.linkText}
            </Text>
            {enable ? (
              <>
                <FormattedMessage style={style.pitch} {...messages.pitch} />
                <Timer
                  ref={timer}
                  style={style.timerText}
                  interval={OTP_RESEND_INTERVAL}
                  onExpire={() => setEnable(false)}
                />
              </>
            ) : null}
          </View>
        </TouchFeedback>
      )}
    </View>
  );
}

export default LinkPitch;
