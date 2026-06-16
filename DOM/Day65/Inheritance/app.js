// // Single Inheritance
// class Parent{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const p1 = new Parent("bhavya",23);
// console.log(p1);

// class Child extends Parent{
//     constructor(name,age,mobile){
//         super(name,age);
//         this.mobile = mobile
//     }
// }

// const c1 = new Child("bhavya",23,"Moto");
// console.log(c1);



// Multilevel Inheritance
class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log("Namaste");
    }
}


class Child extends Parent{
    constructor(name,age,mobile){
        super(name,age);
        this.mobile = mobile
    }
}


class grandChild extends Child{
    constructor(name,age,mobile,cycle){
        super(name,age,mobile);
        this.cycle = cycle;
    }
}

let gc1 = new grandChild("bhavya",22,"moto","atlas");
console.log(gc1);
gc1.sayHi();



