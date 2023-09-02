class Zombie {
    constructor(name) {
        this.name = name;
        this.alive = false;
    }

    eat() {
        console.log(`${this.name} is eating ${food}`);
    }

}

class Poison {
    constructor() {
        this.strength = randomNum(1,10); 
    }
}

let ian = new Zombie('Ian');
let aubrey = new Zombie('Aubrey'); 

let zombies = [];




function randomNum(min, max) {
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}