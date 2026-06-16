// // console.log(this);

// // "use strict"

// // function checkThis(){
// //     console.log(this); // with strict = undefined    without strict = window object
// // }

// // checkThis();

// let obj = {
//     name: "qwerty",
//     age:23,
//     checkThis: function(){  // with or without strict = current object
//         console.log(this);  
//     },

//     checkThis2: () =>{
//         console.log(this); // with or without strict = window object
//     },

//     checkThis3: function(){
//         const fn = ()=>{
//             console.log(this) // with or without strict = current object
//         }
//         fn();
//     },

//     checkThis4: ()=>{
//         function fn(){        
//             console.log(this); // with strict = undefined  without strict = window object
//         }
//         fn()
//     }
// }

// //obj.checkThis();
// //obj.checkThis2();
// //obj.checkThis3();
// //obj.checkThis4();






function introduce(city){
    console.log(`hello my name is ${this.name} and my age is ${this.age} my city is ${city}`);
}

let p1 = {
    name:"abc",
    age: 10,
    introduce: function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}

let p2 = {
    name:"xyz",
    age:12
}

// p1.introduce();
// p1.introduce.call(p2);

introduce.call(p1,"delhi");
introduce.call(p2,"pune");
introduce.apply(p1,["delhi"]);

const myIntro = introduce.bind(p2, "mumbai");
myIntro();