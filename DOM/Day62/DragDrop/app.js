const box = document.getElementById("dabba");
const ele = document.getElementById("element");

ele.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("kuchhv",e.target.id);
})

box.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

box.addEventListener("drop",(e)=>{
    //   e.preventDefault();
      const myData = e.dataTransfer.getData("kuchhv");
      e.target.appendChild(document.getElementById(myData));
})