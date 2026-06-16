const box = document.querySelector('#box');
const list = document.querySelector("#list");
// let p1 = document.createElement('p');
// p1.innerText = "Hello from p1";

// let p2 = document.createElement('p');
// p2.innerText = "Hello from p2";

// let p3 = document.createElement('p');
// p3.innerText = "Hello from p3";

// box.appendChild(p1);
// box.append(p1);

// box.appendChild()

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let count = 1;
for(let item of fruits){
    let li = document.createElement('li');
    li.innerText = item;
    li.setAttribute("class", "items");
    li.setAttribute("id", count);
    count++;
    list.append(li);
}