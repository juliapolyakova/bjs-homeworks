"use strict";

// Задание 1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.oriDurability = durability;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
      if (this.durability === 0) {
        return 0;
      } else if (this.durability >= this.oriDurability * 0.3) {
        return this.attack;
      } else {
        return this.attack / 2;
      }
    }

    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
}

class Arm extends Weapon {
  constructor() {
    super();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.oriDurability = this.durability;
  }
}

class Bow extends Weapon {
  constructor() {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.oriDurability = this.durability;
  }
}

class Sword extends Weapon {
  constructor() {
    super();
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.oriDurability = this.durability;
  }
}

class Knife extends Weapon {
  constructor() {
    super();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.oriDurability = this.durability;
  }
}

class Stick extends Weapon {
  constructor() {
    super();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.oriDurability = this.durability;
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.oriDurability = this.durability;
  }
}

class StormStick extends Stick {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const stick = new Stick();
const longBow = new LongBow();
const axe = new Axe();
const stormStick = new StormStick();

knife.takeDamage(20);
console.log(knife.durability);
console.log(knife.getDamage());
console.log(knife.isBroken());

console.log(stormStick.name);
stormStick.takeDamage(320);
console.log(stormStick.durability);
console.log(stormStick.getDamage());
console.log(stormStick.isBroken());



// Задание 3
class StudentLog {
    constructor (name) {
      this.name = name;
      this.marks = {};
    }
  
    getName() {
      return this.name;
    }
   
    addGrade(grade, subject) {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      }
      
      if (Number(grade) && 1 <= grade && 5 >= grade) {
        this.marks[subject].push(grade);
      } else {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      }
  
      return this.marks[subject].length;
    }
    
    getAverageBySubject(subject) {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      }
  
      if (this.marks[subject].length === 0) {
        return 0;
      } else {
        let sum = 0;
        let items = this.marks[subject].length;
        for (let i = 0; i < items; i++) {
          sum += this.marks[subject][i];
        } 
        return sum / items;
      }  
    }
  
    getTotalAverage() {
      let items = 0;
      let sum = 0;
      for (let subject in this.marks) {
        sum += this.getAverageBySubject(subject);
        items++;
      }
  
      let totalAverage = sum/items;
      return totalAverage;
    }
}
  
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(5, 'geometry');
log.addGrade(1, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'algebra');
console.log(log.getAverageBySubject('music')); 
console.log(log.addGrade('отлично!', 'math'));
console.log(log.getAverageBySubject('algebra')); 
console.log(log.getAverageBySubject('geometry'));
console.log(log.addGrade(8, 'algebra')); 
console.log(log.getTotalAverage());
  