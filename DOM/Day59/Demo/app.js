const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector("#light");
const text = document.querySelector("#text");
const input = document.querySelector("#ip");
const heading = document.querySelector("#head")

darkBtn.addEventListener('click', ()=>{
    text.style.backgroundColor = "black";
    text.style.color = 'white';
})

lightBtn.addEventListener('click', ()=>{
    text.style.backgroundColor = "white";
    text.style.color = 'black';
})


input.addEventListener("focus",()=>{
    input.style.width = "30%";
})

input.addEventListener("blur",()=>{
    input.style.width =  "10%";
})  

input.addEventListener("input",(e)=>{
    console.log(e.target.value);
    heading.innerText = e.target.value;
})