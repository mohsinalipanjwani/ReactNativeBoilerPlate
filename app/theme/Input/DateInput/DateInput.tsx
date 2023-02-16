/**
 *
 * DateInput
 *
 */
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import TouchFeedback from 'theme/TouchFeedback';

import Input, { InputProps } from '../index';

import style from './style';

interface DateInput extends Omit<InputProps, 'onChange' | 'onChangeText'> {
  maximumDate?: Date;
  minimumDate?: Date;
  onChange: (date: string) => void;
  value?: string;
}

const DateInput = React.forwardRef(
  (props: DateInput, ref: React.ForwardedRef<any>) => {
    const [show, setShow] = useState<boolean>(false);
    return (
      <View>
        {show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={props.value ? new Date(props.value) : new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : undefined}
            themeVariant="light"
            maximumDate={props.maximumDate}
            minimumDate={props.minimumDate}
            onChange={(_event: any, date?: Date) => {
              setShow(false);
              if (date) {
                props.onChange(date.toISOString());
              }
            }}
          />
        ) : (
          <View style={style.container}>
            <Input
              clearButtonMode="never"
              onChangeText={() => {}}
              ref={ref}
              placeholder={props.placeholder}
              label={props.label}
              value={
                props.value
                  ? format(new Date(props.value || ''), 'dd MMM yyyy')
                  : ''
              }
              editable={false}
            />
            <TouchFeedback
              onPress={() => setShow(!show)}
              style={style.wrapper}
            />
          </View>
        )}
      </View>
    );
  },
);

export default DateInput;
