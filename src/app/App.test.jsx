import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { App } from './App.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';

function renderApp(initialEntries = ['/']) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <App />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe('App', () => {
  it('mostra la home e apre il punto di ingresso del percorso', async () => {
    const user = userEvent.setup();
    renderApp();

    expect(
      screen.getByRole('heading', { name: 'Fermati un momento.' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /ho bisogno di una pausa/i }));

    expect(
      screen.getByRole('heading', { name: /questa parte sta prendendo forma/i }),
    ).toBeInTheDocument();
  });

  it('permette di passare dal tema chiaro al tema scuro', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('button', { name: 'Usa il tema scuro' }));

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(window.localStorage.getItem('pausa:theme')).toBe('dark');
  });

  it('offre un percorso di ritorno per gli indirizzi inesistenti', () => {
    renderApp(['/qualcosa-che-non-esiste']);

    expect(
      screen.getByRole('heading', { name: /torniamo a un punto tranquillo/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Torna alla home' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
