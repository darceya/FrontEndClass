/* 
Arrays are list and always start index with 0

*/

let customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');
customerNames.push('Dingy Dave');

console.log(customerNames[0]);

for (const item of customerNames) {
    console.log(item);
}

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

/* functions are like modularized code which can be named and reused

function nameWeWantToGiveIt () {}

Note - nothing happens with the function until you execute on it, call (invoke) it, etc




*/

function myFunction(){
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

myFunction(); 

/* grade book */ 

var firstName = "Mary";
var lastName = "Brown";
var assignmentOne = 100;
var assignmentTwo = 79;
var assignmentThree = 80;
var assignmentFour = 90;
var assignmentFive = 100;

console.log("Student: " + firstName + " " + lastName);
console.log("Grades:");
console.log("1: " + assignmentOne);
console.log("2: " + assignmentTwo);
console.log("3: " + assignmentThree);
console.log("4: " + assignmentFour);
console.log("5: " + assignmentFive);

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < 5; i++) {
console.log((i+1) + ": " + gradesArray[i]);
}

let counter = 1;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
console.log((counter++) + ": " + grade);
}

gradesArray.push(85);

counter = 1;
console.log("Grades: ");
for (let grade of gradesArray) {
    console.log((counter++) + ": " + grade);
}

/* Functions   



*/

function printLowerCase(name) {
    console.log(name.toLowerCase());
}

function multiply(num1, num2) {
    return num1*num2;
}

let ageRequiredToDrive = 16;
let currentAge = 13;

if (currentAge >= ageRequiredToDrive) { 
    console.log('This person can drive')
} else {
    console.log('This person cannot legally drive');
}

function checkCanDrive(age) {
    return (age >=16);
}
if (checkCanDrive(currentAge)) {
    console.log('This person can drive')
} else { 
    console.log('You walking')
}

function lowestGrade(gradebook)  { 
    if (gradebook.length > 0) {
        let lowGrade=gradebook[0];
        for (let grade of gradebook) {
            if (grade < lowGrade) {
                lowGrade = grade;
            }
        }
    } else {
        return 0;
    }
}

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
    console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation;" );
console.log("\tLowest Grade is: " + lowestGrade(gradesArray));



let contactOne = {
    firstName:"Mickey",
    lastName:"Mouse",
    address: {
        street:"1 Main Street",
        city:"Disneyland",
        state:"CA",
        zip:"92802",
    },
    phone:"123-456-7890",
    notes:"",
};
console.log(contactOne.firstName + " " + contactOne.lastName + "lives in " + contactOne.address.city + " " + contactOne.address.state);

console.log(customerNames);

let names = ['sam', 'brian', 'tom', 'april', 'benn']

let lengths = customerNames.map(function(element) {
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

names.forEach(function(element) {
    console.log(element);
});

let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(2,1);
console.log(removedElement); 


const isPassing = (currentValue) => currentValue >= 70;


gradesArray.push(55);
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) { 
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}


let s = 5

function loopUntilX (s) {
    for (let i = 0; i < s; i++) {
        console.log(i);
    } return true;
}

console.log(loopUntilX(s)); 


function returnSum(num1, num2, num3) {
    return (num1 + num2  + num3);
}

console.log(returnSum(1,2,3));

myList = ["homework", "study for test", "finish project"]
console.log(myList.length);
console.log(myList[myList.length-1]);
myList.push("submit");
console.log(myList[myList.length-1]);
myList.unshift("gather notes");
console.log(myList[0]);

myList.splice(1, 0, "make flashcards", "do labs");
console.log(myList);

myList.splice(2, 1);
console.log(myList);

for (let task of myList) {
    console.log(task);
}
myList.sort(); 
console.log(myList); 

myList.sort().reverse();
console.log(myList);
