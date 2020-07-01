import { useFormik } from 'formik';
import { withTranslation } from 'hocs/localization.js';
import React from 'react';

import { SubscribeComponent } from './subscribe-component.js';
import { subscribeValidationSchema } from './validation-schema.js';

const formikConfig = {
  onSubmit: ({ email }, { setFieldValue, onSubmit }) => {
    console.log('email', email);
    setFieldValue('email', '');
    onSubmit();
  },
  initialValues: { email: '' },
  validationSchema: subscribeValidationSchema,
  mapPropsToErrors: () => ({ _initial: true }),
};

const mapFormikBagToProps = ({
  // errors,
  handleSubmit,
  isValid,
  setFieldTouched,
  setFieldValue,
  // touched,
  values: { email },
}) => ({
  disabled: !email || !isValid,
  email,
  // emailError: touched.email ? errors.email : '',
  onEmailBlur: () => setFieldTouched('email'),
  onEmailChange: ({ currentTarget }) =>
    setFieldValue('email', currentTarget.value),
  onEmailFocus: () => setFieldTouched('email', false),
  onSubmit: handleSubmit,
});

const SubscribeContainer = withTranslation(ownProps => {
  const formikBag = useFormik(formikConfig);

  const props = {
    ...mapFormikBagToProps(formikBag),
    ...ownProps,
  };

  return <SubscribeComponent {...props} />;
});

export { SubscribeContainer };
