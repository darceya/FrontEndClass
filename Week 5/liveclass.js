/* class Human { 
    constructor(name) {
        this.alive = true;
        this.name = name;

    }

}

class Accountant extends Human {
    constructor(name) {
        super(this.name); 
        this.alive = false; 
    }
}
    
    
class Zombie extends Accountant {
    constructor(name) {
        this.name = name;

        this.alive = false;
    }

    eat() {
        console.log(`${this.name} is eating ${food}`);
    }

}

/* class Weapon {
    constructor() {
        this.strength = randomNum(1,10); 
    }

    blowUp() {
        console.log(`Self Destructing`); 
    }

    break() {
        this.broken = true; 
        this.amountToFix = this.strength; 
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


Zombie Hunters

Wearwolves

Accountants

function randomNum(min, max) {
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

} */


class Human {
    constructor(name) {
        this.alive = true;
        this.name = name;
    }
}
class Accountant extends Human {
    constructor(name) {
        super(name);
        this.alive = false;
        this.inventory = [];
        
    }
    deathbyexplosion() {
        if (this.alive) {
            this.alive = false;
            console.log(`${this.name} has met a fiery end due to an explosion`);
        
        } else {
            console.log(`{$this.name} is already no more!`); 
        }
    }


}
class Zombie extends Accountant {
    constructor(name) {
        super(name);
    }
    eat(food) {
        console.log(`${this.name} is eating ${food}`);
    }
}
class Weapon {
    constructor() {
        this.strength = randomNum(1,10);
    }
    blowUp() {
        console.log('Self destructing');
    }
    break() {
        this.broken = true;
        this.amountToFix = this.strength;
        this.payToFix = () => {
            this.broken = false;
        }
    }
}
class Poison extends Weapon {
    constructor() {
        super();
    }
}

