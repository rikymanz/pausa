import { createContext, use } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  const context = use(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve essere usato dentro ThemeProvider');
  }

  return context;
}
