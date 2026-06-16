const ipBtn = document.getElementById("ip-btn");
const ipField = document.getElementById("ip-field");
const output = document.getElementById("output");

ipBtn.addEventListener("click", (e)=>{
    const p = document.createElement("p");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    output.append(delBtn);
    p.innerText = ipField.value;
    output.appendChild(p);
    ipField.value = "";


})