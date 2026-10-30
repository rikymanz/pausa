import { ButtonLink } from '../../components/ui/Button.jsx';
import { Card } from '../../components/ui/Card.jsx';

export function CheckInPlaceholder() {
  return (
    <section className="page page--centered" aria-labelledby="check-in-title">
      <Card className="message-card">
        <p className="eyebrow">Percorso guidato</p>
        <h1 id="check-in-title">Questa parte sta prendendo forma.</h1>
        <p>
          Il check-in verrà aggiunto nella sua fase dedicata. Per ora puoi tornare alla
          home: la struttura di base è pronta.
        </p>
        <ButtonLink to="/" variant="secondary">
          Torna alla home
        </ButtonLink>
      </Card>
    </section>
  );
}
