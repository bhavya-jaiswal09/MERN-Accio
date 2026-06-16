// // constructor function

// function Person(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let p1 = new Person("prateek", 22, "Noida");
// let p2 = new Person("Bhavya",24,"Delhi");
// console.log(p1,p2);



// // class

// class Car{
//     constructor(b, t, c){
//         this.brand = b;
//         this.tyres = t;
//         this.color = c;
//     }
// }

// let c1 = new Car("bmw", 4, "black");
// let c2 = new Car("suzuki", 4, "white");
// console.log(c1, c2);











// constructor function

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

let p1 = new Person("prateek", 22, "Noida");
let p2 = new Person("Bhavya",24,"Delhi");
// console.log(p1,p2);
Person.prototype.sayHi = ()=>{
    console.log(`hello my name is ${this.name}`);
}
p1.sayHi();
p2.sayHi();



// class

class Car{
    constructor(b, t, c){
        this.brand = b;
        this.tyres = t;
        this.color = c;
    }

    tellAboutCar(){
        console.log(this.brand, this.tyres, this.color);
    }
}

let c1 = new Car("bmw", 4, "black");
let c2 = new Car("suzuki", 4, "white");

c1.tellAboutCar();
c2.tellAboutCar();