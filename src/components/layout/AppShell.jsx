import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle.jsx';

export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Vai al contenuto
      </a>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Pausa, home">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Pausa</span>
        </Link>
        <ThemeToggle />
      </header>
      <main id="main-content" className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <p>Uno strumento di supporto, non un sostituto dell’aiuto professionale.</p>
      </footer>
    </div>
  );
}
