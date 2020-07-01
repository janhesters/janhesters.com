import { I18nContext, I18nProvider } from 'features/localization/i18n.js';
import React, { useContext } from 'react';

const withTranslation = Component => ownProps => {
  const { t } = useContext(I18nContext);

  const props = {
    t,
    ...ownProps,
  };

  return <Component {...props} />;
};

const withI18nProvider = Component => props => (
  <I18nProvider language="en">
    <Component {...props} />
  </I18nProvider>
);

export { withI18nProvider, withTranslation };
