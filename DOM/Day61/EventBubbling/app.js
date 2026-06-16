const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", () =>{
    console.log("Outer Div Clicked");
})

middle.addEventListener("click", () =>{
    console.log("Middle Div Clicked");
})

inner.addEventListener("click", (e) =>{
    console.log("Inner Div Clicked");
    e.stopPropagation();
})

// outer.addEventListener("click", () =>{
//     console.log("Outer Div Clicked");
// },true)

// middle.addEventListener("click", (e) =>{
//     console.log("Middle Div Clicked");
    
// },true)

// inner.addEventListener("click", (e) =>{
//     console.log("Inner Div Clicked");
    
// },true) 