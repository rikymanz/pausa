# Progetto: Pausa — App per gestire i momenti di ansia

## 1. Visione

Sviluppare una Progressive Web App (PWA) che aiuti le persone ad affrontare momenti di ansia, stress, ruminazione e impulsi a reagire immediatamente.

L'app deve essere utile in contesti diversi: relazioni, lavoro, studio, salute, decisioni e incertezza.

**Principio fondamentale:** non promettere di eliminare l'ansia, ma aiutare l'utente ad attraversarla e a scegliere come agire.

L'interazione principale deve durare pochi minuti e richiedere pochissimo sforzo mentale.

### Obiettivi

- Accesso immediato, senza registrazione.
- Utilizzo semplice anche durante un picco di ansia.
- Esercizi pratici, brevi e comprensibili.
- Nessuna dipendenza da chatbot, rassicurazioni continue o statistiche.
- Esperienza mobile-first, accessibile e utilizzabile offline.
- Massima attenzione alla privacy.

Il nome "Pausa" è provvisorio.

## 2. Stack tecnologico

Utilizzare:

- React + Vite
- JavaScript con JSDoc dove utile
- CSS moderno con variabili di design
- React Router, se necessario
- IndexedDB con Dexie.js per eventuale storico locale
- localStorage per preferenze non sensibili
- vite-plugin-pwa per installazione e offline
- Vitest + React Testing Library
- Playwright per i principali flussi end-to-end
- ESLint + Prettier
- Cloudflare Pages per il deploy

Per l'MVP non utilizzare:

- Backend o database remoto
- Login o account
- API di intelligenza artificiale
- Chatbot
- Notifiche push
- Pubblicità
- Analytics di terze parti

Preparare una struttura modulare che permetta di aggiungere funzionalità in futuro.

## 3. Esperienza utente principale

L'app deve avere un pulsante centrale:

**"Ho bisogno di una pausa"**

Il percorso principale sarà:

Home → Check-in → Scelta dell'esercizio → Esercizio guidato → Check-out → Piccola azione concreta.

### Check-in

Chiedere:

1. "Quanto è intensa l'ansia in questo momento?" — scala facoltativa da 0 a 10.
2. "Di cosa hai bisogno adesso?" — scelta tra:
   - Calmare l'agitazione fisica
   - Interrompere un ciclo di pensieri
   - Gestire un impulso
   - Affrontare l'incertezza
   - Non lo so

Non obbligare l'utente a spiegare la causa dell'ansia.

### Check-out

Al termine:

- Permettere di indicare nuovamente l'intensità dell'ansia.
- Ricordare che non è necessario che l'ansia sia diminuita.
- Invitare a scegliere una piccola azione utile nella vita reale.
- Consentire di chiudere subito, senza ulteriori domande.

L'app non deve incoraggiare sessioni ripetitive per ottenere continue rassicurazioni.

---

# ROADMAP DI SVILUPPO

## FASE 1 — Setup e architettura

**Obiettivo:** creare le fondamenta del progetto.

Attività:

- Inizializzare Vite + React in JavaScript.
- Configurare ESLint, Prettier e Vitest.
- Definire la struttura delle cartelle.
- Creare il routing minimo.
- Predisporre un tema chiaro e scuro.
- Creare componenti UI riutilizzabili.
- Aggiungere un README con setup e comandi.
- Verificare build e avvio locale.

Struttura suggerita:

```text
src/
  app/
  components/
    ui/
    layout/
  features/
    checkin/
    exercises/
    checkout/
    history/
  data/
  hooks/
  services/
    storage/
  styles/
  utils/
  tests/
public/
```

**Criterio di completamento:** l'app si avvia, è responsive, ha una home funzionante e i test iniziali passano.

## FASE 2 — Interfaccia e design system

**Obiettivo:** realizzare un'esperienza visivamente calma e immediata.

Requisiti:

- Mobile-first.
- Tipografia leggibile e grandi pulsanti.
- Palette sobria con colori non allarmanti.
- Animazioni leggere, disattivabili tramite `prefers-reduced-motion`.
- Nessuna interfaccia sovraccarica.
- Testi empatici, brevi e non paternalistici.
- Navigazione completa da tastiera.
- Contrasti, etichette e focus visibili accessibili.

