/* eslint-disable no-useless-escape */
import * as yup from 'yup';

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required('Username is required!')
      .min(5, 'Username should be at least 5 characters'),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address'
      ),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password should be at least 5 characters'),
    //       .matches(
    //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+*-@#$%&]).+$/,
    //         'Must contain the following: lower case, upper case, number, and special character'
    //       ),
  })
  .required();

export const loginSchema = yup
  .object({
    identifier: yup
      .string()
      .required('Email is required')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address'
      ),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password should be at least 5 characters'),
    //       .matches(
    //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+*-@#$%&]).+$/,
    //         'Must contain the following: lower case, upper case, number, and special character'
    //       ),
  })
  .required();
