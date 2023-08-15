

var money = 150
var planeTicket = 450
var vacationTime = false
var buyPlaneTicket = money >= planeTicket;

console.log(buyPlaneTicket);

if (buyPlaneTicket == true && vacationTime == true) {
    console.log("We can go on a vacation!");
} else { 
    console.log("False, work harder");
}

console.log(money >= planeTicket && vacationTime);

if (45 > 45){
    console.log("Poodles");
 } else {
    console.log("Labradors");
 }

let x = 100
 if (x % 2 == 0) {
    console.log("x is even");
 } else {
    console.log("x is odd");
 }

let num1 = 4
let num2 = 3
let num3 = 0
let num4 = 2

if (num1 >= num2) {
    if (num3 >= num4) {
        console.log("Both statements are true");
    } else {
        console.log("The first statement is true, but the second is not");
    }
}
    console.log("Program Ended");
    

let age = 21;
let isAdult = false;

 if (age >= 13) {
     if (age >= 65) {
        isAdult = true;
        console.log("You pay the Senior Citizen price of $25!");
     } else {
        isAdult = true;
        console.log("You pay the full ticket price of $35!");
     }
 } else {
    console.log("You pay the Child ticket price of $15!");
 }

let numberGrade = 90
let letterGrade

 if (numberGrade >=90) {
    letterGrade = "A";
 } else if (numberGrade >= 80 && numberGrade <= 89) {
    letterGrade = "B";
 } else if (numberGrade >= 70 && numberGrade <= 79) {
    letterGrade = "C";
 } else if (numberGrade >= 60 && numberGrade <= 69) {
    letterGrade = "C";
 } else if (numberGrade >= 0 && numberGrade <= 59) {
    letterGrade = "F";
 }
 console.log(letterGrade);
 

 let numberOfDay = 8;

switch(numberOfDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("The number of day is invalid.");
}

let monthNumber = 0;

switch(monthNumber){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

var str1 = 'hello';
var str2 = 'Hello';
console.log(str1 === str2);

console.log(45 === "45");

var a = 5; 
var b = 2; 
var c = 'blue';

console.log(a == 5);     
console.log(b === '2');  
console.log(c == 'Blue'); 

let l = 17
let m = 18
let n = 16
let o = 12

console.log(l > m || (m > n && n > o));

let day = "Sunday"
console.log(day === "Saturday" || day === "Sunday");

/*  if(age >= 16 ){
    canDrive = true;
    console.log(canDrive);
*/

/* 
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i + " foo")
    }



var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}
*/ 



let g = 1
let num = 3
for (let i = 1; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + num * i);
}

let numz = 50
do {
    console.log(numz);
    numz += 6;
  } while (numz < 100);

  for (let i = 0; i <= 99; i += 3) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


var i = 0;
do{
    if (i % 3 === 0){
       console.log(i);
    }
    i++;
 }
 while (i <= 99);


 let currentCupsOfRice = 0
 let requiredCupsOfRice = 5

 while (currentCupsOfRice < requiredCupsOfRice) {
    currentCupsOfRice++;
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
  }
  
  console.log("We have enough rice!");

let points = 0;
let pointsReset = false;

for (var i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if (i % 2 === 0){
        points = points + 5;
    } else {
        points = points + 3;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}

/* for (var i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if (i % 2 === 0){
        points = points + 5;
    } else {
        points = points + 3;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}