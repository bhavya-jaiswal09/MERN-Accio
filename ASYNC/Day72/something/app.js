console.log("start");

setTimeout(()=>{
    console.log("setTimeout");
},0)

new Promise((res,rej)=>{
    res("Promise")
}).then((data)=>{
    console.log(data);
})

console.log("end")