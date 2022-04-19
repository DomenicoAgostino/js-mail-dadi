console.log("Hello World");


// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
// stampa un messaggio appropriato sull’esito del controllo.


const email = ["boolean@gmail.com", "dome@gmail.com", "superman@gmail.com"]
console.log("email");

const username = prompt("Inserisci la tua mail");
console.log(username);

let mailRegistrata = false;


for (let i = 0; i < email.length; i++) {
  console.log("email");
}

for ( let i = 0; i < email.length; i++) {
  if(email[i] === username){
    mailRegistrata = true;
  } 
}


if(mailRegistrata){
  loginMail = "Eccoti! Pronto per Inizare? GL";
} else {
  loginMail = "Devi prima registrarti per accedere ai nostri giochi. Che cosa aspetti?"
}

document.getElementById("login").innerHTML = loginMail;



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



const play1 = Math.floor(Math.random() * 6) + 1;
const play2 = Math.ceil(Math.random() * 6);

let avviso;

if(play1 > play2){
  avviso = "Ha vinto il player 1";
}else if(play2 > play1){
  avviso = "Ha vinto il player 2";
}else{
  avviso = "Pari!!";
}


console.log('play1',play1);
console.log('play2',play2);
console.log(avviso);

