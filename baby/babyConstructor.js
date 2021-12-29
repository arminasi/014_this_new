"use strict"

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
}

class Baby extends Person {
    constructor(options, favoriteToy) {
        super(options);
        this.favoriteToy = favoriteToy;
    };

    play(toy) {
        console.log(`PLaying with ${toy}`);
    }
}


const adult = new Person("Jim", 20);
const baby_1 = new Baby("Timon", 2);

baby_1.play("Garshok");