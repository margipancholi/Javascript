//class basic 

// class Car{
//     drive(){

//         console.log("Y r driving!");
//     }
//     break(){
//         console.log("careful with break!");
//     }
// }
// let car1 = new Car();
// let car2 = new Car();
// console.log(car1.drive());
// console.log(car2.drive());
//volume 
class rectangularSolid{
    constructor(l,w,h){// l = Length w = Width h = Height
       this.l = l;
       this.h = h;
       this.w = w;

    }
    //getter
    get volume(){
        return this.calVolume();
    }
    //method calVolume
    calVolume(){
        return this.l * this.w * this.h ;
    }
}
const total = new rectangularSolid(10,5,1);
console.log("volume of rectangularSolid:" , total.volume);

//create obj of class f
//let object = new f();

class Car{
    constructor (model,year,color){
        this.model =model;
        this.year = year;
        this.color =color;
    }
    whatisthis(){
    return this;
    }
    drive(){
        
        console.log("Y r driving!");
    }
    break(){
        console.log("careful with break!");
    }
}
let car10 = new Car("AD200","2000","red" );
let car20 = new Car("AD400","1998","black");
console.log(car10.model);
console.log(car10.color);
console.log(car20.model);
console.log(car20.color);
console.log(car10.drive());
console.log(car20.break());
console.log(car20.whatisthis()); //this keyword reference to the current object that we are working with

// super vs extend
//super-> used for to inherit method (as object) and for inherit property or constroctor (as function)
// extend -> only used for to inherit child from parent class
// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

let a = new EZArray();
a instanceof EZArray  // => true: a is subclass instance
a instanceof Array    // => true: a is also a superclass instance.
console.log(a.push(1,2,3,4));      // a.length == 4; we can use inherited methods
console.log (a.pop() );              // => 4: another inherited method
console.log( a.first );              // => 1: first getter defined by subclass
console.log( a.last);                // => 3: last getter defined by subclass
console.log (a[1] );                 // => 2: regular array access syntax still works.Array.isArray(a)      // => true: subclass instance really is an array
console.log( EZArray.isArray(a) );   // => true: subclass inherits static methods, too!

//static
class Bike{
    static noofBikes = 0; //belongs to class
    static race(){
        console.log("On the race");
    };
    constructor (model,color){
        this.model = model;
        this.color = color;
        Bike.noofBikes += 1;
    };
}
let bike1 = new Bike ("ASDF12","black");
let bike2 = new Bike ("ASDF22","blue");


console.log(bike1.model); 
console.log(Bike.noofBikes);
console.log(Bike.race());