import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="theme-switch-floating" role="region" aria-label="Theme Switcher">
      <div className="theme-switch-tooltip">
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </div>
      <button
        type="button"
        className="theme-switch-btn"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="theme-switch-pulse"></span>
        <div className="theme-switch-icon-wrapper">
          {isDark ? (
            /* Sun Icon with Rays for switching to Light Mode */
            <svg
              className="theme-switch-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffb703"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" fill="#ffb703" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            /* Crescent Moon Icon for switching to Dark Mode */
            <svg
              className="theme-switch-icon"
              viewBox="0 0 24 24"
              fill="#e5540a"
              stroke="#e5540a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitch;
