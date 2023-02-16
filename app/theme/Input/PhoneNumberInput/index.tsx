/**
 *
 * PhoneNumberInput
 *
 */
import React from 'react';
import MaskedInput, { MaskedInputProps } from '../MaskedInput';

export interface PhoneNumberInputProps
  extends Omit<MaskedInputProps, 'type' | 'options'> {}

const PhoneNumberInput = React.forwardRef(
  (props: PhoneNumberInputProps, ref: React.ForwardedRef<any>) => {
    return (
      <MaskedInput
        {...props}
        ref={ref}
        textContentType="telephoneNumber"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        type="custom"
        options={{
          mask: '+99-999-9999999',
        }}
        keyboardType="phone-pad"
      />
    );
  },
);

export default PhoneNumberInput;
