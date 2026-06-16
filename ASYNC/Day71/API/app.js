const api = 'https://dummyjson.com/products';
const container = document.getElementById("main");
console.log("iup")
fetch(api)
.then((res)=>{
    return res.json();
}).then((data)=>{
    let productsArr = data.products;

    for(let item of productsArr){
  console.log(item)
    //     // console.log(item.price);
    //     console.log(item.title);

        const card = document.createElement("div");
        const textContainer = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const price = document.createElement("p");
        img.src = item.images;
        title.innerText = item.title;
        price.innerText = item.price;

        // style
        img.style.height = "200px";
        img.style.width = "200px;"



        textContainer.append(title,price);
        card.append(img,textContainer);
        container.append(card);

    }

     
})