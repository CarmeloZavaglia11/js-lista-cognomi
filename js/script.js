// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Routine Settaggio Cognome

var cognomeUtente = prompt('inserisci il tuo Cognome');
primaLettera = cognomeUtente.charAt(0).toUpperCase();
lettereRestanti = cognomeUtente.slice(1).toLowerCase();
var cognomeUtente = primaLettera + lettereRestanti;

// Inizializzazione e aggiunta cognomeUtente nell'array e ordino alfabeticamente

var cognomi = ['Rossi', 'Verdi', 'Forte', 'Deangelis', 'Maldini'];
cognomi.push(cognomeUtente);
cognomi.sort();
// Stampo la lista con la relativa posizione dell'elemento
trovato = false;
i = 0;

while (i < cognomi.length && trovato == false) {
    if (cognomeUtente == cognomi[i]) {
        trovato = true;
    }
    i++
}

if (trovato) {
    alert('il Cognome '+  cognomeUtente + 'si trova in posizione ' + i) ;
} else {
    alert('non trovato')
}
