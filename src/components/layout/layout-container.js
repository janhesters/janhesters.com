import { withTranslation } from 'hocs/localization.js';
import React, { useState } from 'react';

import { LayoutComponent } from './layout-component.js';

const LayoutContainer = withTranslation(ownProps => {
  const [open, setOpen] = useState(false);

  const props = {
    ...ownProps,
    open,
    onBurgerMenuClick: () => {
      setOpen(o => !o);
    },
    onDismiss: () => {
      setOpen(false);
    },
  };

  return <LayoutComponent {...props} />;
});

export { LayoutContainer };
