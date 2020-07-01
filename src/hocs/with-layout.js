import { LayoutContainer } from 'components/layout/layout-container.js';
import React from 'react';

const withLayout = WrappedComponent => props => (
  <LayoutContainer>
    <WrappedComponent {...props} />
  </LayoutContainer>
);

export { withLayout };
