import { I18nProvider } from 'features/localization/i18n.js';
import renderRW from 'riteway/render-component.js';

const render = Component =>
  renderRW(<I18nProvider language="en">{Component}</I18nProvider>);

export { render };
