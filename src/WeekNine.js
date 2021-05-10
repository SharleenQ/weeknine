// create a function that takes two numbers and a mathematical operator = - / * and will perform a calculation with the given numbers.
//calFunc(3, "+", 4) -> 7
// Answer 
function calFunc(num1, operator, num2) {
    operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b 
    }
    return operations[operator](num1, num2)
}
console.log(calFunc(3, "+", 4))
// create a function that takes an array and returns the sum of all items in the array. The item in an array can be another array.
// sumFunc([1, [2, [1]], 3])
// 1 + 2 + 1 + 3 = 7
function sumFunc(arr) {
    return arr.flat(Infinity).reduce((a,b) => a+b)
}
console.log(sumFunc([1, [2, [1]], 3]))
// create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.
// flatten([[17.2, 5, "SDV503"]]) -> [17.2, 5, "SDV503"]
const flatten = (arr) => {
    const result = [];
    arr.forEach(element => {
        Array.isArray(element) ? result.push(...flatten(element)) : result.push(element)
    })
}
