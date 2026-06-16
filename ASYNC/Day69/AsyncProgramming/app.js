// console.log("Maggie Banao");

// setTimeout( ()=>{
//     console.log("Sauce");
// },4000);

// console.log("Maggie kha lo");





// console.log("Maggie Banao");

// setTimeout( ()=>{
//     console.log("Sauce");
// },0);

// console.log("Maggie kha lo");


// for(let i=0; i<999999999; i++){

// }




// setTimeout(()=>{
//     console.log("one")
// },3000)

// setTimeout(()=>{
//     console.log("two")
// },3000)

// setTimeout(()=>{
//     console.log("three")
// },3000)




// setTimeout(()=>{
//     console.log("one")
// },3000)

// setTimeout(()=>{
//     console.log("two")
// },2000)

// setTimeout(()=>{
//     console.log("three")
// },1000)




// const intervalId = setInterval(()=>{
//     console.log("hello")
// },1000);

// clearInterval(intervalId)



// const body = document.getElementById("bd");
// const ad = document.createElement("article");
// const adText = document.createElement("h1");
// const adCloseBtn = document.createElement("button");
// adText.innerText = "THis is your ad";
// adCloseBtn.innerText = "close ad";

// ad.append(adText, adCloseBtn);

// adCloseBtn.addEventListener("click",()=>{
//     ad.remove();
// })

// setInterval(()=>{
//     body.append(ad)
// },3000)



// const myInterval = setTimeout(()=>{
//     console.log("hii")
// },2000)

// console.log(myInterval)







let time = 1000
 function mysetInterval(time){
    if(time == 1000000){
        return;
    }
    setTimeout(()=>{
    console.log("hii")
    },time)
     
  mysetInterval(time + 1000)
}

mysetInterval(time);




// function mySetInterval(cb, delay){
//     let id;
//     function repeat(){
//         cb()
//         id = setTimeout(repeat,delay)
//     }

//     id = setTimeout(repeat,delay);
//     return () => clearTimeout(id);
// }

// const fn = mySetInterval(()=>{
//     console.log("hello")
// },1000)

// setTimeout(()=>{
//     fn()
// },5000)


