import { withTranslation } from 'hocs/localization.js';
import React, { useRef, useState } from 'react';

import { HeaderComponent } from './header-component.js';

const HeaderContainer = withTranslation(ownProps => {
  const emailRef = useRef();
  const subscribeRef = useRef();
  const [showSubscribe, setShowSubscribe] = useState(false);

  const props = {
    ...ownProps,
    emailRef,
    onCancelClick: () => {
      setShowSubscribe(false);
      if (subscribeRef.current) {
        subscribeRef.current.focus();
      }
    },
    onSubscribeClick: () => {
      setShowSubscribe(true);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    },
    showSubscribe,
    subscribeRef,
  };

  return <HeaderComponent {...props} />;
});

export { HeaderContainer };
