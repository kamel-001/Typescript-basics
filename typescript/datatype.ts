let fname : string;
let lName : string;

fname = "kamal";

let newName = fname.toUpperCase();

console.log(newName)

lName = "habrich"

let newLName = lName.toUpperCase();

console.log(newLName)

let age : number;
 age = 20;
 age = 25.5;

let result = parseInt("25");
console.log(result)

let isValid : boolean= false;

console.log(isValid)

let emptyList : string[];

emptyList = ["kamel", "kamal","jamal","jamel"]
let numList : Array<number>;
numList = [1,2,3,4,5,6]

let res = numList.filter((num) => num>2)

let emp = emptyList.find((emp) => emp === "kamel");

console.log(res);
console.log(emp);

let sum = numList.reduce((acc,num) => acc + num);

console.log(sum);

const enum Color {
  Red,
  Green,
  Blue
}

let c:Color = Color.Blue;

let swapNumbs: [number,number];

function swapNumbers(num1: number,num2: number): [number,number]{
return [num1,num2]
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];

console.log(swapNumbs[1])
console.log(swapNumbs.reduce((acc, num) => acc + num));

 let departement :any;

 departement = "IT"
 departement = 10;