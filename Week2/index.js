let age = 25
console.log(age);

let name = "Tom";
console.log(name);

let ageReguiredToDrive = 16;
let currentAge = 14
let canPersonDrive = currentAge >= ageReguiredToDrive;
console.log(canPersonDrive);

let firstName = "Benny";
if (firstName == "Tom"){
    console.log("Hello Tom");
} else {
    console.log("Hey, Dude" + " " + firstName);
}

let costOfMilk = 6
if (costOfMilk < 3) {
    console.log("I will buy two containers of milk");
} else if (costOfMilk <= 5) {
    console.log("I will buy one container of milk");
} else {
    console.log("I will not buy milk today")
}

let grade = "D"

switch (grade){
    case "A":
        console.log("90-100");
        break;
    case "B":
        console.log("80-89");
        break;
    case "C":
        console.log("70-79");
    default:
        console.log("0-69");

}

for (let i = 0; i < 10; i++) {
    console.log(i);

}
console.log("whatever is next"); 

for (let i = 0; i < 20; i++){
    if (i % 2 == 0) { 
        console.log(i);
    }

}

let names = ["sam", "tom", "greg", "lee", "matt"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 110 

/* do {
    console.log(a);
} while (a < 10)

for (i in names) {
    console.log(i);
}
for (name of names) {
    console.log(names);
}
let fullName = window.prompt("What is your name?");
window.alert(`Welcome, ${fullName}`);




/*var username = prompt('Username:');

var password = prompt('Password:');

if (username == 'samy123' && password == '12345') {

    alert('Welcome back, ' + username);

} else {

    alert('Inaccurate credentials!');

}
*/

