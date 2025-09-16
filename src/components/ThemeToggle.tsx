import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { theme, isDark, setTheme, toggleTheme } = useDarkMode();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" aria-hidden="true" />;
      case 'dark':
        return <Moon className="w-5 h-5" aria-hidden="true" />;
      case 'system':
        return <Monitor className="w-5 h-5" aria-hidden="true" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system preference';
      case 'system':
        return 'Switch to light mode';
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
    }
  };

  return (
    <div className="relative">
      {/* Main toggle button */}
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={getLabel()}
        title={getLabel()}
      >
        <span className="theme-toggle-icon">
          {getIcon()}
        </span>
        <span className="theme-toggle-text">
          {getThemeText()}
        </span>
      </button>

      {/* Dropdown for direct theme selection */}
      <div className="theme-dropdown">
        <button
          onClick={() => setTheme('light')}
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          aria-pressed={theme === 'light'}
        >
          <Sun className="w-4 h-4" aria-hidden="true" />
          <span>Light</span>
        </button>
        
        <button
          onClick={() => setTheme('dark')}
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          aria-pressed={theme === 'dark'}
        >
          <Moon className="w-4 h-4" aria-hidden="true" />
          <span>Dark</span>
        </button>
        
        <button
          onClick={() => setTheme('system')}
          className={`theme-option ${theme === 'system' ? 'active' : ''}`}
          aria-pressed={theme === 'system'}
        >
          <Monitor className="w-4 h-4" aria-hidden="true" />
          <span>System</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;