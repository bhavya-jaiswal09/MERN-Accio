const input = document.getElementById("gs");


// function inputHandler(){
//     console.log("api called")
// }


 
// function inputHandler(){ 
//     setTimeout(()=>{
//         console.log("api called st...")
//     },2000)
// }


// let id;
// function inputHandler(){
//     clearTimeout(id);
//     id = setTimeout(()=>{
//         console.log("api called st...")
//     },2000)
// }


// let id;
// function inputHandler(e){
//     clearTimeout(id);
//     id = setTimeout(()=>{
//         console.log("api called for query" + e.target.value)
//     },2000)
// }


// input.addEventListener("input", inputHandler)







function debounce(fn,delay){
    let id;

    return function(e){
        clearTimeout(id);
        id = setTimeout(()=>{
            fn(e)
        },delay)
    }
}

const debounceHandler = debounce((e)=> console.log(`API called for query: ${e.target.value}`),1000);

input.addEventListener("input", debounceHandler)




// debouncing

// a technique that delalys the execution of a function until a specified period 
// has passed since the last time the event was triggered