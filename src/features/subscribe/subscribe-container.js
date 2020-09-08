import { useFormik } from 'formik';
import { withTranslation } from 'hocs/localization.js';
import React from 'react';

import { SubscribeComponent } from './subscribe-component.js';
import { subscribeValidationSchema } from './validation-schema.js';

const subscribe = async email => {
  try {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { message } = await res.json();

    alert(message);
  } catch (error) {
    alert(error);
  }
};

const formikConfig = {
  onSubmit: ({ email }) => {
    subscribe(email);
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
  setFieldValue,
});

const mergeProps = ({ onSubmit, onCancelClick, setFieldValue, ...rest }) => ({
  onSubmit: (...args) => {
    onSubmit(...args);
    setFieldValue('email', '');
    typeof onCancelClick === 'function' && onCancelClick();
  },
  ...rest,
});

const SubscribeContainer = withTranslation(ownProps => {
  const formikBag = useFormik(formikConfig);

  const props = mergeProps({
    ...mapFormikBagToProps(formikBag),
    ...ownProps,
  });

  return <SubscribeComponent {...props} />;
});

export { SubscribeContainer };
