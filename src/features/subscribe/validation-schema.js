import { i18n } from 'features/localization/i18n.js';
import { object as yupObject, string as yupString } from 'yup';

export const subscribeValidationSchema = yupObject().shape({
  email: yupString()
    .email(i18n.t('subscribe.emailError'))
    .required(i18n.t('subscribe.emailRequired')),
});
