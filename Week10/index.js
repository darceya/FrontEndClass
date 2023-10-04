console.log("Welcome to Week 10 and Surviving!"); 


let buttonsByTag = document.getElementsByTagName('button');
console.log(buttonsByTag);

let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName); 

let buttonsByCSSSelector = document.querySelectorAll('button.my-class');
console.log(buttonsByCSSSelector); 

let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye!') {
        content.innerHTML = 'Howdy';
    } else {
        content.innerHTML = 'Adios!'
    }
}); 