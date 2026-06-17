const api = "https://dog.ceo/api/breeds/image/random";
const button = document.getElementById("btn");
const image = document.getElementById("img");

// button.addEventListener("click",async()=>{
//     const res = await fetch(api);
//     const data = await res.json();
//     image.src = data.message;
// })


button.addEventListener("click",()=>{
    async function getData(){
        const res = await fetch(api);
        const data = await res.json();
        image.src = data.message;
    }

    getData();
})