// map


let fruits_i_hate = ["Margi", "margi", "maya", "Jay"];



for (let i = 0; i < fruits_i_hate.length; i++) {
    let myFruit = fruits_i_hate[ i]
    console.log(myFruit[0].toUpperCase() + myFruit.substring(1));
}

// const cap_first_latter = (name) => name.toUpperCase()
// let total = fruits_i_hate.reduce(cap_first_latter)

// console.log("Total", total)


// Firstly, let’s get this out of the way, FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.

function square(x) { 
    return x*x; 
}

console.log( square(5));

for(i=0;i<=10;i++){
    if(i%3==0){
        console.log("fizz" , i);
    }else if(i%5==0){
        console.log("buzz" , i);
    }else{
        console.log("fizz buzz" , i);

    }
}
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(123456)));

//cal
function add(a,b){
    return  a+b;
}
console.log( add(10,20));
function sub (a,b){
    return a-b;
}
console.log ( sub(20,10));
//console.log("Add",add);


function isInt(num) {
    return num % 1 === 0;
  }
  
  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3)); // false
  
  function greet(name,time){
 console.log( name ,"good", arguments[1] ,"!!");
  }
  greet('Jack','morning');

const Op = {
     add : "add",
     sub : "sub",
     div : "div",
     mul : "mul"
};

const myoperator = (op,v1,v2) => {

   

    let result = 0;
    if (op == Op.add) {
        result = v1 + v2;  
    }  
    else if (op == "sub") { 
        result = v2 - v1;  
    } 
    else if (op == "div"){
        result = v2/v1;
    }
    else if (op == "mul"){
        result = v2*v1;
    }
    else{
        return result;
    }
    return result;
}
 console.log( myoperator(Op.add,20,20));
 
