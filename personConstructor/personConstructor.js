"use strict"

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    };

    eat(someFood) {
        if(this.stomach.length === 10) {
            this.stomach.pop();
            console.log(`${Person.name} can't to eat anymore, need to poop`);
        };
        this.stomach.push(someFood);
    };

    insideStomach(stomach) {
        let i = 0;
        this.stomach = stomach;
        stomach.forEach(function(food) {
            console.log(food + i);
            i++;
        })
    }

    poop() {
        this.stomach = [];
        console.log("Stomach is empty");
    };

    Info() {
        console.log(`${this.name}'s ${this.age} years old`);
    };
};

const p1 = new Person("Joe", 2);

p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.insideStomach(p1.stomach);
p1.poop();
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.eat("food");
p1.insideStomach(p1.stomach);
p1.Info()