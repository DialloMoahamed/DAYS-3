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