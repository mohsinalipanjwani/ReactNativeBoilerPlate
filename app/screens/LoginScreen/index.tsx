import React, { useCallback } from 'react';
import { Keyboard } from 'react-native';

import { useScheme } from 'hooks/useColorPalette';
import SVG from 'theme/SVG';
import View from 'theme/View';
import FlatButton from 'theme/Button/FlatButton';
import Screen, { ScreenTitle } from 'theme/Screen';
import BuildVersion from 'components/BuildVersion';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';

import style from './style';
import messages from './messages';
import LoginForm from './LoginForm';

function LoginScreen() {
  const [scheme] = useScheme();

  const onSubmit = useCallback((value: { phoneNumber: string }) => {
    console.log(value);
    Keyboard.dismiss();
  }, []);
  const buttonLabel = useFormattedMessage(messages.buttonLabel);

  return (
    <>
      <Screen
        useScrollView={false}
        headerVisibilityThreshold={200}
        testID="LoginScreen"
        showHeader={false}
      >
        <View>
          <View style={style.LogoWrapper}>
            <SVG title={scheme === 'dark' ? 'logoDark' : 'logoLight'} />
          </View>
          <View style={style.ContentWrapper}>
            <View style={style.TitleWrapper}>
              <ScreenTitle>
                <FormattedMessage {...messages.pitch} />
              </ScreenTitle>
            </View>
            <View style={style.FormWrapper}>
              <LoginForm error={undefined} onSubmit={onSubmit} />
              <FlatButton label={buttonLabel} onPress={onSubmit} />
            </View>
          </View>
        </View>
        <BuildVersion />
      </Screen>
    </>
  );
}
export default LoginScreen;
