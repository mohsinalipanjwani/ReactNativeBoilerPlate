import * as yup from 'yup';

export const contactNumber = yup
  .string()
  .length(13, 'Phone Number must be exactly 12 digits')
  .required('Mobile number is a required field.');

export const cnic = yup
  .string()
  .length(15)
  .matches(/^(?!00000-0000000-0).*$/g);

export const email = yup.string().email().required();

export const password = yup.string().min(8).max(16).required();
