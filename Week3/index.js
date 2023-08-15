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