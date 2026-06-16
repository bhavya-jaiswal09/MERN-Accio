// console.log(Promise.prototype.__proto__.__proto__);

const p1 = new Promise((resolve,reject)=>{
    let arr = [1,2];
    if(arr.length > 0){
        //resolve()
        resolve(arr);
    }else{
        reject("data nahi chla")
    }
})

//console.log(p1)

p1.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("data nahi chla");
})

const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({name:"bhavya"})
        //rej({msg:"kaam nhi hua"})
    },4000)
})

p2.then((data)=>{
    console.log(data.name);
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Mai finally hu");
})