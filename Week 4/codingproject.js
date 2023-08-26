/* 1. Create an array called ages */

ages = [3, 9, 23, 64, 2, 8, 28, 93]

console.log(ages);

/* 1.a. Subtract the value of the first element in the array from the value in the last element in the array.
    Do not use numbers to reference the last element (so use ages.length-1)
    ages[0] - ages[7] is not allowed
 */
function subtractAgeFirstFromLast(ages) {
  const firstElement = ages[0];
  const lastElement = ages[ages.length - 1];
  const result = lastElement - firstElement;

  return result; 
}

console.log(subtractAgeFirstFromLast(ages)); 

  /*const firstElement = ages[0];
  console.log(firstElement);

  const lastElement = ages[ages.length - 1];
  console.log(lastElement);

console.log(lastElement - firstElement); /*

  /* 1.b. Add a new age to your array and repeat the step above to ensure its dynamic */
 
  
ages.push(56);
console.log(ages); 

console.log(subtractAgeFirstFromLast(ages)); 

ages.push(100);
console.log(ages); 

console.log(subtractAgeFirstFromLast(ages)); 

  /* 1.c. Use a loop to iterate through the array and calculate the average age */
 

function averageAge(ages) { 
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
  } const average = sum / ages.length;
  return average; 
}

console.log(averageAge(ages)); 



/* 2. Create an array called names */

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log(names); 

/* 2.a. Use a loop to iterate throught the array and calculate the average number of letters per name*/ 

function averageNumberOfLettersName(names) { 
  let totalLetters = 0;
  for (const name of names) {
    totalLetters += name.length;
  } return averageLetters = totalLetters / names.length; 
  
}
console.log(averageNumberOfLettersName(names)); 




  /* 2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
 */

  function namesConcatenate(names) { 
    let namesConcat = " ";
    for (let i = 0; i < names.length; i++) {
      namesConcat += names[i] + " "; 
    } return namesConcat; 
    }

console.log(namesConcatenate(names)); 


/* 3. How do you access the last element of any array?
*/

console.log(ages[ages.length - 1]); 
console.log(names[names.length - 1]); 

/* 4. How do you access the first element of any array?
*/
console.log(ages[0]); 
console.log(names[0]); 

/* 5. Create a new array called namesLength. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.
 Starting with names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] create a new array with lengths. */

 nameLengths = [];

 for (let i = 0; i < names.length; i++) {
  const lengths = names[i].length;
  nameLengths.push(lengths); 
 }

 console.log(nameLengths); 

 /* 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements
 in teh array. */

 function sumOfNames(nameLengths) {
  let sum = 0
  for (i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]
  } return sum; 
 }
 nameLengths = [];

 for (let i = 0; i < names.length; i++) {
  const lengths = names[i].length;
  nameLengths.push(lengths); 
 }

 console.log(sumOfNames(nameLengths)); 

  /* 7. Write a function that takes two parameters (word and n) as arguments and returns the word 
  concatenated to itslef n number of times (ie if i pass in Hello and 3, expected return of HelloHelloHello). */

 

function wordFunction(word, n) {
    console.log(word.repeat(n)); 
  }

  wordFunction("Hello", 3); 



  /* 8. Write a function that takes two parameters (as noted) and returns a full name. The full name
  should be the first and the last name separated by a space. */


let createFullName = (firstName, lastName) => `${firstName} ${lastName}`; 

console.log(createFullName("Casa", "Azul"));