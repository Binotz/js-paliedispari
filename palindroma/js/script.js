// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Dichiaro variabili
const inserted = document.getElementById('inserted');
const result = document.getElementById('result');
const word = prompt('inserisci la parola');
inserted.innerHTML = word;

//controllo se palindroma tramite l'apposita funzione
if(isPalindrome(word.toLowerCase()) ){
    msg = 'Palindroma'
} else {
    msg = 'NON palindroma'
}
//stampo il messaggio
result.innerHTML = msg;



// Function section
function isPalindrome(word=''){
    let reverseWord = '';
    //estraggo la parola al contrario ciclando al contrario...
    for (let i = word.length-1; i >= 0; i--){
        //... e la salvo su una nuova stringa
        reverseWord += word[i];
    }
    // se i caratteri delle due stringhe sono diversi NON è palindroma e ritorna false
    for(let i = 0; i < word.length; i++){
        if (word[i] !== reverseWord[i]){
            return false;
        }
    }
    //altrimenti true
    return true;
}
