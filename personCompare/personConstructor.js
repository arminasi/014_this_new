"use strict"

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };


    compareAge(Person) {
        if(Person.age > this.age) {
            return `${Person.name} older than ${this.name}`;
        } else if(Person.age < this.age) {
            return `${Person.name} is younger than ${this.name}`;
        } else if(Person.age === this.age) {
            return `${Person.name} is the same age as ${this.name}`;
        } else
            return false;
    };
};


const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p3.compareAge(p2));
console.log(p3.compareAge(p1));