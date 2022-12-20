function add(num1: number, num2:number) : number{
    return num1 + num2;
}

console.log(add(2,4));

const sub = (num1 : number, num2 :number) : number => num1 - num2;

console.log(sub(4,5))

const multi = function(num1 : number, num2 :number) : number {
    return num1 * num2;
}
console.log(multi(8,89))

// Function with optional parameter

function add2(num1: number, num2:number, num3?:number) : number{
    return num3? num1 + num2 + num3: num1 + num2;
}

console.log(add2(3,5))

console.log(add2(3,5,5))

//function with a parameter with default value is has not be defined when the function called,


const sub2 = (num1 : number, num2 :number, num3 = 20) : number => num1 - num2 - num3;

console.log(sub2(4,5))
console.log(sub2(4,5,40))

// GENERIC TYPE FUNCTION

function getItems<Type>(items: Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult.reduce((acc , num)=> acc +num ))
let concatString = getItems<string>(["a","b","c","d","e"])
console.log(concatString)