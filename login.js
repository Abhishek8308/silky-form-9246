let inputData=JSON.parse(localStorage.getItem("inputItem"))

    document.querySelector("#form").addEventListener("submit",myProject)

    function myProject(){
        let github=document.querySelector("#github").value
        let password=document.querySelector("#password").value
     if(github!=inputData.inputGithub && password!=inputData.inputPassword){
        alert("Github and password Wrong")
     }else if(github==inputData.inputGithub && password!=inputData.inputPassword){
        alert("Password is wrong")
     }else if(github!=inputData.inputGithub && password==inputData.inputPassword){
        alert("github is wrong")
     }else{
        alert("Login Successfull")
     }
     
    }

