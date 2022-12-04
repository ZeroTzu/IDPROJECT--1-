

const Fname=document.getElementById("fname")
const Lname=document.getElementById("lname")
const Email=document.getElementById("email")
const form= document.getElementById("form")
const errorElement=document.getElementById("error")
document.addEventListener("submit",(e)=>{
   let messages=[]
   if(Email.value.search("@")==-1|| Email.value==null){
       messages.push('Please enter a valid email')
   }
   if (messages.length>0){
       e.preventDefault()
       errorElement.innerText=messages.join(",")
   }
   
})
