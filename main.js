//classes
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
