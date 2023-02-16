/**
 *
 * MaskedInput
 *
 */
import useColorPalette from 'hooks/useColorPalette';
import isString from 'lodash/isString';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import Text from 'theme/Text';
import { capitalizeFirstLetter } from 'utils';

import { InputProps } from './index';
import style from './style';

export interface MaskedInputProps
  extends Omit<InputProps, 'onChange' | 'onChangeText'>,
    TextInputMaskProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
  accentBackground?: boolean;
}

const MaskedInput = React.forwardRef((props: MaskedInputProps, ref: any) => {
  const palette = useColorPalette();

  const themeStyles = useMemo(() => {
    return {
      inputStyle: StyleSheet.create({
        borderWidth: 1,
        color: palette?.textBlack,
        borderColor: palette?.inputColor,
        backgroundColor: palette?.inputColor,
      } as any),
      errorInput: StyleSheet.create({
        borderColor: palette?.error,
        borderWidth: 1,
      } as any),
      error: StyleSheet.create({
        color: palette?.error,
      } as any),
      disableStyle: StyleSheet.create({
        backgroundColor: palette?.disable,
      } as any),
    };
  }, [palette]);
  return (
    <View style={style.wrapper}>
      {props.label ? (
        <Text
          style={[style.label, !props.editable ? themeStyles.disableStyle : {}]}
        >
          {props.label}
        </Text>
      ) : null}
      <TextInputMask
        clearButtonMode="never"
        refInput={ref}
        blurOnSubmit
        style={[
          themeStyles.inputStyle,
          style.input,
          props.label ? style.inputWithLabel : {},
          props.error ? themeStyles.errorInput : {},
          props.multiline ? style.multiline : {},

          typeof props.editable === 'boolean' && props.editable === false
            ? themeStyles.disableStyle
            : {},
        ]}
        placeholderTextColor={palette.placeholder}
        {...props}
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
});

export default MaskedInput;
