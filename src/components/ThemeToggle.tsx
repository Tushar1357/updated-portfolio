'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className={styles.icon} />
      ) : (
        <FiSun className={styles.icon} />
      )}
    </button>
  );
}
