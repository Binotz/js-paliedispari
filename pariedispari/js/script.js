// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//dichiarazione variabili
let userNumberInput;
let userEvenOrOdd;
//controllo che l'utente inserisca pari o dispari
do{
    userEvenOrOdd = prompt('inserisci o pari o dispari').toLowerCase();
}while( !(userEvenOrOdd === 'pari' || userEvenOrOdd === 'dispari') );

//controllo che il numero sia compreso tra 0 e 5
do{
    userNumberInput = parseInt(prompt('Inserisci un numero'));
}while(userNumberInput <= 0 || userNumberInput >= 6);

const pcNumber = randomGenerator(1,5);

//stampo i dati raccolti
console.log('Utente ha scelto', userEvenOrOdd);
console.log('Numero scelto dall utente', userNumberInput);
console.log('Numero scelto per il pc', pcNumber);

//stampo l'esito del gioco
if(evenOrOdd(userNumberInput, pcNumber) === userEvenOrOdd){
    console.log('utente ha vinto!');
} else {
    console.log('pc ha vinto!')
}

//Sezione funzioni
function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function evenOrOdd(num1, num2){
    let sum = num1 + num2;
    console.log("somma", sum)
    if(sum % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}
