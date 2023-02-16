/**
 *
 * FormattedDate
 *
 */
import React from 'react';
import { FormatDateOptions, useIntl } from 'react-intl';

import Text, { TextProps } from 'theme/Text';

interface DateProps extends TextProps {
  date?: any;
  options?: FormatDateOptions;
}

export function useFormattedDate(
  date: string,
  options?: FormatDateOptions,
): string {
  const intl = useIntl();

  return intl.formatDate(date, options);
}

function FormattedDate({
  date = new Date(),
  options = {
    dateStyle: 'short',
  },
  ...otherProps
}: DateProps) {
  const content = useFormattedDate(date, options);

  return <Text {...otherProps}> {content}</Text>;
}

export default FormattedDate;
