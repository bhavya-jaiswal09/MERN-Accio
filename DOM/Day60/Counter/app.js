const ans = document.getElementById("count");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
const dec = document.getElementById("dec");
let count = 0;


inc.addEventListener("click", ()=>{
    count++;
    ans.innerText = count;
});

dec.addEventListener("click", ()=>{
    count--;
    ans.innerText = count;
});

res.addEventListener("click", ()=>{
    ans.innerText = 0;
})