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
  loginMail = "Utente Loggato";
} else {
  loginMail = "Utente Non Registrato"
}

document.getElementById("login").innerHTML = loginMail;



