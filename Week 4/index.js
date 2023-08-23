let myString = `Hello 
Stranger, 
stop staring at me.`;
console.log(myString); 

let oldString = `Hello\nDudley.`;
console.log(oldString);

console.log(`Ten times seven = ${10 * 7}`); 

let firstName = 'Mickey';
let lastName = 'Mouse';
let street = '1 Main St.';
let city = 'Disneyland';
let state = 'CA';

console.log(
`${firstName} ${lastName} lives at 
${street} 
${city}, ${state}.`);


/* Arrow Function
using funtion fullName to taking firstname and lastname. use arrow function instead.
=> creates arrow/fat arrow

Arrow Function () => .....
() indicates the input of teh function,
=> indicates the function (takes the input from the left and outputs to the right),
...indictates the output of that function

Regular functions are constructible; however Arrow Functions are only callable, not constructible.  
An arrow function can be used instead of a traditional function expression, with the following differences:
-  Arrow Functions should not be used as methods, and do not have bindings to this, arguments, or super
-  Arrow Functions can not be used as constructors.  You may not invoke an arrow function with the new keyword.

*/

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName(`uncle`, `grandpa`));

let someFunction = (a,b) => {
    let result = ``;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction(`shut up`, 3));

/* function power(base,level) {
    return base * level
};
console.log(power(3, 3));
*/

const powerFunction = (base, level) => {return base*level};
console.log(powerFunction(2,2));
console.log(powerFunction(9,2));


const power = (base, exp) => {
    let result = 1;
    for (let count = 0; count < exp; count++) {
    result *= base;
    }
    return result;
    };
    
    console.log(power(1,3));
    console.log(power(7,2));
 
    function multiply(num1, num2) {
        return num1*num2;
    }
console.log(multiply(9,2)); 

/*doSomethingThatReturnsaPromise()
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.error(err);
    });
*/


    const booleanFlag = true;
let trueOrFalse = new Promise((resolve, reject) => {
if (booleanFlag) {
resolve("The flag is true!");
} else {
reject("The flag is false!");
}
});

// This will print out the promise that you've just declared
console.log(trueOrFalse);

trueOrFalse
.then(function successValue(result) {
console.log(result);
})
.then(function successValue2() {
console.log("You can call multiple functions this way.");
})
.catch(function failureValue(reject) {
console.log(reject);
});