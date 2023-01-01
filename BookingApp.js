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
 showUserONScreen(myObj_deserialized)
function showUserONScreen(myObj){
const parentElem =document.getElementById('listOfitems')
const childElem = document.createElement('li')
childElem.textContent=myObj.username+'-'+myObj.useremail+'-'+myObj.userphone


const deleteButton =document.createElement('input')
deleteButton.type = "button"
deleteButton.value = "X"
deleteButton.onclick=()=>{
localStorage.removeItem(myObj.useremail)
parentElem.removeChild(childElem)
parentElem.removeChild(deleteButton)
}

parentElem.appendChild(childElem);
childElem.appendChild(deleteButton);
}
}









