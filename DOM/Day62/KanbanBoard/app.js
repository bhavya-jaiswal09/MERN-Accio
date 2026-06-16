const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const pending = document.getElementById("pending");
const inProcess = document.getElementById("inProcess");
const completed = document.getElementById("completed");
let count  = 0;

addBtn.addEventListener("click",()=>{
    const inputText = input.value;
    const card = document.createElement("div");
    card.style.height = "50px";
    card.style.width = "120px";
    card.style.border = "1px solid brown";
    card.style.backgroundColor = "aqua";
    card.style.color = "black"
    card.innerText = inputText;
    card.style.margin = "5px";
    card.setAttribute("id" ,count);
    card.setAttribute("draggable" , true);
    pending.append(card);
    count++;
    input.value="";

})

 

pending.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",e.target.id);
})

inProcess.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",e.target.id);
})

completed.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",e.target.id);
})



pending.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

inProcess.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

completed.addEventListener("dragover",(e)=>{
    e.preventDefault();
})



pending.addEventListener("drop",(e)=>{
    const myData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(myData));
})

inProcess.addEventListener("drop",(e)=>{
    const myData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(myData));
})

completed.addEventListener("drop",(e)=>{
    const myData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(myData));
})



