// Réponse numero 1
let base = prompt("Entrer base:")
//---------------------------
let height = prompt("Entrer height:")
//---------------------------
const aire = 0.5 * base * height;
console.log(aire)


// Réponse numero 2
let numbera = prompt("Entrer side a:")
//---------------------------
let numbersb = prompt("Entrer side b:")
//---------------------------
let numbersc = prompt("Entrer side c:")
//---------------------------
const périmètre = parseFloat(numbera) + parseFloat(numbersb) + parseFloat(numbersc);
console.log(périmètre)


// Réponse numero 3
let length = prompt("Entrer length :");
// -------------------------------
let width = prompt("Entrer width :");
// -------------------------------
const aireDurectangle = length * width ;
console.log(aireDurectangle);
// -------------------------------
const périmètreDurectangle = 2 * (parseFloat(length) + parseFloat(width));
console.log(périmètreDurectangle);
// -------------------------------


// Réponse numero 4
let rayon = prompt("Entre rayon :");
rayon = parseFloat(rayon)
let PI = 3.14;
const aireDucercle = PI * rayon * rayon;
console.log(aireDucercle);

// Réponse numero 5
let y = 0;
let rouge = prompt("Entrer la valeur de m :");
let vert = prompt("Entrer la valeur de b :");
let formule = - parseFloat(rouge) / parseFloat(vert);
let valeurdex = formule;
console.log(formule);
 
// Réponse numero 6
let x1 = 2;
let y1 = x1;
let x2 = 6;
let y2 = 10; 
let value = parseFloat((y2 - y1)/(x2 - x1))
console.log(value);


// Réponse numero 7
let pente1 = formule;
let pente2 = value;
console.log(formule < value)


// Réponse numero 8
let a = 1;
let b = 6;
let c = 9;
console.log(y = b ** 2 - 4 * a * c)
let x = prompt("Entrer une veleur de x pour que y soit = 0");
let result = parseFloat(y = a * x ** 2 + b * x + c );
console.log(result);


// Réponse numero 9
let heure = prompt("Entrer vos heure :")
let tarif = prompt("Entrer votre tarif horaire :")
let salaire = parseFloat(heure) * parseFloat(tarif) ;
console.log(salaire);


// Réponse numero 10
alert("Si la longueur de votre nom est supérieure à 7, disons que votre nom est long, sinon, disons que votre nom est court.")


// Réponse numero 11
let firstName = 'Mohamed'
let lastName = 'Diallo'
console.log(firstName.length > lastName.length)
alert("Your first name, Mohamed is longer than your family name, Diallo")


// Réponse numero 12
let myAge = 35
let yourAge = 25
let somme = parseFloat(35 - 25)
alert("I am 10 years older than you.");


// Réponse numero 13
let firstbirthyear = prompt("Enter birth year:")
alert("You are old enough to drive");
let secondbirthyear = prompt("Enter birth year")
alert("You will be allowed to drive in a few years");


// Réponse numero 14
let one = prompt("Enter number of years you live: ");
let two = one * 3153600000;
console.log(two);


// Réponse numero 15
const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Ajout de 1 car les mois commencent à 0
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

console.log(formattedDate); 
// ---------------------------
const now1 = new Date();
const day1 = now.getDate().toString().padStart(2, '0');
const month1 = (now.getMonth() + 1).toString().padStart(2, '0'); // Ajout de 1 car les mois commencent à 0
const year1 = now.getFullYear();
const hours1 = now.getHours().toString().padStart(2, '0');
const minutes1 = now.getMinutes().toString().padStart(2, '0');
const formattedDate1 = `${day}-${month}-${year} ${hours}:${minutes}`;

console.log(formattedDate1);
// ------------------------------
const now2 = new Date()
const option = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}
const formattedDate2 = now.toLocaleString('fr-FR',option)
console.log(formattedDate);