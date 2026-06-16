const btn = document.getElementById("btn");
const userAlert = document.getElementById("user-alert")
const emailAlert = document.getElementById("email-alert")
const pwAlert = document.getElementById("pw-alert")
const ageAlert = document.getElementById("age-alert")
const inputUser = document.getElementById("ip-user");
const inputAge = document.getElementById("ip-age");
const inputEmail = document.getElementById("ip-email")
const inputPw = document.getElementById("ip-pw")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const userLength = inputUser.value.length;
    if(userLength < 4 || userLength > 8){
        let para = document.createElement("P");
        console.log(para)
        para.innerText = "Enter valid username";
        para.style.color = "red";
        userAlert.append(para);

    }

    
    if(inputEmail.value.endsWith("@gmail.com")){
         
    }else{
        let para = document.createElement("P");
         para.innerText = "Enter valid email";
        para.style.color = "red";
        emailAlert.append(para);
    }

    if(inputAge.value < 18){
        let para = document.createElement("P");
         para.innerText = "Enter valid age";
        para.style.color = "red";
        ageAlert.append(para);
    }

    if(inputPw.value.length > 8){
        let para = document.createElement("P");
         para.innerText = "Enter valid password";
        para.style.color = "red";
        pwAlert.append(para);
    }else if(inputPw.value.contains())
})