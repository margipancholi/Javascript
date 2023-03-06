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


