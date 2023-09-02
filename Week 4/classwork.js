let sum = (a, b) => a + b;


console.log(sum(5, 3));


let addToPrint = (num1) => {
    let sum = 0;              
    for(let i = 0; i < num1; i++) {
      sum += num1;
    }
    return sum;
};

console.log(addToPrint(4));


let myFunction = (a,b) => a + b;

console.log(myFunction(1,9)); 

let findSquareRoot = num => Math.sqrt(num); 

console.log(findSquareRoot(4)); 

let pythagoras = (num1, num2) => Math.sqrt((num1 * num2) + (num2 * num2));


console.log(pythagoras(2, 3)); 


let yourNumber = (num) => {
    return `Your number is ${num}.`; 
}

console.log (yourNumber(7)); 

/*let monthlyPayment = yearlyPayment => yearlyPayment / 12

*/

let monthlyPayment = yearlyPayment => {
    return (yearlyPayment / 12).toFixed(2); 
 
}


console.log(monthlyPayment(150));


let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0; 
    for (i= 0; i < num3; i++) {
        value = (value + num2) * num1;

    } return value / (num1 * (num3 *10)); 

}

console.log(fancyAlgorithm(15, 12, 13)); 


const multiplyByAdding = (a,b) => {
    let result = 0;
     for (let i = 0; i < b; i++) {
        result += a;
     } return result;

}

console.log(multiplyByAdding(2, 5)); 

let revert = value => !value;

console.log(revert(7)); 

let xor = (num1, num2) => num1 ^ num2; 

console.log(xor(5, 3)); 

const perfectSquare = param => Math.pow(param, 2); 

console.log(perfectSquare(3)); 

for (let i = "a"; i !== "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; i += "a") {
    console.log(i)
  }
  