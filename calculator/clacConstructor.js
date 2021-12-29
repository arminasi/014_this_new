"use strict"

class Calculator {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    };

    add() {
        return this.left + this.right;
    }
    subtract() {
        return this.left - this.right;
    }
    multiply() {
        return this.left * this.right;
    }
    divide() {
        return this.left / this.right;
    }
}

let item = new Calculator(10, 5);
console.log(item.add());
console.log(item.subtract());
console.log(item.multiply());
console.log(item.divide());