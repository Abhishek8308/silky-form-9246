document.querySelector("#submit").addEventListener("click",myFunction)
  //  let objArr=JSON.parse(localStorage.getItem("inputItem"))|| []

   function myFunction(){
   
    let objData={
        inputGoogle:document.querySelector("#google").value,
        inputGithub:document.querySelector("#github").value,
        inputPassword:document.querySelector("#password").value,

    }
    // objArr.push(objData)
    
     localStorage.setItem("inputItem",JSON.stringify(objData))
    
   }