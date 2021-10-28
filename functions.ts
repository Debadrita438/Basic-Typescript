const add = (n1: number, n2: number) => {
    return n1 + n2;
};

const printResult = (num: number) => {
    console.log('Result: ', num);
};

// Can be done but better not to use it, instead make th return type of the function is void
// const printResult = (num: number): undefined => {
//     console.log('Result: ', num);
//     return;
// };

printResult(add(5, 12));

// Function types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

addAndHandle(10, 20, (result) => {
    console.log(result);
});
