import { useTheme } from '../../app/theme-context.js';
import { Button } from './Button.jsx';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'scuro' : 'chiaro';

  return (
    <Button
      className="theme-toggle"
      variant="quiet"
      onClick={toggleTheme}
      aria-label={`Usa il tema ${nextTheme}`}
      title={`Usa il tema ${nextTheme}`}
    >
      <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
      <span className="theme-toggle__label">Tema {nextTheme}</span>
    </Button>
  );
}
