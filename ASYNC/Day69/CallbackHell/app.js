function clickPicture(fn){
    setTimeout(()=>{
        console.log("picture clicked");
        fn();
    },4000)
}

function selectPicture(fn){
    setTimeout(()=>{
        console.log("picture selected");
        fn();
    },3000)
}

function applyFilter(fn){
    setTimeout(()=>{
        console.log("filter applied");
        fn();
    },2000)
}

function chooseCaption(fn){
    setTimeout(()=>{
        console.log("caption selected");
        fn();
    },2000)
}

function postPicture(){
    setTimeout(()=>{
        console.log("picture posted");
        
    },1000)
}

clickPicture(()=>{
    selectPicture(()=>{
        applyFilter(()=>{
            chooseCaption(()=>{
                postPicture()
            })
        })
    })
})
