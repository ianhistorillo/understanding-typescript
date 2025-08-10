// typeof operator:
let userName = "Max";

console.log(typeof userName);

type UserName = typeof userName; 

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};

// type Settings = typeof settings;

function loadData(s: typeof settings) {
    //...
}

loadData(settings);

/** Another sample of typeof operator: */

function sum(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
    // some code...
}