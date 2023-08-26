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