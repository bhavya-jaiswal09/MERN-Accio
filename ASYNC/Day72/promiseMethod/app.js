const api1 = "https://dummyjson.com/products";
const api2 = "https://jsonplaceholder.typicode.com/users/";
const api3 = "https://jsonplaceholder.typicode.com/photos";


// const p = Promise.any([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json())
// ])

// const p = Promise.all([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json())
// ])

// const p = Promise.race([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json())
// ])

const p = Promise.allSettled([
    fetch(api1).then(res => res.json()),
    fetch(api2).then(res => res.json()),
    fetch(api3).then(res => res.json())
])

p.then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e.message)
})