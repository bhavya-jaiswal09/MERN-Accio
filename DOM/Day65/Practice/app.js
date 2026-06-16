console.log("My name is Anthony Gonsalves")

function Human(eye,teeth){
    this.eye = eye;
    this.teeth = teeth;
}

Human.prototype.walk = function(){
    console.log(`he has ${this.eye} eyes`);
}



let h1 = new Human(2,32);
console.log(h1);
h1.walk();