Schermate:

1. Home
2. Check-in
3. Scelta esercizio
4. Esercizio guidato
5. Check-out
6. Impostazioni

**Criterio di completamento:** tutti i percorsi sono navigabili con dati fittizi e funzionano su desktop e smartphone.

## FASE 3 — Check-in emotivo

**Obiettivo:** permettere all'utente di riconoscere il proprio stato senza doverlo analizzare a lungo.

Implementare:

- Slider opzionale da 0 a 10.
- Selezione del bisogno attuale.
- Pulsante per saltare le domande.
- Stato temporaneo della sessione.
- Suggerimento dell'esercizio più adatto, modificabile dall'utente.

Non assegnare diagnosi, categorie cliniche o interpretazioni psicologiche automatiche.

**Criterio di completamento:** è possibile raggiungere un esercizio anche senza compilare il check-in.

## FASE 4 — Esercizi guidati

**Obiettivo:** realizzare quattro strumenti indipendenti.

### 4.1 Respirazione lenta

- Animazione semplice per accompagnare il respiro.
- Ritmo iniziale indicativo: 4 secondi inspirazione, 6 espirazione.
- Possibilità di personalizzare il ritmo.
- Evitare di prescrivere respiri profondi o trattenute forzate.
- Possibilità di interrompere se l'esercizio provoca disagio.

### 4.2 Grounding 5-4-3-2-1

Guidare l'utente a notare:

- 5 cose che vede
- 4 cose che sente fisicamente
- 3 suoni
- 2 odori
- 1 sapore

Consentire di adattare o saltare passaggi.

### 4.3 Osserva l'impulso

Per i momenti in cui si sente il bisogno urgente di compiere un'azione non necessaria.

- Riconoscere l'impulso.
- Scegliere una pausa di 2, 5 o 10 minuti.
- Mostrare istruzioni brevi per osservare le sensazioni senza giudicarle.
- Consentire sempre di interrompere.
- Ricordare che si può scegliere come agire anche se l'impulso non scompare.

### 4.4 Fatti e pensieri

Un esercizio molto breve:

- "Che cosa so con certezza?"
- "Che cosa sto immaginando o prevedendo?"
- "C'è qualcosa di utile che posso fare adesso?"

Se non esiste un'azione concreta, proporre di tornare a un'attività quotidiana.

Non incoraggiare analisi interminabili. Non salvare automaticamente i testi inseriti.

**Criterio di completamento:** ogni esercizio funziona in modo indipendente, senza connessione e senza account.

## FASE 5 — Timer, sessione e check-out

**Obiettivo:** completare il percorso di gestione del momento d'ansia.

Implementare:

- Timer selezionabile da 2, 5 o 10 minuti.
- Gestione corretta del passaggio dell'app in background.
- Pausa, ripresa e uscita anticipata.
- Check-out facoltativo.
- Suggerimenti di piccole azioni concrete, come camminare, bere acqua, riprendere un'attività o parlare con una persona fidata.

Il timer deve basarsi sul tempo effettivamente trascorso e non soltanto sul numero di esecuzioni di un intervallo JavaScript.

Non impedire mai all'utente di uscire dall'esercizio.

**Criterio di completamento:** una sessione può essere avviata, completata o interrotta senza errori.

## FASE 6 — Salvataggio locale e privacy

**Obiettivo:** consentire uno storico minimale, senza server.

All'inizio lo storico sarà disabilitato. L'utente potrà abilitarlo volontariamente.

Eventuale schema dati:

```js
{
  id: "uuid",
  createdAt: "ISO timestamp",
  exerciseType: "breathing",
  durationSeconds: 300,
  intensityBefore: 7,
  intensityAfter: 5,
  completed: true
}
```

Requisiti:

