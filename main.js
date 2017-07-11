// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(number1, number2){
  if(number1 > number2){
    return number1;
  }else {
    return number2;
  }
}
console.log(max(10, 100));



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(number1, number2, number3){
 if ((number1 > number2)&& (number1 > number3)) {
   return number1;
 }else if ((number2 >number1) && (number2 > number3)){
   return number2;
 }else if ((number3>number1) && (number3 > number2)) {
   return number3;
 }
}
console.log(maxOfThree(40, 118, 1));




// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char)
{
if (char.length === 1)
{
  let vowels = new Array('a','e','i','o','u');
  let isVowel = false;

  for(let i in vowels)
  {
    if(vowels[i] === char)
    {
      isVowel = true;
    }
  }

  return isVowel;
}
}
console.log(isVowel('x'));



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (a, b){
   return a+b;
}
 console.log(sum(4, 9));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(b1, b2, b3){
  let w = (b1+b2+b3)/3
  return w;
}
console.log(avg(4, 6, 2));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(p){
   let g = new String (p);
   return g.length;
 }
console.log(getLength('sa'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x1, x2){
     if (x2 > x1) {
          return 'true';
      }else{
          return 'false';
      }
    }

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(Name) {
   let y = new String(Name);
   return 'Hello, '+Name;
}
console.log(greet('Salazar'));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(firsTname, lastName, nationality, city) {
  return 'your full name is '+firsTname+' '+lastName+' and you are '+nationality+'and currently lives in '+city;
}
console.log(madlib('alain', 'roky', 'french', 'paris'));
