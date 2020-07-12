import { PostPageContainer } from 'features/posts/post-page-container.js';
import React from 'react';

import { page } from './page.js';

const withPost = meta =>
  page(({ children }) => (
    <PostPageContainer meta={meta}>{children}</PostPageContainer>
  ));

export { withPost };
