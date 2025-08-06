let names: Array<string> = ['Max', 'Anna'];

// Creating and Using a Generic Type
type DataStore<T> = {
    [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};

// Working with more generic types
function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(1, 'Max');

//Generics and Constraints

function mergeObj<T extends object>(a: T, b: T) {
    return {...a , ...b};
}

const merged = mergeObj({userName: 'Max'}, {age: 35});
console.log(merged);

// Constraints & Multiple Generic Types

function mergeObj1<T extends object, U extends object>(a: T, b: U) {
    return {...a , ...b};
}

const merged1 = mergeObj1({userName: 'Max'}, {age: 35});
console.log(merged1);

// Generic Classes and Interfaces

class User<T> {
    constructor(public id: T) {}
}

const user = new User('i1');
user.id