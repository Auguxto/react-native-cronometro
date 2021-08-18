import {useEffect, useState} from 'react';

import {getFromStorage, saveToStorage} from '@utils/storage';

import localThemes from '../themes.json';

const useTheme = () => {
  const themes: IThemes = localThemes;
  const [theme, setTheme] = useState(themes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  function toggleTheme() {
    if (theme.name === 'Light') {
      setTheme(themes.dark);
    } else if (theme.name === 'Dark') {
      setTheme(themes.light);
    }
    saveToStorage('theme', theme);
  }

  useEffect(() => {
    (async () => {
      const localTheme = await getFromStorage('theme');
      localTheme ? setTheme(localTheme) : setTheme(themes.light);
      setThemeLoaded(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {theme, themeLoaded, toggleTheme};
};

export default useTheme;
