// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


console.log("inizia");

function pariDispari(i){
     console.log(`calcolo segreto:  ${ i % 2 == 0}`)
}

function gioca(){
     let pari = document.getElementById('pari').checked;
     let dispari = document.getElementById('dispari').checked;
     let numero = parseInt(document.getElementById('numeroUtente').value);

     console.log(pari, dispari, numero);

     let random = numeroRandom(1,5);
     document.writeln(`Il numero random è: ${random}.`)
     console.log("il numero random è:" + random)

     let somma = random + numero; //somma
     document.writeln(`Quindi la somma è: ${somma}.`)
     console.log(`la somma dei numeri è: ${somma}`) 

     let risultato = pariDispari(somma) ? 'pari' : 'dispari';
     console.log(`la somma dei numeri è ${somma}, che è ${risultato}`)
     
     if( (sceltaUtente == 'pari' && pariDispari(somma)) || (sceltaUtente == 'dispari' && !pariDispari(somma))){
          document.writeln('Hai vinto!')
          console.log("ha vinto l'utente")
     } else{
          document.writeln('Hai perso :(')
          console.log('ha vinto il pc')
     }
}

//genero numero random
function numeroRandom(min, max){
     console.log("ho chiamato il random!");
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let sceltaUtente = document.getElementById('pari').checked || document.getElementById('dispari').checked;
console.log(sceltaUtente)


// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// chiedo la parola
function checkParola(){
     let parola = document.getElementById('parola').value

     console.log(parola)
}

for(let i=0; i < parola.length; i++){
     
}




