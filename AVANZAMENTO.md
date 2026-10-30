# Avanzamento della roadmap

Ultimo aggiornamento: **30 ottobre 2026**

Questo documento registra lo stato di avanzamento del progetto. La descrizione completa
di obiettivi, requisiti e criteri di completamento rimane in
[`roadmap.md`](./roadmap.md).

## Stato delle fasi

| Fase                                | Stato       | Note                                                    |
| ----------------------------------- | ----------- | ------------------------------------------------------- |
| 1 — Setup e architettura            | Completata  | React/Vite, routing, tema, componenti UI, test e README |
| 2 — Interfaccia e design system     | Da iniziare | In attesa di autorizzazione                             |
| 3 — Check-in emotivo                | Da iniziare | —                                                       |
| 4 — Esercizi guidati                | Da iniziare | —                                                       |
| 5 — Timer, sessione e check-out     | Da iniziare | —                                                       |
| 6 — Salvataggio locale e privacy    | Da iniziare | —                                                       |
| 7 — PWA e offline                   | Da iniziare | —                                                       |
| 8 — Sicurezza, accessibilità e test | Da iniziare | —                                                       |
| 9 — Deploy                          | Da iniziare | —                                                       |

## Fase 1 — Setup e architettura

**Stato:** completata

### Realizzato

- Inizializzazione di React e Vite in JavaScript.
- Configurazione di ESLint, Prettier, Vitest e React Testing Library.
- Struttura modulare iniziale del codice.
- Routing per home, ingresso futuro al check-in e pagina non trovata.
- Tema chiaro e scuro persistente.
- Componenti UI e layout riutilizzabili.
- Home responsive, mobile-first e accessibile.
- README con requisiti, comandi e struttura del progetto.

### Verifiche

- `npm run format:check`: superato.
- `npm run lint`: superato.
- `npm test`: 3 test superati.
- `npm run build`: superato.
- Verifica visiva locale su desktop e viewport stretto: superata.
- Risposta del server locale: `200 OK`.

### Decisioni

- Il nome provvisorio usato nell’interfaccia è “Pausa”.
- L’interfaccia iniziale è in italiano.
- La pagina del check-in è soltanto un segnaposto: la funzionalità verrà sviluppata
  nella fase prevista dalla roadmap.
- Non sono stati eseguiti deploy e non sono state introdotte funzionalità delle fasi
  successive.

## Prossimo passo

**Fase 2 — Interfaccia e design system**, da iniziare soltanto dopo l’autorizzazione
dell’utente.
