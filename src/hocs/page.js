import { compose } from 'ramda';

import { withI18nProvider } from './localization.js';
import { withLayout } from './with-layout.js';

const page = compose(withI18nProvider, withLayout);

export { page };
