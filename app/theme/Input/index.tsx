/**
 *
 * Input
 *
 */
import omit from 'lodash/omit';

import React, { useMemo } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';

import { capitalizeFirstLetter } from 'utils';
import Text from 'theme/Text';

import style from './style';
import { isString } from 'lodash';
import useColorPalette from 'hooks/useColorPalette';

export interface InputProps extends Omit<TextInputProps, 'ref'> {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
}

const TextInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<RNTextInput>) => {
    const palette = useColorPalette();

    const themeStyles = useMemo(() => {
      return {
        inputStyle: StyleSheet.create({
          backgroundColor: palette?.inputColor,
          color: palette?.textBlack,
        } as any),
        errorInput: StyleSheet.create({
          borderColor: palette?.error,
          borderWidth: 1,
        } as any),
        error: StyleSheet.create({
          color: palette?.error,
        } as any),
      };
    }, [palette]);

    return (
      <View style={style.wrapper}>
        {props.label ? <Text style={style.label}>{props.label}</Text> : null}
        <RNTextInput
          clearButtonMode="unless-editing"
          blurOnSubmit
          {...omit(props, ['label', 'style', 'error'])}
          ref={ref}
          style={[
            themeStyles.inputStyle,
            style.input,
            props.style,
            props.label ? style.inputWithLabel : {},
            props.error ? themeStyles.errorInput : {},
            props.multiline ? style.multiline : {},
          ]}
          placeholderTextColor={palette.placeholder}
        />
        {props.error ? (
          <Text style={[themeStyles.error, style.error]}>
            {isString(props.error)
              ? capitalizeFirstLetter(props.error)
              : props.error}
          </Text>
        ) : null}
      </View>
    );
  },
);

export default TextInput;
