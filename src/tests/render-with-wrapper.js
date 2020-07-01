import { I18nProvider } from 'features/localization/i18n.js';
import renderRW from 'riteway/render-component.js';
import { ThemeProvider } from 'styles/theme-provider.js';

const render = Component =>
  renderRW(
    <ThemeProvider>
      <I18nProvider language="en">{Component}</I18nProvider>
    </ThemeProvider>,
  );

export { render };
