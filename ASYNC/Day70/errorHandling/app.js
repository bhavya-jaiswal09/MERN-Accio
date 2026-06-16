// const error = new Error("This is a custom error");


// console.log(error);
// throw error;
// console.log("important code");



class AccioError extends Error{
    constructor(msg,n){
        super(msg);
        this.name = n
    }
}

// throw new AccioError("custom error", "username error");





//   error  handling

try{
    //throw new Error("Afgasgw");
    throw new AccioError("custom error","username error")
} catch(err){
    console.log(err.message)
    console.log(err.name);
}


console.log("importand code")