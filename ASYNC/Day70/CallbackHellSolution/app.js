function clickPicture(){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("picture clicked");  
            res();
        },4000)
    })
    
}

function selectPicture(){

     return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("picture selected");
            res();
        },3000)
    })
   
}

function applyFilter(){

     return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("filter applied");
            res();
        },2000)
    })
    
}

function chooseCaption(){

     return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("caption selected");
            res();
        },2000)
    })
    
}

function postPicture(){

     return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("picture posted");
            res();
        },1000)
    })
    
}

// clickPicture(()=>{
//     selectPicture(()=>{
//         applyFilter(()=>{
//             chooseCaption(()=>{
//                 postPicture()
//             })
//         })
//     })
// })


clickPicture()
.then(selectPicture)
.then(applyFilter)
.then(chooseCaption)
.then(postPicture)