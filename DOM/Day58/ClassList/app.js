const box = document.querySelector("#div");

box.classList.add("qwerty");
box.classList.add("qwerty2");

box.classList.remove("qwerty");

box.classList.replace("qwerty2", "qwerty3"); 

box.classList.toggle("myClass");

box.classList.forEach((item)=>{
    console.log(item);
})