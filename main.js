// map


let fruits_i_hate = ["Margi", "margi", "maya", "Jay"];



for (let i = 0; i < fruits_i_hate.length; i++) {
    let myFruit = fruits_i_hate[i]
    console.log(myFruit[0].toUpperCase() + myFruit.substring(1));
}

// const cap_first_latter = (name) => name.toUpperCase()
// let total = fruits_i_hate.reduce(cap_first_latter)

// console.log("Total", total)


// Firstly, let’s get this out of the way, FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.

function square(x) {
    return x * x;
}

console.log(square(5));

for (i = 0; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log("fizz", i);
    } else if (i % 5 == 0) {
        console.log("buzz", i);
    } else {
        console.log("fizz buzz", i);

    }
}


//cal
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function sub(a, b) {
    return a - b;
}
console.log(sub(20, 10));
//console.log("Add",add);

//test
function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
//greet
function greet(name, time) {
    console.log(name, "good", arguments[1], "!!");
}
greet('Jack', 'morning');
//cal
const Op = {
    add: "add",
    sub: "sub",
    div: "div",
    mul: "mul"
};

const myoperator = (op, v1, v2) => {

    let result = 0;
    if (op == Op.add) {
        result = v1 + v2;
    }
    else if (op == "sub") {
        result = v2 - v1;
    }
    else if (op == "div") {
        result = v2 / v1;
    }
    else if (op == "mul") {
        result = v2 * v1;
    }
    else {
        return result;
    }
    return result;
}
console.log(myoperator(Op.mul, 20, 20));

//reverse no
function reverse_number(n) {
    n = n + "";
    return n.split("").reverse("").join("");
}
console.log(reverse_number(12345));

//find max 
function max_number(n) {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) { //loop through arg.length
        if (arguments[i] > max)                    // condition is arg> max or not
            max = arguments[i];
    }
    return max;
}
console.log(max_number(10, 20, 100, 5, 4, 15, 111));

console.log(Math.max(52, 25, 10, 111, 258, 40, 50, 12, 78, 100));
console.log(Math.min(52, 25, 10, 111, 258, 40, 50, 12, 78, 100));

//palindrome or not 
function check_palindrome(str) { //madam
    // count total length
    let len = str.length; //madam = 5 
    //divide by 2
    for (let i = 0; i < (len / 2); i++) { //len / 2
        if (str[i] == str[i].len - 1 - i) {  //if firchar == lastchar then true
            //  let str2 = str[i].len-1-i;
            return;
        } else {
            console.log(" its not palindrome ");

        }
    }
}
check_palindrome('madam');

//get set method 
function counter(n) {  // Function argument n is the private variable
    return {
        // Property getter method returns and increments private counter var.
        get count() { return n++; },
        // Property setter doesn't allow the value of n to decrease
        set count(m) {
            if (m > n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}

let c = counter(1111000);
console.log(c.count)         // => 1000
//constructor
// function Person() {

// }
// can create multiple objects
// let Person1 = new Person();

let biggest = Math.max.apply(Math, [1, 45, 20]);
let smallest = Math.min.call(Math, (1, 45, 20));
console.log(biggest);
console.log(smallest);

const f = new Function("x", "y", "return x*y;");
console.log(f);


function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//random id generate
function makeid(l) {
    let text = "";
    let list = "0123456789*.@#ABCDEFGHIJKLMNPQRSTUVWXYZ";
    for (let i = 0; i < l; i++) {
        //text++;
        text = list.charAt((Math.random() * list.length)) + text;

    }
    return text;
}
console.log(makeid(8));

//prime or not

function check_prime(n) { // number % 2 == 0 false
    for (let i = 1; i < n; i++) {

        if (n == 1) {
            return true;
        } else if (n == 2) {
            return true;
        } else if (n % 2 == 0) {
            console.log("not a prime , morethan two factors", n);
            return false;
        } else {
            console.log("its a prime ", n);
            return true;
        }
    }

    return true;
}
console.log(check_prime(13));



