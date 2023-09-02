
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
