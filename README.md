# Pausa

Pausa è una Progressive Web App in sviluppo, pensata per offrire strumenti brevi e
accessibili nei momenti di ansia, stress, ruminazione o impulso. Non promette di
eliminare l’ansia: aiuta a creare uno spazio prima di scegliere come agire.

Questa versione contiene le fondamenta definite nella **Fase 1** della roadmap:

- React e Vite in JavaScript;
- routing minimo e home responsive;
- tema chiaro e scuro persistente;
- componenti UI di base;
- test iniziali, lint e formattazione.

Il check-in, gli esercizi, il salvataggio locale e le funzioni PWA saranno aggiunti
nelle rispettive fasi della roadmap.

## Requisiti

- Node.js 20.19 o successivo
- npm 10 o successivo

## Avvio locale

```bash
npm install
npm run dev
```

Vite mostrerà nel terminale l’indirizzo locale da aprire nel browser.

## Comandi

| Comando                | Descrizione                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Avvia il server di sviluppo                  |
| `npm run build`        | Crea la build di produzione in `dist/`       |
| `npm run preview`      | Visualizza localmente la build di produzione |
| `npm run lint`         | Controlla il codice con ESLint               |
| `npm run format`       | Formatta i file con Prettier                 |
| `npm run format:check` | Verifica la formattazione senza modificarla  |
| `npm test`             | Esegue i test una volta                      |
| `npm run test:watch`   | Esegue i test in modalità interattiva        |

## Struttura

```text
src/
  app/                 configurazione dell’app e provider globali
  components/
    layout/            shell e layout condivisi
    ui/                componenti UI riutilizzabili
  features/
    checkin/           futura funzionalità di check-in
    home/              pagina iniziale
  styles/              token di design e stili globali
  tests/               configurazione comune dei test
```

La roadmap completa si trova in [`roadmap.md`](./roadmap.md).

## Privacy e limiti

La versione corrente non invia né salva dati personali. Pausa è uno strumento di
supporto e non sostituisce un professionista della salute mentale o un servizio di
emergenza.
