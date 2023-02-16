/**
 *
 * FormattedMessage
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import Text, { TextProps } from 'theme/Text';

export function useFormattedMessage(props: {
  id: string;
  values?: any;
  defaultMessage: string;
}): string {
  const { id, values = {}, defaultMessage } = props;
  const intl = useIntl();
  return intl.formatMessage({ id, defaultMessage }, values);
}

type Props = TextProps & {
  id: string;
  values?: any;
  Component?: any;
  defaultMessage: string;
  isFragment?: boolean;
};

const Message: React.FC<Props> = ({
  Component = Text,
  id,
  defaultMessage,
  values,
  isFragment,
  ...otherProps
}) => {
  const content = useFormattedMessage({ id, defaultMessage, values });

  if (isFragment) {
    return <>{content}</>;
  }
  return <Component {...otherProps}>{content}</Component>;
};

export default Message;
