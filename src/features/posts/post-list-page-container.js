import { withTranslation } from 'hocs/localization.js';
import React from 'react';

import { postMetaData } from './post-helpers.js';
import { PostListPageComponent } from './post-list-page-component.js';

const PostListPageContainer = withTranslation(ownProps => {
  const props = {
    ...ownProps,
    postMetaData,
  };

  return <PostListPageComponent {...props} />;
});

export { PostListPageContainer };
