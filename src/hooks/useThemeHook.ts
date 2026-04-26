import { useState, useEffect } from 'react';

const useThemeMode = () => {
  const [mode, setMode] = useState<string>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode
      ? savedMode
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setMode(event.matches ? 'dark' : 'light');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);


    // Add/Remove class on body
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.classList.toggle('light', mode === 'light');

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [mode]); // Re-run when mode changes

  const toggleMode = () => {
    const modetheme = mode === 'dark' ? 'light' : 'dark';
    setMode(modetheme);
    localStorage.setItem('themeMode', modetheme);
  };

  return { mode, toggleMode };
};

export default useThemeMode;