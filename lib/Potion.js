
//ES6 version of writing constructor functions into an ES6 Class
class Potion{
  constructor(name){
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.names === 'health'){
      this.value = Math.floor(Math.random() * 10 + 30);
    }else{
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

//ES5 Constructer Function//This is how its written in ES5 Syntax
// function Potion(name) {

//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
//     if (this.name === 'health') {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }


module.exports = Potion;