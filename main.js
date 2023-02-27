// // // // //let mycolor= "black";
// // // // //console.log(mycolor);

// // // // // let i=10, j=20;
// // // // // console.log('10+20 =' , i+j);

// // // // // object can be
// // // // //let book{
// // // // //    name="AB",
// // // // //    price="10"
// // // // //};
// // // // //array can be
// // // // //let data = [, , ,];
// // // // //let data = {a:[,] , b:[,]};
// // // // let l=console.log;
// // // // let a = 10;
// // // // let b = 20;
// // // // let c = a + b;
// // // // let d;

// // // // console.log(`${a} + ${b} = ${c}`);

// // // // // loop

// // // // // prrint 1 to 100

// // // // for (let index = 1; index <= 100; index++) {
// // // //   console.log("==>", index);
// // // // }
// // // // //functions can be
// // // // let x = 12;
// // // // function plus(x) {
// // // //   return x++;
// // // // }
// // // // // 5*4*3(*2*1)
// // // // //n * n-1 * (n-1)-1 *.. *1
// // // // //n! = n \times (n-1) \times \dots \times 1
// // // // function recurse(n) {
// // // //   if (n === 0) {
// // // //     return 1;
// // // //   }
// // // //   return n * recurse(n - 1);
// // // // }
// // // // console.log(recurse(3));

// // // // function factorial(n) {    // A function to compute factorials
// // // //     let product = 1;       // Start with a product of 1
// // // //     while(n > 1) {         // Repeat statements in {} while expr in () is true
// // // //         product *= n;      // Shortcut for product = product * n;
// // // //         n--;               // Shortcut for n = n - 1
// // // //     }                      // End of loop
// // // //     return product;        // Return the product
// // // // }
// // // // l(factorial(4));               // => 24: 1*4*3*2





// // // //  // function to reverse the string
// // // //  let test = "margiigr";
// // // //  function reverse( str )
// // // //  {
// // // //    let rev_str = "";
// // // //    for( let i = str.length-1 ;i >= 0 ;i--)
// // // //    {
// // // //      rev_str+= str[i];
// // // //    }
// // // //    return rev_str;
// // // //  }

// // // //  //  function checking string is palindrome or not
// // // //  function is_palindrome( str )
// // // //  {
// // // //    reverse_str = reverse(str);

// // // //    if( reverse_str === str)
// // // //    {
// // // //      l("passed string is palindrome ");
// // // //    }
// // // //    else
// // // //    {
// // // //     l("passed string is not palindrome")
// // // //    }
// // // //  }
// // // //  is_palindrome(test);

// // // // l("\u{1F600}");
// // // // let now = new Date();
// // // // l(now);

// // // // let count = 0;
// // // // while(count <= 10) {
// // // //     l(count);
// // // //     count++;
// // // // }




// // // // // create array with 3 item

// // // // let array[2] =[1, 2, 3];
// // // let myArr = ["jack","Sparrow","Margi"];

// // // console.log(myArr)

// // // // // add one item
// // // // let add.array[4] = 10;

// // // myArr.push("Habak")

// // // console.log(myArr)

// // // // // remove 2nd element 
// // // // let remove.array[1];

// // // let hii = myArr.indexOf(2)

// // // // console.log(myArr)
// // // console.log(hii)



// // // // // add element at 1st position 
// // // // let add.array[0] = 10;



// //  const colors = ["red", "green", "blue"];
// //  for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// //  }
 let book = {
    "main title": "JavaScript",          // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences",                // for is reserved, but no quotes.
    author: {                            // The value of this property is
        firstname: "David",              // itself an object.
        surname: "Flanagan"
    }
};
//console.log(book);
console.log(book.author);


// // let square = {

// //     area: function() {
        
// //          return this.side * this.side; },
// //          side: 10.50050
    
// // };
// // console.log(square.area()) // => 100


let letters = ["H","e","l","l","o", "w","o","r","l","d"];
let vowels = "";
for(let i = 0; i < letters.length; i++) { // For each index in the array
    let letter = letters[i];              // Get the element at that index
    if (/[aeiou]/.test(letter)) {         // Use a regular expression test
        vowels += letter;                 // If it is a vowel, remember it
    }
}
console.log(vowels, letters.length);  

let scope = "global scope";          // A global variable
function Checkscope() {
   // let scope = "local scope";       // A local variable
    function f() { return scope; }   // Return the value in scope here
    return f();
}
console.log( Checkscope() )  ;