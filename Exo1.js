// Réponse numero 1
let firstName = "Mohamed";
let lastName = "";
let country = undefined;
let city = NaN;
let age = 18;
let isMarried = false;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));


// Réponse numero 2
console.log('10' == 10);


// Réponse numero 3
let num = parseInt('9,8');
console.log(num === 10);


// Réponse numero 4
let isLightOn = true;
let isRaining = true;
let isHungry = true;
// ------------------
let isarried = false;
let Valuefalse = 4 >= 14;   
let falseValue = 4 < 3; 


// Réponse numero 5
const first = 4 > 3;
console.log(4 > 3 );
// ------------------ 
const second = 4 >= 3; 
console.log(4 >= 3); 
// ------------------ 
const third = 4 < 3;
console.log(4 < 3); 
// ------------------ 
const four = 4 <= 3;
console.log(4 <= 3);
// ------------------ 
const five = 4 == 4; 
console.log(4 == 4);
// ------------------ 
const six = 4 === 4; 
console.log(4 === 4);
// ------------------ 
const seven = 4 != 4; 
console.log(4 != 4); 
// ------------------ 
const eight = 4 !== 4;
console.log(4 !== 4); 
// ------------------ 
const nine = 4 != '4';
console.log(4 != '4');
// ------------------ 
const ten = 4 == '4';
console.log(4 == '4'); 
// ------------------ 
const eleven = 4 === '4';
console.log(4 === '4'); 
// ------------------ 
console.log("Python".length > "jargon".length);


// Réponse numero 6
const check = 4 > 3 && 10 < 12 
console.log(check); 
//--------------------------    
const chek = 4 > 3 && 10 > 12    
console.log(chek);   
//--------------------------    
const checks = 4 > 3 || 10 < 12  
console.log(checks);   
//--------------------------    
const checke = 4 > 3 || 10 > 12 
console.log(checke);   
//--------------------------    
const checkee = !(4 > 3)  
console.log(checkee);  
//--------------------------    
const checker = !(4 < 3)   
console.log(checker);   
//--------------------------    
let checkes = !(false)
console.log(checkes);   
//--------------------------    
let checkout = !(4 > 3 && 10 < 12)
console.log(checkout); 
//--------------------------    
let checed = !(4 > 3 && 10 > 12)
console.log(checed);
//--------------------------    
let checkd = !(4 === '4')           
console.log(checkd);

// Réponse numero 7
const now = new Date();
const year = now.getFullYear();
console.log(year);
//--------------------------    
const month = now.getMonth();
console.log(month);
//--------------------------    
const date = now.getDate() 
console.log(date);
//--------------------------    
const Days = now.getDay() 
console.log(Days);
//--------------------------    
const hours = now.getHours()
console.log(hours);
//--------------------------    
const minutes = now.getMinutes()
console.log(minutes);
//--------------------------    
const Second = now.getSeconds(); 
console.log(Second);
const milisecondes = now.getTime()
console.log(milisecondes);