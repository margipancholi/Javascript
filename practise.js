// // find max no with arrow function 
// // const maxNo = (n) =>{
// //     let max= 0;

// //         for ( let i=0 ; i < arguments.length ;i++ )
// //         {
// //             if(arguments[i] >max)
// //             max = arguments[i];
// //         }
    
// //     return max;
// // }
// console.log( Math.max(10,5,25,225));

// We define some simple functions here
// function add(x,y) { return x + y; }
// function subtract(x,y) { return x - y; }
// function multiply(x,y) { return x * y; }
// function divide(x,y) { return x / y; }

// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
// function operate(operator, operand1, operand2) {
//     return operator(operand1, operand2);
// }


// const operators = {
//     add:      (x,y) => x+y,
//     subtract: (x,y) => x-y,
//     multiply: (x,y) => x*y,
//     divide:   (x,y) => x/y,
//     pow:      Math.pow  
// };

// function operate2(operation, operand1, operand2) {
//     if (typeof operators[operation] === "function") {
//         return operators[operation](operand1, operand2);
//     }
//     else "unknown operator";
// }

// console.log(  operate2(operators.subtract , "hello ", "world")) // => "hello world"
// console.log( operate2("pow", 10, 2)) // => 100
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;  // Return and increment counter property
}
console.log( uniqueInteger())  // => 0
console.log( uniqueInteger() )  // => 1


function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();   // Create two counters
console.log(c.count())                           // => 0
console.log(d.count())                         // => 0: they count independently
//console.log(c.reset());                          // reset() and count() methods share state
console.log(c.count())                           // => 0: because we reset c
console.log(d.count())  