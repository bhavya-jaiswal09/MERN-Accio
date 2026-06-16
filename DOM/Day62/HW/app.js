const input = document.getElementById("ip");
const description = document.getElementById("desc");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

addBtn.addEventListener("click",()=>{
    const inputValue = input.value;
    const descValue = description.value;
    const listItem = document.createElement("li");

    
    listItem.innerText = descValue;
    listItem.innerText = inputValue;
    list.style.cursor = "pointer";
    list.append(listItem);

    

});

list.addEventListener("click",(e)=>{
        let el = e.target;
        el.remove();
})