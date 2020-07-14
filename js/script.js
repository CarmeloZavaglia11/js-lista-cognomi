// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Routine Settaggio Cognome

var cognomeUtente = prompt('inserisci il tuo Cognome');
var numeri = RegExp('[0-9]' );
var carSpec = RegExp('[!@#$%^&*()+=,./{}|:<>?]');

while((numeri.test(cognomeUtente) == true) || (carSpec.test(cognomeUtente) == true)){
   alert('Cognome non valido');
   cognomeUtente = prompt('inserisci il tuo Cognome');
}


var cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();

// Inizializzazione e aggiunta cognomeUtente nell'array e ordino alfabeticamente

var cognomi = ['Rossi', 'Verdi', 'Forte', 'Deangelis', 'Maldini'];



i = 0;
uguale = false;
while (i < cognomi.length && uguale == false) {
    if (cognomeUtente == cognomi[i]) {
        uguale = true;
    }
    i++;
}
if (!uguale) {
    cognomi.push(cognomeUtente);
}




cognomi.sort();
// Stampo la lista con la relativa posizione dell'elemento

// Soluzione con while
// i = 0
// while (i < cognomi.length) {
//     if (cognomeUtente == cognomi[i]){
//         document.getElementById('cognomi').innerHTML += '<li>' + cognomi[i] + ' ' + 'si trova in posizione: ' + (i + 1) + '</li>';
//     } else {
//         document.getElementById('cognomi').innerHTML += '<li>' + cognomi[i] + '</li>';
//     }
//     i++
// }

// Soluzione con For

for (var i = 0; i < cognomi.length; i++) {
    if (cognomeUtente == cognomi[i]){
       document.getElementById('cognomi').innerHTML += '<li>' + cognomi[i] + ' ' + 'si trova in posizione: ' + (i + 1) + '</li>';
    } else {
       document.getElementById('cognomi').innerHTML += '<li>' + cognomi[i] + '</li>';
    }
}
