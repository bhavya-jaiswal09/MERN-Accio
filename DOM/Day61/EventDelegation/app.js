const box = document.getElementById('box');
const cart = document.getElementById('cart');
const cards = document.getElementsByClassName('card');

// for(let item of cards){
//     item.addEventListener('click', (e) => {
//         let curr = e.target.innerText;
//         cart.innerText = curr + ", " + cart.innerText;
//     });
// }

box.addEventListener('click', (e) => {
    if(e.target.tagName == 'MAIN'){
        return;
    }

    let curr = e.target.innerText;
    cart.innerText = curr + ", " + cart.innerText;
});