import { isJSDocNamepathType } from "typescript";

class Employee {
    id:number;
    name:string;
    address:string;
    constructor(id:number,name:string,address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let kamal = new Employee(1,"kamal","kasbah");

console.log(JSON.stringify(kamal))