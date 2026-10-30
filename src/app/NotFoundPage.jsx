import { ButtonLink } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';

export function NotFoundPage() {
  return (
    <section className="page page--centered" aria-labelledby="not-found-title">
      <Card className="message-card">
        <p className="eyebrow">Pagina non trovata</p>
        <h1 id="not-found-title">Torniamo a un punto tranquillo.</h1>
        <p>Questa pagina non esiste oppure è stata spostata.</p>
        <ButtonLink to="/">Torna alla home</ButtonLink>
      </Card>
    </section>
  );
}
