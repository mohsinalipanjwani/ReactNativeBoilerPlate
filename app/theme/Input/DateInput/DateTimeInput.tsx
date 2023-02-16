/**
 *
 * DateTimeInput
 *
 */
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import IconButton from 'theme/Button/IconButton';
import TouchFeedback from 'theme/TouchFeedback';

import Input, { InputProps } from '../index';

import style from './style';

interface DateTimeInputProps
  extends Omit<InputProps, 'onChange' | 'onChangeText'> {
  maximumDate?: Date;
  minimumDate?: Date;
  onChange: (date?: string) => void;
  onClose?: () => void;
  onRemove?: () => void;
  value?: string;
}

const DateTimeInput = React.forwardRef(
  (props: DateTimeInputProps, ref: React.ForwardedRef<any>) => {
    const [showDate, setShowDate] = useState<boolean>(false);
    const [showTime, setShowTime] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState(props.value);
    const selectedDate = new Date(selectedValue || '');
    return (
      <View style={style.dateTimeRow}>
        <View style={style.dateWrapper}>
          <View style={style.container}>
            <Input
              clearButtonMode="never"
              onChangeText={() => {}}
              ref={ref}
              placeholder={props.placeholder}
              label={props.label}
              value={format(selectedDate, 'dd MMM yyyy')}
              editable={false}
            />
            <TouchFeedback
              onPress={() => setShowDate(!showDate)}
              style={style.wrapper}
            />
          </View>
          {showDate ? (
            <DateTimePicker
              testID="date"
              value={selectedDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : undefined}
              onChange={(_event: any, date?: Date) => {
                setShowDate(false);
                if (date) {
                  setSelectedValue(date.toISOString());
                }
              }}
            />
          ) : null}
        </View>
        <View style={style.timeWrapper}>
          <View style={style.container}>
            <Input
              clearButtonMode="never"
              onChangeText={() => {}}
              ref={ref}
              placeholder={props.placeholder}
              label={props.label}
              value={format(new Date(selectedValue || ''), 'hh:mm bb')}
              editable={false}
            />
            <TouchFeedback
              onPress={() => setShowTime(!showTime)}
              style={style.wrapper}
            />
          </View>
          {showTime ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate}
              mode="time"
              display={Platform.OS === 'ios' ? 'compact' : undefined}
              onChange={(_event: any, date?: Date) => {
                setShowTime(false);
                if (date) {
                  setSelectedValue(date.toISOString());
                }
              }}
            />
          ) : null}
        </View>
        <IconButton
          icon={{
            name: 'check',
          }}
          onPress={() => props.onChange(selectedValue)}
          variant="accent"
        />
        {props.onClose ? (
          <IconButton
            icon={{
              name: 'x',
            }}
            onPress={props.onClose}
          />
        ) : null}
        {props.onRemove ? (
          <IconButton
            icon={{
              name: 'delete',
            }}
            onPress={props.onRemove}
          />
        ) : null}
      </View>
    );
  },
);

export default DateTimeInput;
