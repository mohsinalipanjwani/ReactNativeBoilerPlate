/**
 *
 * CNICInput
 *
 */
import React from 'react';
import MaskedInput, { MaskedInputProps } from '../MaskedInput';

export interface CNICInputProps extends Omit<MaskedInputProps, 'type'> {}

const CNICInput = React.forwardRef(
  (props: CNICInputProps, ref: React.ForwardedRef<any>) => {
    return (
      <MaskedInput
        {...props}
        ref={ref}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        type="custom"
        options={{
          mask: '99999-9999999-9',
        }}
      />
    );
  },
);

export default CNICInput;
