const api = "https://dog.ceo/api/breeds/image/random";

const btn = document.getElementById("btn");
const box = document.getElementById("box");
//const img = document.getElementById("img");

btn.addEventListener("click", ()=>{
    fetch(api).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        const img = document.createElement("img");
        img.setAttribute("src",data.message);
        img.style.height = "200px";
        img.style.width = "200px"

        box.append(img);
    })
})