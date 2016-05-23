import _ from 'lodash';

class AnimalRandomizer {
  
  constructor(){
    this.animals = [
      "dog",
      "cat",
      "duck",
      "horse",
      "boar",
      "snake",
      "rat",
      "mouse",
    ];
  }

  getRand(){
    return this.animals[Math.floor(Math.random() * this.animals.length)];
  }

  generateAnswers(number){
    console.log(number);
    var res = [];
    for(let i = 0; i<number; i++){
      res.push({
        id: i,
        answer: this.getRand()
      });    
    }
    console.log(res);
    return res;
  }
}

module.exports = AnimalRandomizer;
