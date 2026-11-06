import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('yogesh_portfolio_theme') || localStorage.getItem('tonu_portfolio_theme');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        applyThemeToDOM(saved);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = prefersDark ? 'dark' : 'light';
        setTheme(initial);
        applyThemeToDOM(initial);
      }
    } catch (e) {
      applyThemeToDOM('dark');
    }
    setMounted(true);
  }, []);

  const applyThemeToDOM = (t) => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;

      html.classList.remove('dark-theme', 'light-theme');
      html.classList.add(`${t}-theme`);
      html.setAttribute('data-theme', t);

      if (body) {
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(`${t}-theme`);
        body.setAttribute('data-theme', t);
      }
    }
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('yogesh_portfolio_theme', next);
    } catch (e) {}
    applyThemeToDOM(next);
  };

  const changeTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setTheme(newTheme);
      try {
        localStorage.setItem('yogesh_portfolio_theme', newTheme);
      } catch (e) {}
      applyThemeToDOM(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: changeTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
