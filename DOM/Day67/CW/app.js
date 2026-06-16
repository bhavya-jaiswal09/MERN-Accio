const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
const op = document.getElementById("output")


let arr = [];
btn.addEventListener("click",()=>{
    let text = ip.value;
    let li = document.createElement("li");
    li.innerText = text;
    op.append(li);
    ip.value = "";
    arr.push(text);
    console.log(arr);

    localStorage.setItem("task",arr);
}) 


window.addEventListener("load",()=>{
    
})