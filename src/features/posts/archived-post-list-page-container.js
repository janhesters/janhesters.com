import { withTranslation } from 'hocs/localization.js';
import React from 'react';

import { ArchivedPostListPageComponent } from './archived-post-list-page-component.js';
import { archivedPostMetaData } from './post-helpers.js';

const ArchivedPostListPageContainer = withTranslation(ownProps => {
  const props = {
    ...ownProps,
    archivedPostMetaData,
  };

  return <ArchivedPostListPageComponent {...props} />;
});

export { ArchivedPostListPageContainer };
