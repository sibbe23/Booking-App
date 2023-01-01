var x = document.getElementById('mainid');
x.style.border="border border-primary";
var y =document.getElementById('container');
y.style.textAlign="center";
function getData(){
var username = document.getElementById('fname').value;
var lastname = document.getElementById('lname').value;
var useremail = document.getElementById('e-mail').value;
var userphone=document.getElementById('tel').value;
var userdate =document.getElementById('date').value;
var usertime=document.getElementById('time').value;
console.log(username)
console.log(useremail)
console.log(userphone)
console.log(userdate)
console.log(usertime)
localStorage.setItem('First Name',username);
localStorage.setItem('Last Name',lastname)
localStorage.setItem('E-mail',useremail)
localStorage.setItem('Contact',userphone)
localStorage.setItem('Date Booked',userdate)
localStorage.setItem('Time selected',usertime)
}









