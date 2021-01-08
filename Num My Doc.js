/*~~~ IS IT TRUE? ~~~*/
// Apakah Number
Number.isFinite(123); //true
Number.isFinite(-1.23); //true
Number.isFinite(0); //true
Number.isFinite("123"); //false
console.log(Number.isFinite(Infinity)); //false

// Apakah Bilangan Bulat
Number.isInteger(0); //true
Number.isInteger(0.5); //false

// Apakah NaN
Number.isNaN(1); //false
Number.isNaN(0.2); //false
Number.isNaN("NaN"); //false
Number.isNaN(NaN); //true

/*~~~ Convert to exponential notation ~~~*/
a = 123456;
a = a.toExponential(); //1.23456e+5

/*~~~ Math ~~~*/
const toDegrees = (angle) => angle * (180 / Math.PI); //convert radian to degrees
const degrees = (angle) => angle * (Math.PI / 180); //convert degrees to radian
a = Math.abs(-7.25); //7.25;
a = Math.pow(4, 3); //4^3 = 64
a = Math.sqrt(9); //akar 9 = 3
a = Math.sign(-2); //-1; sign(3) => 1; sign(0) => 0

// Trigonometri
a = Math.sin(degrees(30)); //sin(30) = 0.5 | 30 derajat
a = Math.cos(degrees(60)); //0.5
a = Math.tan(degrees(45)); //1

// exp & log
a = Math.exp(2); //e^2 = 7.38905609893065;
a = Math.log(Math.exp(2)); //elog(e^2) = 2
a = Math.log10(100); //10log(10^2) = 2

// Pembulatan
a = Math.floor(1.6); //1; round down  //this section berlaku untuk negative number
a = Math.ceil(1.6); //2; round up
a = Math.round(1.6); //2; round nearest
a = Math.fround(1.6); //1.600000023841858; pembualatan presisi 32 bit
a = Math.trunc(1.6); //1; remove decimal

a = Math.PI; //3.141592653589793 (number)
b = a.toFixed(2); //"3.14" (string)
b = parseFloat(a.toFixed(2)); // 3.14  (number)

a = Math.max(...[1, 2, 3]); //3; ...[1,2,3] = 1,2,3 jadinya Math.max(1,2,3) => 3
a = Math.min(...[1, 2, 3]); //1

//Random number
function randomInt(min, max) {
  //returns a random number between min and max (both included)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//PEMBAGIAN 17/2 = 8 sisa 1
a = Math.floor(17 / 2); //8; sama kyk 17//2 (python)
a = 17 % 2; //1; sisanya

//logarithm with specific base
const logBase = (n, base) => Math.log(n) / Math.log(base);

// Prime Number
var prime = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
];

a = 2;
b = a.toPrecision(2);
console.log(b);
