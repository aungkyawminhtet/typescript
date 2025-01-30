let myString : String = "hello";
let myNumber : Number = 1000;

let largerData: BigInt = BigInt("192992922929299229");
const isActive: Boolean = false;
const uniqueKey: Symbol = Symbol("description");

const emptyValue: null = null;

let initialdata: undefined = undefined;

const obj: {name: String, age: Number} = {
    name: "John",
    age: 20
}


const data: Number[] = [1,2,3,4,5,6,7,8,9,10];
const data2: Array<Number> = [1,2,3,4,5,6,7,8,9,10];
const stringData: String[] = ["John", "Doe", "Jane", "Doe"];
const dataObj : {name: String, age: Number}[] = [{name: "John", age: 20}, {name: "Jane", age: 30}];

enum Color {
    Red = "red",
    Green = "green",    
    Blue = "blue"
}

// if (theme === Color.Red) {
//     console.log("Red color");
// }


// interface
interface User1 {
    city: String,
}

interface User1 {
    family: String;
}

interface User extends User1 {
    name: String,
    age: Number,
    isActive?: Boolean
}

const user: User = {
    name: "Bob", 
    age: 20,
    city: "New York",
    family: "Doe",
    // isActive:true
}

// type alias
type animal1 = {
    gender?: String
}

type animal = animal1 &{
    name: String,
    age: Number
}

const dog: animal = {
    name: "Dog",
    age: 10
}

const car: {name : String, model : String, year?: Number} = {
    name: "Audi",
    model: "A8",
    
}


// type literal
type Description = "east" | "west" | "north";
const des: Description = "west";

// union
type A = {a: String};
type B = {b : String};

type AB = A & B;

const ab: AB = {
    a: "a",
    b: "b"
}

// the assertion and casting

const someValue : any = "this is a String";
const strlen: Number = (someValue as String).length;
console.log(strlen); 

// function
function add( e: number  , f : number) {
    return "Result ="  + (e + f)
}

add(2, 3);

interface Addd {
    (a: number, b: number): Number 
}

const ADD: Addd = (a, b) => (a+b);
ADD(1, 1);

// hight order function
function someFun (fun: (a: number, b: number) => Number, other: number) {
    return fun(other, 20);
}


// function divide(a: number, b: number): Number {
//     return a/b;
// }

// someFun(divide, 200);
console.log(someFun((a:number, b:number): number => a/b, 200));


//void
function returnVoid() : void{
    console.log("Somethind");
}

const returnVoid2 : ()=> void = () => {
    console.log("Something");
} 

//unknown
function unknown(a: any) {
    a.name;
}

//safer
function unknown2(a: unknown) {
    return a;
}

//never
function error(message: string): never {
    throw new Error(message);
}

function check(x : number | string) {
    if (typeof x === "number") {
        console.log("do Something");
    } else if (typeof x === "string") {
        console.log("do Something");
    } else {
        return x;
    }
}    

// rest parameter

function restParameter (a : number, ...b: number[]) {
    return b.map((x: number)  => x + a);
}

let c = restParameter(10, 1, 2, 3, 4, 5);

// destructuring

type destructuringType = {
    name: string,
    age: number
}
function destructuring({name, age}: destructuringType): string {
    return name + age;
}   