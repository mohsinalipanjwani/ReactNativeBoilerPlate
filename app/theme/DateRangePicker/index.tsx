import * as React from 'react';
import { DatePickerModal } from 'react-native-paper-dates';

export default function DateRangePicker({
  open = false,
  onDismiss = () => null,
  startDate,
  endDate,
  onApply = () => null,
  daysRange,
}: {
  open?: boolean;
  onDismiss?: (prop?: boolean) => void;
  startDate?: Date;
  endDate?: Date;
  onApply?: (from?: any, to?: any) => void;
  daysRange?: number;
}) {
  const [selectedDate, setSelectedDates] = React.useState<{
    startDate?: Date;
    endDate?: Date;
  }>({});
  const onConfirm = React.useCallback(
    (props: { startDate: any; endDate: any }) => {
      onDismiss();
      onApply(props.startDate, props.endDate);
    },
    [onDismiss, onApply],
  );

  const onChange = React.useCallback(
    (props: { startDate: any; endDate: any }) => {
      setSelectedDates({ startDate: props.startDate, endDate: props.endDate });
    },
    [],
  );

  return (
    <DatePickerModal
      locale="en"
      mode="range"
      visible={open}
      onDismiss={onDismiss}
      startDate={startDate}
      endDate={endDate}
      onConfirm={onConfirm}
      onChange={onChange}
      validRange={
        daysRange
          ? {
              endDate: selectedDate?.startDate
                ? new Date(
                    new Date().setDate(
                      selectedDate?.startDate?.getDate() + daysRange,
                    ),
                  )
                : undefined,
            }
          : {}
      }
    />
  );
}
