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
let currentAge = 14;

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

function lowestGrade (gradebook)  { 
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
