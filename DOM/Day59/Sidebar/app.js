const side = document.getElementById("side");
const text = document.getElementsByClassName("text");

side.addEventListener("mouseenter",()=>{
    side.style.width = "15vw";
    for(let item of text){
        item.style.visibility = "visible";
    }
})

side.addEventListener("mouseleave",()=>{
    side.style.width = "5vw";
    for(let item of text){
        item.style.visibility = "hidden";
    }
})