if(!Array.prototype.hasOwnProperty("sum")){
    Array.prototype.sum = function(){
        let s = 0;
        for(let item of this){
            s += item;
        }

        return s;
    }
}
let arr = [1,2,3,4,5,6];
console.log(arr.sum());



String.prototype.toLowerCase = function(){
    return this.toUpperCase();
}
console.log("Bhavya".toLowerCase());


