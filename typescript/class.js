"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let kamal = new Employee(1, "kamal", "kasbah");
console.log(JSON.stringify(kamal));
