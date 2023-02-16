/**
 *
 * PasswordInput
 *
 */
import React, { useState } from 'react';
import { View } from 'react-native';

import IconButton from 'theme/Button/IconButton';

import style from './style';
import Input, { InputProps } from './index';

interface PasswordInput extends InputProps {}

const PasswordInput = React.forwardRef(
  // @ts-ignore
  (props: PasswordInput, ref: React.RefObject) => {
    const [show, setShow] = useState(false);
    return (
      <View>
        <Input
          clearButtonMode="never"
          {...props}
          autoComplete="password"
          secureTextEntry={!show}
          textContentType="password"
          importantForAutofill="yes"
          ref={ref}
        />
        {props.value ? (
          <View style={style.showPasswordButton}>
            <IconButton
              onPress={() => setShow(!show)}
              variant="accent"
              icon={{
                name: show ? 'eye-off' : 'eye',
              }}
            />
          </View>
        ) : null}
      </View>
    );
  },
);

export default PasswordInput;
