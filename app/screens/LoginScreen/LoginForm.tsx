import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PhoneNumberInput from 'theme/Input/PhoneNumberInput';
import View from 'theme/View';
import { contactNumber } from 'utils/validations';
import FlatButton from 'theme/Button/FlatButton';
import { useFormattedMessage } from 'theme/FormattedMessage';

import messages from './messages';
import { cleanFirebaseError } from 'utils';

interface LoginFormProps {
  onSubmit: (values: { phoneNumber: string }) => void;
  error?: string;
}

const schema = yup.object().shape({
  phoneNumber: contactNumber.required('Required'),
});

function LoginForm(props: LoginFormProps) {
  const formik = useFormik<{
    phoneNumber: string;
  }>({
    onSubmit: props.onSubmit,
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: schema,
  });

  const inputLabel = useFormattedMessage(messages.input);
  const getCodeLabel = useFormattedMessage(messages.getCode);
  return (
    <View>
      <PhoneNumberInput
        value={formik.values.phoneNumber}
        onChangeText={(text) =>
          formik.setFieldValue('phoneNumber', text.replace(/-/g, ''))
        }
        error={formik.errors.phoneNumber || cleanFirebaseError(props.error)}
        placeholder={inputLabel}
      />
      <FlatButton
        disabled={!formik.values.phoneNumber || !formik.isValid}
        label={getCodeLabel}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}

export default LoginForm;
