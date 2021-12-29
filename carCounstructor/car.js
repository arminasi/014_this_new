"use strict"

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    };

    fill(gallons) {
        let full = 100;
        if(gallons >= full) {
            console.log(`${this.model}'s tank is full`);
            return this.tank = full;
        }
        this.tank += gallons;
        console.log(`fuel level is ${this.tank}, last fill was ${gallons}`);
    };

    drive(distance) {
        if(this.tank <= 0) {
            this.tank = 0;
            return `${this.model} can't be driven because low level of fuel`;
        };
        distance = 100 / this.milesPerGallon;
        this.odometer += distance;
        this.tank -= this.milesPerGallon;
        return `${this.model} has burn ${distance} liter of fuel, and current fuel level is ${this.tank}`;
    };
};

const item = new Car("Bmw", 10);

item.fill(100)
console.log(item.tank);
item.drive();
item.drive();
item.drive();
console.log(item.drive());
console.log(item.odometer);