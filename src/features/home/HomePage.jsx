import { ButtonLink } from '../../components/ui/Button.jsx';
import { Card } from '../../components/ui/Card.jsx';

const reassuranceItems = [
  {
    number: '01',
    title: 'Pochi minuti',
    text: 'Un percorso breve, pensato per chiedere poca energia.',
  },
  {
    number: '02',
    title: 'Nessun giudizio',
    text: 'Non devi spiegare tutto né sentirti subito meglio.',
  },
  {
    number: '03',
    title: 'Le tue scelte',
    text: 'Puoi fermarti in qualsiasi momento e decidere come proseguire.',
  },
];

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__glow" aria-hidden="true" />
        <p className="eyebrow">Uno spazio breve, quando serve</p>
        <h1 id="home-title">Fermati un momento.</h1>
        <p className="hero__lead">
          Non devi risolvere tutto adesso. Possiamo creare un po’ di spazio tra quello che
          senti e ciò che scegli di fare.
        </p>
        <ButtonLink className="hero__action" to="/check-in">
          Ho bisogno di una pausa
          <span aria-hidden="true">→</span>
        </ButtonLink>
        <p className="hero__note">Nessuna registrazione. I tuoi dati restano qui.</p>
      </section>

      <section className="reassurance" aria-label="Come funziona Pausa">
        {reassuranceItems.map((item) => (
          <Card className="reassurance-card" key={item.number}>
            <span className="reassurance-card__number" aria-hidden="true">
              {item.number}
            </span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
