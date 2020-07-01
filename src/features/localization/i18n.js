import { COOKIE_LOOKUP_KEY_LANG } from '@unly/universal-language-detector';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { map, mergeDeepRight } from 'ramda';
import React, { createContext, useEffect, useRef, useState } from 'react';
import rosetta from 'rosetta';

import { en } from './locales/en.js';

const languageMap = map(mergeDeepRight(en), { en });

const i18n = rosetta(languageMap);

const defaultLanguage = 'en';
const supportedLanguages = Object.keys(languageMap);

i18n.locale(defaultLanguage);
const I18nContext = createContext();

function I18nProvider({ children, language }) {
  const firstRender = useRef(true);

  if (language && firstRender.current === true) {
    firstRender.current = false;
    i18n.locale(language);
  }

  const [, setTick] = useState(0);

  function forceReRender() {
    setTick(t => t + 1);
  }

  const activeLocaleRef = useRef(language || defaultLanguage);

  useEffect(() => {
    if (language) {
      i18n.locale(language);
      activeLocaleRef.current = language;
      forceReRender();
    }
  }, [language]);

  const i18nWrapper = {
    language: activeLocaleRef.current,
    setLanguage: l => {
      i18n.locale(l);
      activeLocaleRef.current = l;
      forceReRender();
      Cookies.set(COOKIE_LOOKUP_KEY_LANG, l);
    },
    t: (...args) => i18n.t(...args),
  };

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
};

export { defaultLanguage, i18n, I18nContext, I18nProvider, supportedLanguages };
