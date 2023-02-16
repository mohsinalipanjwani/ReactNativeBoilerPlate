import useColorPalette from 'hooks/useColorPalette';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  RenderCellOptions,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import Text from 'theme/Text';
import style from './style';

const CELL_COUNT = 6;
interface IPinInputProps {
  code?: string;
  secure?: boolean;
  cellCount?: number;
  onPinCompleted?: (value: string) => void;
}
const PinInput = ({
  code = '',
  secure,
  onPinCompleted,
  cellCount = CELL_COUNT,
}: IPinInputProps) => {
  const [value, setValue] = useState(code);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const palette = useColorPalette();
  const themeStyles = useMemo(() => {
    return {
      cell: StyleSheet.create({
        backgroundColor: palette?.inputColor,
      } as any),
      cellFilled: StyleSheet.create({
        backgroundColor: palette?.inputColor,
      } as any),
    };
  }, [palette]);

  useEffect(() => {
    if (code) {
      setValue(code);
    }
  }, [code]);

  useEffect(() => {
    if (onPinCompleted && value?.length === cellCount) {
      onPinCompleted(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, cellCount]);

  const renderCell = ({ index, symbol, isFocused }: RenderCellOptions) => {
    let textChild = null;
    if (symbol) {
      textChild = secure ? (
        <MaskSymbol
          maskSymbol="*"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      ) : (
        symbol
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    } else {
      textChild = null;
    }
    return (
      <View
        key={index}
        onLayout={getCellOnLayoutHandler(index)}
        style={style.cellContainer}
      >
        <Text
          style={[
            themeStyles.cell,
            style.cell,
            isFocused && style.focusCell,
            !!symbol && style.cellFilled,
          ]}
        >
          {textChild}
        </Text>
      </View>
    );
  };

  return (
    <View style={style.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        // autoFocus={true}
        onChangeText={setValue}
        autoComplete="sms-otp"
        cellCount={cellCount}
        rootStyle={style.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="none"
        renderCell={renderCell}
      />
    </View>
  );
};

export default PinInput;
