/**
 *
 * QuantityInput
 *
 */
import React, { MutableRefObject } from 'react';
import { TextInput, View } from 'react-native';

import IconButton from 'theme/Button/IconButton';

import style from './style';
import Input, { InputProps } from '../index';

interface QuantityInputProps extends InputProps {
  maxValue?: number;
  minValue?: number;
  onChangeValue: (value: number) => void;
}

const QuantityInput = React.forwardRef(
  (
    props: QuantityInputProps,
    ref:
      | ((instance: TextInput | null) => void)
      | MutableRefObject<TextInput | null>
      | null,
  ) => {
    const { minValue = 1, maxValue = 10 } = props;
    const intValue = props.value ? parseInt(props.value, 10) : 0;

    return (
      <View style={style.container}>
        <View style={style.buttonContainer}>
          <IconButton
            variant="accent"
            disabled={!!minValue && intValue <= minValue}
            onPress={() => props.onChangeValue(intValue - 1)}
            icon={{
              name: 'minus',
            }}
          />
        </View>
        <Input
          clearButtonMode="never"
          {...props}
          style={style.input}
          onChangeText={(text) => {
            const newLocal = parseInt(text, 10);
            if (newLocal > maxValue) {
              props.onChangeValue(maxValue);
              return;
            } else if (newLocal < minValue) {
              props.onChangeValue(minValue);
              return;
            }
            props.onChangeValue(text ? parseInt(text, 10) : 0);
          }}
          onBlur={() => {
            if (minValue && intValue < minValue) {
              props.onChangeValue(minValue);
              return;
            }
            if (maxValue && intValue > maxValue) {
              props.onChangeValue(maxValue);
              return;
            }
            props.onChangeValue(intValue);
          }}
          keyboardType="numeric"
          ref={ref}
        />
        <View style={style.buttonContainer}>
          <IconButton
            variant="accent"
            disabled={!!maxValue && intValue >= maxValue}
            onPress={() => props.onChangeValue(intValue + 1)}
            icon={{
              name: 'plus',
            }}
          />
        </View>
      </View>
    );
  },
);

export default QuantityInput;