- Utilizzare IndexedDB per le sessioni salvate.
- Preferenze in localStorage.
- Non salvare i testi personali degli esercizi.
- Possibilità di eliminare una singola sessione.
- Pulsante "Elimina tutti i miei dati".
- Informativa semplice e trasparente.
- Nessun trasferimento di dati personali a server.
- Nessun tracciamento pubblicitario.
- Evitare richieste di permessi non necessari.

Lo storico non deve usare classifiche, punteggi di successo o messaggi colpevolizzanti.

**Criterio di completamento:** tutti i dati possono essere visualizzati ed eliminati localmente; l'app rimane pienamente utilizzabile senza storico.

## FASE 7 — PWA e offline

**Obiettivo:** rendere l'app installabile e funzionante senza rete.

Implementare:

- Manifest PWA.
- Icone.
- Service worker.
- Caching degli asset statici.
- Funzionamento offline dopo la prima installazione.
- Esperienza corretta su Android, iOS e desktop nei limiti dei rispettivi browser.
- Nessuna dipendenza da servizi remoti per gli esercizi.

**Criterio di completamento:** disattivando Internet, l'utente può comunque avviare e completare gli esercizi.

## FASE 8 — Sicurezza, accessibilità e test

**Obiettivo:** rendere affidabile un'app usata anche in momenti di vulnerabilità.

Prevedere:

- Indicazione chiara che l'app non sostituisce un professionista della salute mentale.
- Accesso a risorse di supporto e indicazioni per le emergenze appropriate alla località, senza presentare l'app come servizio di crisi.
- Nessuna promessa di guarigione o riduzione certa dell'ansia.
- Evitare contenuti che inducano sensi di colpa quando l'ansia non diminuisce.
- Verifica dell'usabilità con utenti differenti.
- Revisione dei contenuti con un professionista qualificato prima della pubblicazione pubblica.

Test automatici:

- Flusso completo check-in → esercizio → check-out.
- Abbandono di un esercizio.
- Timer in background.
- Persistenza e cancellazione dei dati.
- Funzionamento senza storico.
- Funzionamento offline.
- Navigazione da tastiera e controlli accessibili.

**Criterio di completamento:** build stabile, test superati e nessun blocco nei percorsi principali.

## FASE 9 — Deploy

**Obiettivo:** pubblicare una prima versione utilizzabile.

Attività:

- Creare repository Git.
- Configurare Cloudflare Pages.
- Collegare il repository.
- Configurare build e deploy.
- Verificare HTTPS.
- Testare la versione pubblicata su smartphone.
- Creare una pagina privacy.
- Documentare limiti e funzionalità dell'MVP.

Il prodotto deve poter essere pubblicato senza configurare un database, backend o provider di autenticazione.

---

# Evoluzioni future — Non sviluppare nell'MVP

Possibili estensioni:

- Versione multilingua.
- Libreria di esercizi più ampia.
- Preferiti.
- Personalizzazione del percorso.
- Esportazione dei dati.
- Sincronizzazione opzionale fra dispositivi.
- Accessibilità avanzata.
- Contenuti revisionati da professionisti.

Qualsiasi sincronizzazione remota dovrà essere progettata separatamente, valutando sicurezza, protezione dei dati relativi alla salute e obblighi GDPR.

---

# ISTRUZIONI OPERATIVE PER CODEX

Sviluppa il progetto seguendo la roadmap in ordine.

**Non realizzare tutte le fasi contemporaneamente.**

Per ciascuna fase:

1. Analizza il repository e le convenzioni esistenti.
2. Presenta un piano tecnico sintetico.
3. Implementa esclusivamente la fase richiesta.
4. Mantieni il codice modulare, leggibile e semplice.
5. Aggiungi o aggiorna i test pertinenti.
6. Esegui lint, test e build, segnalando chiaramente ciò che non puoi verificare.
7. Aggiorna il README quando necessario.
8. Riassumi modifiche, decisioni tecniche ed eventuali problemi.
9. Fermati e attendi l'autorizzazione per la fase successiva.

Preferisci soluzioni semplici a generalizzazioni premature.

Non introdurre backend, database remoti, servizi AI o dipendenze non necessarie senza autorizzazione.

**Prima attività richiesta: implementare soltanto la FASE 1.**
