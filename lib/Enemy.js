const Potion = require('./Potion');
const Character = require('./Character');

//ES6 version of writing constructor functions into an ES6 Class
class Enemy extends Character {
    constructor(name, weapon){
        // call parent constructor here:
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }

}

//ES5 Constructer Function//This is how its written in ES5 Syntax
// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);
// }

// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

module.exports = Enemy;