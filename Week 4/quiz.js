
const createLogName = (firstName, lastName) => firstName + " " + lastName
console.log(createLogName("Ollie", "Smith")); 


/*function doubleNumber(number) {
    return number * 2;
  }
  
  console.log(doubleNumber(10));

*/

const doubleNumber = num => num * 2

console.log(doubleNumber(10)); 


/*function getEvenNumbers(array) {

    let evenNumbers = [];
    
    for (let i of array) {
    if (i % 2 === 0) {
    evenNumbers.push(i);
    }
    }
    return evenNumbers;
    }
    
    console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected output: [2, 4, 6, 8, 10] */

/*  const getEvenNumbers = arr1 => {
    let evenNumbers = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            evenNumbers.push(arr1[i]);
        }
    }
    return evenNumbers;
}

console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); */


const getEvenNumbers = array => {
    let evenNumbers = [];
    for (let i of array) {
        if (i % 2 === 0) {
            evenNumbers.push(i); 
        }
    }
    return evenNumbers; 
}

console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); 


const customers = [
    {
    name: 'Sam',
    address: {
    street: '1234 W Bell Rd',
    city: 'Phoenix',
    zip: '85308',
    state: 'AZ'
    },
    membershipLevel: 'GOLD',
    age: 32
    },
    ];

    let customer = customers[0]; 
    console.log(customer); 

if (customer.name.charAt(0) === 'C') {
    console.log(`name's first letter matches with "C"`)
};

if (customer.membershipLevel == "GOLD") {
    console.log('GOLD'); 
}

if(customer.address.street !== undefined) {
    console.log('street field has a value'); 
}

const customers = [
    {
    // Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
    name: "Sam",
    address: {
    street: "1234 W Bell Rd",
    city: "Phoenix",
    zip: "85308",
    state: "AZ",
    },
    membershipLevel: "BRONZE",
    age: 32,
    },
    {
    // Object 2: Address field (street) is undefined, will not be added to the results array
    name: "Bob",
    address: {
    city: "Long Beach",
    zip: "9000",
    state: "CA",
    },
    membershipLevel: "GOLD",
    age: 32,
    },
    {
    // Object 4: Meets enough requirements, will be added to the results array
    name: "Christina",
    address: {
    street: "1234 Alamitos Ave",
    city: "Long Beach",
    zip: "90002",
    state: "CA",
    },
    membershipLevel: "SILVER",
    age: 21
    },
    ];


    Time left 189:17:44
Question 7
Not yet answered
Points out of 6.00
Flag question
Question text
Let's put it all together!



Premise: 
A product owner on your development team believes they've noticed a pattern regarding which customers purchase the most items. Please follow these instructions to process an array of customer objects and generate a new array that meets the specified requirements:

Iterate through the array of customer objects using a for loop.
For each customer object, check if the address field is defined.
If the address field is undefined, log a message to the console indicating that the address field is undefined.
If the address field is defined, proceed to the next step.
Check if ANY of the following conditions are met:
The customer's name starts with an uppercase 'C'.
The customer's membership level is "GOLD" or "PLATINUM". If the membership level is "SILVER" AND the age is less than 29, then that's okay, too. 
The customer's city is "Peoria" and the state is "AZ".
If any of the conditions from question 5 are met, push the customer object to a results array.
Once all customer objects have been processed, return the results array as the final output.
Note:

Accessing properties within an object requires the use of dot notation.
To start this question, you are given the following:
An array of customers named "customers."
The function and a call to the function. (The comparison logic is missing.)
The for-loop is provided to traverse the array. Notice the variable name within the for-loop!
Console logs are provided to understand the output of the statements.
Some of the choices below may be used more than once, while others may not be used at all.


JavaScript Customer Data:

const customers = [
{
// Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
name: "Sam",
address: {
street: "1234 W Bell Rd",
city: "Phoenix",
zip: "85308",
state: "AZ",
},
membershipLevel: "BRONZE",
age: 32,
},
{
// Object 2: Address field (street) is undefined, will not be added to the results array
name: "Bob",
address: {
city: "Long Beach",
zip: "9000",
state: "CA",
},
membershipLevel: "GOLD",
age: 32,
},
{
// Object 4: Meets enough requirements, will be added to the results array
name: "Christina",
address: {
street: "1234 Alamitos Ave",
city: "Long Beach",
zip: "90002",
state: "CA",
},
membershipLevel: "SILVER",
age: 21
},
];


const matchingCustomers = (custArray) => {

        let resultArray = [];
  
        for (let customer of custArray) {
            if(customer.address.street === undefined) {
                console.log("There are undefined address properties!", customer);

            } 
        }
        