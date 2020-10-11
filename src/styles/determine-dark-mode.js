export const determineDarkMode = () => {
  const storageKey = 'darkMode';
  const classNameDark = 'dark-mode';

  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia(preferDarkQuery);
  const supportsColorSchemeQuery = mql.media === preferDarkQuery;

  let localStorageTheme = null;

  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {
    console.log(err);
  }
  const localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  if (localStorageExists) {
    return localStorageTheme;
  } else if (supportsColorSchemeQuery) {
    return mql.matches;
  } else {
    // source of truth from document.body
    return document.body.classList.contains(classNameDark);
  }
};
