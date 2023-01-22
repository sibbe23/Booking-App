var x = document.getElementById('mainid');
x.style.border="border border-primary";
var y =document.getElementById('container');
y.style.textAlign="center";
function getData(event){
    event.preventDefault();
    
// var username = document.getElementById('fname').value;
// var lastname = document.getElementById('lname').value;
// var useremail = document.getElementById('e-mail').value;
// var userphone=document.getElementById('tel').value;
// var userdate =document.getElementById('date').value;
// var usertime=document.getElementById('time').value;
// console.log(username)
// console.log(useremail)
// console.log(userphone) 
// console.log(userdate)
// console.log(usertime)
// localStorage.setItem('First Name',username);
// localStorage.setItem('Last Name',lastname)
// localStorage.setItem('E-mail',useremail)
// localStorage.setItem('Contact',userphone)
// localStorage.setItem('Date Booked',userdate)
// localStorage.setItem('Time selected',usertime)
window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/bc274f1a27194d90b0d2563bcc7a5a57/bookingapp")
  .then((response)=>{
    console.log(response);
    showUserONScreen(myObj_deserialized)

  })
  .catch((err)=>{
      console.log(err);
  })
})
var username;
var lastname;
var useremail;
var userphone;
var userdate;
var usertime;
var myObj = {
 username: document.getElementById('fname').value,
  lastname : document.getElementById('lname').value,
  useremail : document.getElementById('e-mail').value,
  userphone:document.getElementById('tel').value,
  userdate :document.getElementById('date').value,
  usertime:document.getElementById('time').value,
};
  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem("myObj",myObj_serialized);
let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);
 localStorage.setItem(myObj.useremail,JSON.stringify(myObj_deserialized));
 axios.post("https://crudcrud.com/api/bc274f1a27194d90b0d2563bcc7a5a57/bookingapp",myObj)

 .then((response)=>{
  showUserONScreen(response.data)
 })
 .catch((err)=>{
     console.log(err);
 })
 

 showUserONScreen(myObj_deserialized)
  

function showUserONScreen(myObj){

myObj = {
  _id:'',
  name:'',
  email:'',
  mobile:'',
}
axios.delete(`https://crudcrud.com/api/bc274f1a27194d90b0d2563bcc7a5a57/bookingapp/${myObj._id}`)

  .then((response)=>
  {
    document.getElementById('fname').value = myObj.name;
    document.getElementById('lname').value = myObj.name
    document.getElementById('e-mail').value = myObj.email
    document.getElementById('tel').value = myObj.mobile
  })
  .catch((err)=>
  {
    console.log(err);
  })

}
const parentElem =document.getElementById('listOfitems')
const childElem = document.createElement('li')
childElem.textContent=myObj.username+'-'+myObj.useremail+'-'+myObj.userphone


const deleteButton =document.createElement('input')
deleteButton.type = "button"
deleteButton.value = "X"
deleteButton.onclick=()=>{

localStorage.removeItem(myObj.email)
parentElem.removeChild(childElem)
parentElem.removeChild(deleteButton)
}

parentElem.appendChild(childElem);
childElem.appendChild(deleteButton);

const editButton =document.createElement('input')
editButton.type = "button"
editButton.value = "Edit"
editButton.onclick=()=>{



localStorage.removeItem(myObj.useremail)
parentElem.removeChild(childElem)
document.getElementById('fname').value = myObj.name
document.getElementById('lname').value = myObj.name
document.getElementById('e-mail').value = myObj.email
document.getElementById('tel').value = myObj.mobile
}

parentElem.appendChild(childElem);
childElem.appendChild(editButton);
}

